'use client';
import React, { useEffect, useRef, forwardRef } from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Reusable Grid Item Component ---
const BioluminescentGridItem = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);

    // Effect to track mouse position and update CSS custom properties
    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        // Use explicit cast for event listener if needed by strict TS, but usually fine.
        item.addEventListener('mousemove', handleMouseMove as any);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove as any);
        };
    }, []);

    // Merge refs
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(itemRef.current);
        } else if (ref) {
            // @ts-ignore
            ref.current = itemRef.current;
        }
    }, [ref]);

    return (
        <div
            ref={itemRef}
            className={cn('bio-item', className)}
            {...props}
        >
            <div className="bio-item-content">
                {children}
            </div>
        </div>
    );
});
BioluminescentGridItem.displayName = "BioluminescentGridItem";


// --- Main Grid Container Component ---
const BioluminescentGrid = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn('bio-grid', className)}
            {...props}
        >
            {children}
        </div>
    );
});
BioluminescentGrid.displayName = "BioluminescentGrid";

// Exporting the item as a named export for clarity
export { BioluminescentGrid, BioluminescentGridItem };
