"use client";

import { StarIcon } from "../icons";
import { useEffect, useRef } from "react";

type TickerProps = {
    words: string[];
};

const Ticker = (props: TickerProps) => {
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (!ticker) return;

        // Calculate the total width of the ticker content
        const totalWidth = ticker.scrollWidth;

        // Set the animation duration dynamically based on the content width
        ticker.style.setProperty("--scroll-width", `${totalWidth}px`);

        const animation = ticker.animate(
            [
                { transform: "translateX(100%)" },
                { transform: `translateX(-100%)` },
            ],
            {
                duration: totalWidth * 20, // Speed adjustment (20ms per pixel)
                iterations: Infinity,
                easing: "linear",
            }
        );

        return () => animation.cancel(); // Cleanup animation on unmount
    }, [props.words]);

    return (
        <div className="overflow-hidden whitespace-nowrap bg-ada-secondary-50 py-2">
            <div
                ref={tickerRef}
                className="flex gap-7 md:gap-11 animate-ticker">
                {/* Map over words to create the ticker items */}
                {props.words.map((word, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 md:gap-10">
                        <span className="text-white text-base sm:text-xl lg:text-[28px]">
                            {word}
                        </span>
                        {index < props.words.length - 1 && (
                            <StarIcon className="text-ada-primary-50" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
