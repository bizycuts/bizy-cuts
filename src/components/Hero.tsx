"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        const firstChild = container?.firstElementChild;

        if (container && firstChild) {
            const itemWidth = firstChild.clientWidth;
            const scrollAmount = itemWidth + 24;

            // Calculate new position
            let newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

            // Clamp to boundaries to prevent Safari/mobile bounce or disappearing glitch
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (newScrollLeft < 0) newScrollLeft = 0;
            if (newScrollLeft > maxScroll) newScrollLeft = maxScroll;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const galleryItems = [
        { title: "Haircut 2", fallback: "HAIRCUT 02", image: "/haircut2.jpg" },
        { title: "Haircut 1", fallback: "HAIRCUT 01", image: "/haircut1.jpg" },
        { title: "Haircut 4", fallback: "HAIRCUT 04", image: "/haircut4.jpg" },
        { title: "Haircut 3", fallback: "HAIRCUT 03", image: "/haircut3.jpg" },
        { title: "Haircut 5", fallback: "HAIRCUT 05", image: "/haircut5.jpg" },
        { title: "Haircut 6", fallback: "HAIRCUT 06", image: "/haircut6.jpg" },
        { title: "Haircut 8", fallback: "HAIRCUT 08", image: "/haircut8.jpg" },
        { title: "Haircut 7", fallback: "HAIRCUT 07", image: "/haircut7.jpg" }
    ];

    return (
        <section id="hero" className="min-h-[100dvh] flex flex-col px-6 md:px-16 lg:px-24 bg-brand-bg pt-32 pb-16 overflow-hidden">
            <div className="max-w-7xl w-full mx-auto relative animate-fade-in-up flex-1 flex flex-col h-full">

                {/* Top Section: Text & Navigation */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0 mt-8 mb-16 md:mb-16">
                    <div>
                        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] font-medium tracking-tight mb-8 text-brand-text">
                            Confidence <br className="hidden md:block" />
                            Starts here.
                        </h1>
                        <p className="max-w-xl text-sm md:text-[15px] font-medium text-brand-text/70 leading-relaxed mb-8">
                            At Bizy Cuts, we combine precision craftsmanship with genuine care — delivering sharp cuts, timeless style, and a welcoming experience for every client who walks through our doors.
                        </p>
                        <button
                            onClick={() => {
                                if (window.innerWidth < 768) {
                                    window.location.href = "tel:6304356080";
                                } else {
                                    window.location.href = "#contact";
                                }
                            }}
                            className="px-8 py-4 border border-brand-text/20 rounded-full text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-red hover:text-white hover:border-brand-red active:bg-brand-red active:text-white active:border-brand-red transition-all duration-300 inline-block text-center group bg-brand-bg shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-lg"
                        >
                            Call to Book
                        </button>
                    </div>

                </div>

                {/* Bottom Section: Gallery Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth flex-1 min-h-[40vh]"
                >
                    {galleryItems.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer w-[85vw] sm:w-[60vw] md:w-[400px] shrink-0 h-full snap-center relative flex flex-col">
                            {/* Gallery Image Box */}
                            <div className="w-full h-full min-h-[40vh] md:min-h-[50vh] bg-[#EAE8E2] relative flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-[#DBD8CF] flex-1">
                                <span className="font-medium text-brand-text/30 text-[10px] tracking-[0.2em] uppercase -z-10">
                                    {item.fallback}
                                </span>
                                {/* Image Wrapper */}
                                <div className="absolute inset-0 transition-all duration-700 pointer-events-none overflow-hidden">
                                    <Image src={item.image} priority={idx < 3} unoptimized={true} fill alt={item.title} className="object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Navigation Buttons (Moved to bottom for thumb access on all viewports) */}
                <div className="flex justify-end gap-3 pb-8 pr-2">
                    <button onClick={() => scroll('left')} className="p-[16px] border border-brand-text/10 rounded-full text-brand-text hover:bg-brand-red hover:text-white hover:border-brand-red active:bg-brand-red active:text-white active:border-brand-red transition-all duration-300 flex items-center justify-center bg-brand-bg shadow-sm">
                        <ChevronLeft size={20} className="shrink-0" />
                    </button>
                    <button onClick={() => scroll('right')} className="p-[16px] border border-brand-text/10 rounded-full text-brand-text hover:bg-brand-red hover:text-white hover:border-brand-red active:bg-brand-red active:text-white active:border-brand-red transition-all duration-300 flex items-center justify-center bg-brand-bg shadow-sm">
                        <ChevronRight size={20} className="shrink-0" />
                    </button>
                </div>

            </div>
        </section>
    );
}
