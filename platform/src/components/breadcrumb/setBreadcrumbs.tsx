'use client';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/slices/breadcrumbSlice";

export default function BreadcrumbSetter({ breadcrumbs} : { breadcrumbs: string[]}){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBreadcrumbs(breadcrumbs))
    }, [])
    
    return null;
}