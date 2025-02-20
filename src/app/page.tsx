import Link from "next/link";
import styles from "@/app/page.module.css";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <img src="https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beautiful landscape" className={styles["background-image"]} />
            <h1 className={styles.title}>Кращі рецепти тут!</h1>
            <Link href="/login" className={styles.link}>Увійти</Link>
        </div>
    );
}



















