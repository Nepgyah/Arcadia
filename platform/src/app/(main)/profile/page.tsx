'use client';

import { useUserStore } from "@/app/store/store";
import Profile from "./profile";

export default function SelfProfile() {
    const user = useUserStore((state) => state.user)

    if (user == null) {
        return (
            <h1>Not logged In</h1>
        )
    }

    return (
        <Profile user={user} />
    )
}