'use client';

import { App } from "@/types/shared";

export default function ArcTab(
    {
        label, value, currentValue, icon, setTabFunc
    } : {
        label: string,
        value: string,
        currentValue: string,
        icon: string,
        setTabFunc: (value: string) => void; 
    }
) {
    return (
        <div className={`arc-tab ${currentValue === value && 'arc-tab--selected'}`}>
            <div className="arc-tab__icon border-radius-sm clickable center-both" onClick={() => setTabFunc(value)}>
                <img src={`/icons/${icon}.png`} alt="" />
            </div>
            <div className="arc-tab__label clickable" onClick={() => setTabFunc(value)}>
                <p>{label}</p>
            </div>
        </div>
    )
}