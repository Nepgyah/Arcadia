'use client';

import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ArcStat({
    color = 'arc-tertiary',
    value,
    addPlus = false,
    label,
    delay = 0.2,
    duration = 2
}: {
    color?: string,
    value: number;
    addPlus?: boolean;
    label: string;
    delay?: number;
    duration?: number
}) {
    const threshold = 0.7;
    const { ref, inView } = useInView({ threshold, triggerOnce: true });
    const [show, setShow] = useState(false);
    const [currentValue, setCurrentValue] = useState<number>(0);

    useEffect(() => {
        if (inView) {
        const timeout = setTimeout(() => {
            setShow(true);
            const startTime = performance.now();

            function updateCounter(currentTime: number) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / (duration * 1000), 1); // 2s animation

            const newValue = Math.floor(value * progress);
            setCurrentValue(newValue);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
            }

            requestAnimationFrame(updateCounter);
        }, delay * 1000); // apply delay
        return () => clearTimeout(timeout);
        }
    }, [inView, delay]);

    return (
        <Grid
            className="arc-stat"
            ref={ref}
            sx={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
            }}
            >
            <h3 className={`arc-stat__value clr-${color}`}>
                {currentValue}
                {addPlus && "+"}
            </h3>
            <p className="arc-stat__label">{label}</p>
        </Grid>
    );
}
