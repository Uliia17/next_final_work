import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import SearchComponent from "@/components/search/SearchComponent";
import UsersComponent from "@/components/users/UsersComponent";
import styles from '@/styles/UsersPage.module.css';

export default async function UsersPage({
                                            searchParams,
                                        }: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("authToken");

    if (!authToken) {
        redirect("/login");
    }

    const params = await searchParams;

    const searchQuery =
        typeof params?.search === "string" ? params.search : Array.isArray(params?.search) ? params?.search[0] : "";

    const currentPage =
        typeof params?.page === "string" ? Number(params.page) : 1;

    const apiUrl = /^\d+$/.test(searchQuery)
        ? `https://dummyjson.com/users/${searchQuery}`
        : `https://dummyjson.com/users/search?q=${searchQuery}&limit=30&skip=${(currentPage - 1) * 30}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    const users = Array.isArray(data.users) ? data.users : [data];
    const total = "total" in data ? data.total : 1;

    return (
        <div className={styles.container}>
            <SearchComponent basePath="/users" search={searchQuery} />
            <UsersComponent users={users} />
            <PaginationComponent
                currentPage={currentPage}
                totalItems={total}
                itemsPerPage={30}
                basePath="/users"
            />
        </div>
    );
}




