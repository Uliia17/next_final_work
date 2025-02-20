import {getUser} from "@/utils/getUser";
import MenuComponent from "@/components/menu/MenuComponent";
import {IUser} from "@/models/IUser";
import React from "react";

export default async function RootLayout({children}: {children: React.ReactNode}) {
    const user: IUser | null = await getUser();
    const isAuthenticated = !!user;

    return (
        <html lang="en">
        <body>
        <MenuComponent user={user} isAuthenticated={isAuthenticated}/>
        <main>{children}</main>
        </body>
        </html>
    );
}












