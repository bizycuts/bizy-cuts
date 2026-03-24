"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Renata did a fantastic job on my hair! The salon is clean and she really knows what she is doing. I highly recommend Bizy Cuts!",
        author: "Makayla Stapleton"
    },
    {
        quote: "Brought in my 7-year-old daughter, and had a very good experience. Proprietor was really nice to the kids (5-year-old tagged along), spent a reasonable amount of time and care with my daughter, and the price was very reasonable. Definitely will go back.",
        author: "Pete Meyers"
    },
    {
        quote: "I took my 13-year-old son, the lady was really friendly and did a great job. I just recently moved to the area and I will continue to come to her. The price was reasonable too.",
        author: "Lily Avina"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-brand-text text-brand-bg relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center w-full">
                    {/* Left Side: Header */}
                    <div className="w-full md:w-1/3 flex flex-col">
                        <h2 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] font-medium tracking-tight mb-6">
                            A Reputation <br className="hidden lg:block" />Built on Results.
                        </h2>
                        <p className="text-[13px] md:text-sm font-medium text-brand-bg/70 leading-relaxed max-w-sm">
                            Proudly serving Downers Grove since 2007 -- here's what our community has to say.
                        </p>
                    </div>

                    {/* Right Side: Expanding Quote Area */}
                    <div className="w-full md:w-2/3 relative min-h-[300px] flex items-center">
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 ${activeIndex === idx
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 translate-y-8 pointer-events-none"
                                    }`}
                            >
                                <div className="relative max-w-3xl mb-8">
                                    <Quote className="w-6 h-6 md:w-10 md:h-10 text-brand-bg/20 mb-4" />
                                    <p className="text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium tracking-tight selection:bg-brand-red selection:text-white">
                                        {item.quote}
                                    </p>
                                    <Quote className="w-6 h-6 md:w-10 md:h-10 text-brand-bg/20 mt-4 ml-auto rotate-180" />
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-8 h-[1px] bg-brand-red"></div>
                                    <div>
                                        <p className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-brand-red">
                                            {item.author}
                                        </p>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 text-brand-bg/50 fill-brand-bg/50" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons for Testimonials (Moved to bottom right) */}
                <div className="flex justify-end gap-3 mt-8 md:mt-12 pr-2">
                    <button onClick={handlePrev} className="p-[14px] border border-brand-bg/20 rounded-full text-brand-bg hover:bg-brand-red hover:text-white hover:border-brand-red active:bg-brand-red active:text-white active:border-brand-red transition-all duration-300 flex items-center justify-center bg-transparent shadow-sm">
                        <ChevronLeft size={20} className="shrink-0" />
                    </button>
                    <button onClick={handleNext} className="p-[14px] border border-brand-bg/20 rounded-full text-brand-bg hover:bg-brand-red hover:text-white hover:border-brand-red active:bg-brand-red active:text-white active:border-brand-red transition-all duration-300 flex items-center justify-center bg-transparent shadow-sm">
                        <ChevronRight size={20} className="shrink-0" />
                    </button>
                </div>
            </div>
        </section>
    );
}
