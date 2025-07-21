'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { apiGET } from "../api/api";
import { useSnackbar } from "@/util/wrappers/snackbarProvider";
import { User } from "../types/account";

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void,
    userLoading: boolean
}
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({
    children
} : {
    children: React.ReactNode
}) {
    const { showMessage } = useSnackbar()
    const [user, setUser] = useState<User | null>(null)
    const [userLoading, setUserLoading] = useState<boolean>(true);

    useEffect(() => {
        apiGET<any>('account/get/')
        .then((res) => {
            setUser(res.user)
        })
        .catch((error) => {
            showMessage(error, "error");
        })
        .finally(() => {
            setUserLoading(false)
        })
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, userLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}