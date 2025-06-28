'use client';

import { createContext, useContext } from "react";

type User = {
    id: number,
    username: string,
    email: string
}

const UserContext = createContext<User | null>(null);

export function UserProvider({
    user,
    children
} : {
    user: User,
    children: React.ReactNode
}) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function getUser() {
    return useContext(UserContext);
}