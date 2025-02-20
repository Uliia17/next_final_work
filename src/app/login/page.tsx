'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Login.module.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
        });

        if (response.ok) {
            router.push('/');  // Редірект на головну сторінку
            router.refresh();  // Оновлюємо дані на новій сторінці
        } else {
            const data = await response.json();
            setError(data.message || 'Помилка логіну');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Вхід</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.label}>Ім&apos;я користувача:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                            className={styles.input}
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Пароль:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            className={styles.input}
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.button}>Увійти</button>
                </form>
            </div>
        </div>
    );
}



