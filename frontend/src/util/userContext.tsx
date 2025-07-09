'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { apiGET } from "./api";

type User = {
    id: number,
    username: string,
    tag: number,
    email: string,
    real_name: string,
    about: string,
    birth_date: string | null,
    updated_at: string,
    created_at: string,
    picture_preset: number,
    color_preset: number
}

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void
}
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({
    children
} : {
    user: User,
    children: React.ReactNode
}) {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        apiGET<any>('account/get/')
        .then((res) => {
            setUser(res.user)
        })
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
    </UserContext.Provider>)
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}