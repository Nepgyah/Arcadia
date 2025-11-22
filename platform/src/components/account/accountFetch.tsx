'use client';

import { useEffect } from "react";
import { useUserStore } from "@/app/store";
import { apiGET } from "@/util/api/api";

export default function AccountFetcher() {
    const setUser = useUserStore((state) => state.setUser)

    useEffect(() => {
        apiGET<any>('account/get/')
        .then((res) => {
            setUser(res.user)
        })
    })
    return null
}