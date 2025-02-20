'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {IUser} from "@/models/IUser";
import styles from '@/styles/Menu.module.css';

interface MenuProps {
    user: IUser | null;
    isAuthenticated: boolean;
}

export default function MenuComponent({user, isAuthenticated}: MenuProps) {
    const [userData, setUserData] = useState<IUser | null>(user);

    const fetchUser = async () => {
        const response = await fetch('/api/auth/user', {
            method: 'GET',
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data.user);
        } else {
            console.error('User not authenticated');
            setUserData(null);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchUser();
        }
    }, [isAuthenticated]);

    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (response.ok) {
            window.location.href = '/login';
        } else {
            console.error('Logout error');
        }
    };

    return (
        <nav className={styles.nav}>
            {isAuthenticated && userData ? (
                <>
                    <Link href="/recipes" className={styles.link}>Рецепти</Link>
                    <Link href="/users" className={styles.link}>Користувачі</Link>
                    {userData.image && <img src={userData.image} alt="User Avatar" className={styles.avatar} />}
                    <form onSubmit={handleLogout} className={styles.logoutForm}>
                        <button type="submit" className={styles.logoutButton}>Logout</button>
                    </form>
                </>
            ) : (
                <Link href="/login" className={styles.link}>Увійти</Link>
            )}
        </nav>
    );
}







