"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Lock body scrolling while the loading screen is active
        document.body.style.overflow = "hidden";

        // Stage 1: Reveal logo from beneath smoothly
        const t1 = setTimeout(() => setStage(1), 100);

        // Stage 2: Start the cinematic slow fade-out process
        const t2 = setTimeout(() => {
            setStage(2);
            // Unlock scroll naturally right as the final fade out begins
            document.body.style.overflow = "";
        }, 2200);

        // Stage 3: Completely remove from DOM
        const t3 = setTimeout(() => setStage(3), 3200);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            document.body.style.overflow = "";
        };
    }, []);

    // Do not render anything once the animation completely finishes
    if (stage === 3) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center bg-brand-text transition-all duration-1000 ease-in-out ${stage === 2 ? "opacity-0 invisible blur-md" : "opacity-100 visible blur-0"
                }`}
        >
            {/* Central Typography Container */}
            <div className={`flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${stage === 2 ? "-translate-y-12 opacity-0 scale-110" : "translate-y-0 opacity-100 scale-100"
                }`}>
                <div className="overflow-hidden">
                    <h1
                        className={`text-2xl md:text-4xl font-black tracking-[0.4em] uppercase text-brand-bg transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                            }`}
                    >
                        Bizy Cuts
                    </h1>
                </div>
                <div className="overflow-hidden mt-4">
                    <p
                        className={`text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-brand-bg/50 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        FAMILY HAIR SALON
                    </p>
                </div>
            </div>
        </div>
    );
}
