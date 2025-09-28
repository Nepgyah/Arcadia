'use client';

import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { styled, keyframes } from '@mui/system';
import { Box, Fade, Grid, Grow, Slide } from "@mui/material";

type direction = "up" | "down" | "left" | "right";

const FadeIn = ({children, id, className='', direction = 'up', delay = .2, threshold = 0.7,} : {
        children: React.ReactNode,
        className?: string,
        id?: string,
        direction: direction,
        delay?: number,
        threshold?: number
    }) => {

    const { ref, inView } = useInView({ threshold })
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (inView) {
        const timeout = setTimeout(() => {
            setShow(true);
        }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [inView, delay]);

    const directionTransforms: Record<string, string> = {
        up: "translateY(20px)",
        down: "translateY(-20px)",
        left: "translateX(20px)",
        right: "translateX(-20px)",
    };
    return (

    <Grid
        className={className}
        id={`${id}`}
        ref={ref}
        sx={{
            opacity: show ? 1 : 0,
            transform: show ? "translate(0, 0)" : directionTransforms[direction],
            transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        }}
    >
      {children}
    </Grid>
    )
}

export default FadeIn;