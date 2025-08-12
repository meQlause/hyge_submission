'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { UseCarouselDragOptionsProps } from "@/utils/interfaces";
import { useRef, useState, useCallback, useEffect, useMemo } from "react";


export const useCarouselDrag = ({ length, startIndex = 0, onChange }: UseCarouselDragOptionsProps) => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const posX = useRef(0);
    const lastX = useRef(0);

    const [active, setActive] = useState<number>(
        Math.min(Math.max(startIndex, 0), Math.max(length - 1, 0))
    );

    const setX = useCallback((x: number) => {
        const el = trackRef.current;
        if (el) el.style.transform = `translateX(${x}px)`;
    }, []);

    const getSlideWidth = () => {
        const first = trackRef.current?.children?.[0] as HTMLElement | undefined;
        return first ? first.getBoundingClientRect().width : (containerRef.current?.clientWidth ?? 0);
    };

    const getBounds = () => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return { min: 0, max: 0 }
        const max = 0;
        const min = container.clientWidth - track.scrollWidth; 
        return { min, max };
    };

    const updateActive = () => {
        const w = getSlideWidth();
        if (!w) return;
        const i = Math.round((-posX.current) / w);
        const clamped = Math.max(0, Math.min(length - 1, i));
        setActive(clamped);
        onChange?.(clamped);
    };

    const onDown = (clientX: number) => {
        isDragging.current = true;
        startX.current = clientX;
    };

    const sensitivity = 2.5;
    const onMoveClientX = (clientX: number) => {
        if (!isDragging.current) return;
        const dx = (clientX - startX.current) * sensitivity; 
        const proposed = lastX.current + dx;
        const { min, max } = getBounds();
        posX.current = Math.max(min, Math.min(max, proposed));
        setX(posX.current);
    };

    const onUpBase = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const { min, max } = getBounds();
        posX.current = Math.max(min, Math.min(max, posX.current));
        lastX.current = posX.current;
        setX(posX.current);
        updateActive();
    };

    const goTo = (i: number) => {
        const w = getSlideWidth();
        const { min, max } = getBounds();
        const x = Math.max(min, Math.min(max, -i * w));
        posX.current = x;
        lastX.current = x;
        setX(x);
        if (i !== active) {
            setActive(i);
            onChange?.(i);
        }
    };

    useEffect(() => {
        const onResize = () => {
            const w = getSlideWidth();
            const { min, max } = getBounds();
            const x = Math.max(min, Math.min(max, -active * w));
            posX.current = x;
            lastX.current = x;
            setX(x);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [active, length, setX]);

    useEffect(() => {
        goTo(active);
    }, []);

    const eventProps = useMemo(() => ({
        onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => { e.preventDefault(); onDown(e.clientX); },
        onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => onMoveClientX(e.clientX),
        onMouseUp: onUpBase,
        onMouseLeave: onUpBase,
        onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => onDown(e.touches[0].clientX),
        onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => onMoveClientX(e.touches[0].clientX),
        onTouchEnd: onUpBase,
    }), []);

    return { containerRef, trackRef, active, goTo, eventProps };
}


