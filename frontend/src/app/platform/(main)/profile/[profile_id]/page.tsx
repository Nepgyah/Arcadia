'use client';

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "../profile";
import { apiGET } from "@/util/api/api";

export default function PublicProfile() {
    const params = useParams();

    const [user, setUser] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        apiGET(`account/profile/${params.profile_id}/`)
        .then((res) => {
            setUser(res);
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    if (!isLoading) {
        return (
            <Profile user={user} />
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}