import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import SearchComponent from "@/components/search/SearchComponent";
import styles from '@/styles/RecipesPage.module.css';
import RecipesComponent from "@/components/recipes/RecipesComponent";

export default async function RecipesPage({
                                            searchParams,
                                        }: {
    searchParams: {[key: string]: string | string[] | undefined};
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
        ? `https://dummyjson.com/recipes/${searchQuery}`
        : `https://dummyjson.com/recipes/search?q=${searchQuery}&limit=30&skip=${(currentPage - 1) * 30}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    const recipes = Array.isArray(data.recipes) ? data.recipes : [data];
    const total = "total" in data ? data.total : 1;

    return (
        <div className={styles.container}>
            <SearchComponent basePath="/recipes" search={searchQuery} />
            <RecipesComponent recipes={recipes} />
            <PaginationComponent
                currentPage={currentPage}
                totalItems={total}
                itemsPerPage={30}
                basePath="/recipes"
            />
        </div>
    );
}














