'use client';

import { useEffect } from "react";
import { useBreadcrumbStore } from "@/app/store/store";

export default function BreadcrumbSetter({ breadcrumbs} : { breadcrumbs: string[]}){
    const setBreadcrumbs = useBreadcrumbStore((state) => state.setBreadcrumbs)

    useEffect(() => {
        setBreadcrumbs(breadcrumbs)
    }, [])
    
    return null;
}