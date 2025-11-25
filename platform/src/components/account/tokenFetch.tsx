'use client';

import { useCSRFStore } from "@/app/store/store";
import { useEffect } from "react";

const api_root = process.env.NEXT_PUBLIC_API_URL;

export default function TokenFetcher() {
    const setToken = useCSRFStore((state) => state.setToken);

    useEffect(() => {
        fetch(`${api_root}account/auth/csrf/`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.csrfToken) setToken(data.csrfToken);
      });
    })

    return null;
}