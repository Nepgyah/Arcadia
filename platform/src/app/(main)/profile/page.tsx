'use client';

import { useUser } from "@/util/wrappers/userContext";
import Profile from "./profile";

export default function SelfProfile() {
    const { user } = useUser()

    if (user == null) {
        return (
            <h1>Not logged In</h1>
        )
    }

    return (
        <Profile user={user} />
    )
}