"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/SearchComponent.module.css";

export default function SearchComponent({ basePath, search }: { basePath: string; search?: string }) {
    const router = useRouter();
    const [query, setQuery] = useState(search || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`${basePath}?search=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Пошук рецептів або користувачів..."
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>🔍</button>
        </form>
    );
}
