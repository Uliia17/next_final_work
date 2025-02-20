import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RecipesPageClient from "@/components/recipes/RecipesPageClient";

export default async function RecipesPage() {
    const cookieStore = cookies();
    const authToken = (await cookieStore).get("authToken")?.value;

    if (!authToken) {
        redirect("/login");
    }

    return <RecipesPageClient />;
}











