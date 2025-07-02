'use client';

import { useUser } from "@/util/userContext";
import Profile from "./profile";

export default function SelfProfile() {
    const { user } = useUser()

    return (
        <Profile user={user} />
    )
}