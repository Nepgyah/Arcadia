'use client';

import { apiGET } from "@/util/api/api"
import { useEffect } from "react"

export default function MiruHome() {

    useEffect(() => {
        apiGET<any>('miru/home')
        .then((res) => {
            console.log(res.animes)
        })
    }, [])
    return (
        <h1>Miru Home</h1>
    )
}