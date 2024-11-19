import Link from "next/link";
import React from "react";

const SideNav = () => {
    return (
        <div className="side-nav">
            <Link href="/profile">
                Profile
            </Link>
        </div>
    )
}

export default SideNav;