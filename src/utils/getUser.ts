// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const token = cookieStore.get('authToken')?.value;
//     if (!token) return null;
//
//     try {
//         const res = await fetch('https://dummyjson.com/auth/me', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//           });
//
//         if (!res.ok) {
//             console.error('Не вдалося отримати дані користувача, статус:', res.status);
//             return null;
//         }
//
//         const user = await res.json();
//         return user;
//     } catch (error) {
//         console.error('Помилка при запиті даних користувача:', error);
//         return null;
//     }
// }

// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const token = cookieStore.get('authToken')?.value;
//     if (!token) return null;
//
//     try {
//         const res = await fetch('https://dummyjson.com/auth/me', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });
//
//         if (!res.ok) {
//             console.error('Не вдалося отримати дані користувача, статус:', res.status);
//             return null;
//         }
//
//         const user = await res.json();
//         return user;
//     } catch (error) {
//         console.error('Помилка при запиті даних користувача:', error);
//         return null;
//     }
// }
// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const userCookie = cookieStore.get('user');
//     if (!userCookie) return null;
//
//     try {
//         const user = JSON.parse(userCookie.value);
//         return user;
//     } catch (error) {
//         console.error('Помилка при парсингу даних користувача:', error);
//         return null;
//     }
// }
// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const userCookie = cookieStore.get('user');
//     if (!userCookie) return null;
//
//     try {
//         const user = JSON.parse(userCookie.value);
//         return user;
//     } catch (error) {
//         console.error('Помилка при парсингу даних користувача:', error);
//         return null;
//     }
// }
// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const authToken = cookieStore.get('authToken');
//
//     if (!authToken) return null;
//
//     try {
//         const response = await fetch('https://dummyjson.com/auth/me', {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${authToken.value}`,
//             },
//         });
//
//         if (!response.ok) return null;
//
//         return await response.json();
//     } catch (error) {
//         console.error('Помилка при отриманні користувача:', error);
//         return null;
//     }
// }
// import { cookies } from 'next/headers';
//
// export async function getUser() {
//     const cookieStore = await cookies();
//     const userCookie = cookieStore.get('user');
//
//     if (!userCookie) return null;
//
//     try {
//         return JSON.parse(userCookie.value);
//     } catch (error) {
//         console.error('Помилка при парсингу кукі користувача:', error);
//         return null;
//     }
// }
import { cookies } from 'next/headers';

export async function getUser() {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');

    if (!userCookie) return null;

    try {
        return JSON.parse(userCookie.value);
    } catch (error) {
        console.error('Помилка при парсингу кукі користувача:', error);
        return null;
    }
}



