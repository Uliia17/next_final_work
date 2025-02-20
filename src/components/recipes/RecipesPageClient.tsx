"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import RecipesComponent from "@/components/recipes/RecipesComponent";
import SearchComponent from "@/components/search/SearchComponent";
import styles from "@/styles/RecipesPage.module.css";

export default function RecipesPageClient() {
    const searchParams = useSearchParams();

    const searchQuery = searchParams.get("search")?.trim() || "";
    const tag = searchParams.get("tag")?.trim() || "";
    const pageParam = searchParams.get("page");
    const currentPage = pageParam && /^\d+$/.test(pageParam) ? Number(pageParam) : 1;

    const [recipes, setRecipes] = useState([]);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        let apiUrl = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchQuery)}&limit=30&skip=${(currentPage - 1) * 30}`;
        if (/^\d+$/.test(searchQuery)) {
            apiUrl = `https://dummyjson.com/recipes/${searchQuery}`;
        } else if (tag) {
            apiUrl = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(tag)}&limit=30&skip=${(currentPage - 1) * 30}`;
        }

        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to fetch recipes: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setRecipes(Array.isArray(data.recipes) ? data.recipes : data.recipes ? [data.recipes] : []);
                setTotal("total" in data ? data.total : 1);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [searchQuery, tag, currentPage]);

    if (error) {
        return (
            <div className={styles.container}>
                <h1>Помилка завантаження рецептів 😢</h1>
                <p>Будь ласка, спробуйте ще раз пізніше.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchComponent}>
                <SearchComponent basePath="/recipes" search={searchQuery} />
            </div>
            {loading ? (
                <p>Завантаження...</p>
            ) : (
                <>
                    <RecipesComponent recipes={recipes} />
                    <div className={styles.paginationComponent}>
                        <PaginationComponent
                            currentPage={currentPage}
                            totalItems={total}
                            itemsPerPage={30}
                            basePath="/recipes"
                        />
                    </div>
                </>
            )}
        </div>
    );
}
