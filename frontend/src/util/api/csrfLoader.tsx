"use client";

import { useEffect } from "react";

export default function CSRFLoader() {
    useEffect(() => {
        fetch('http://localhost:8000/api/account/auth/csrf/', {
            credentials: 'include'
        })
    }, [])

    return null;
}