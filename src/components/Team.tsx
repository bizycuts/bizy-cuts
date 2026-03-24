"use client";

import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Team() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activePhoneIndex, setActivePhoneIndex] = useState<number | null>(null);

    const handlePhoneClick = (e: React.MouseEvent, idx: number) => {
        e.stopPropagation();
        // On desktop, prevent dialing and instead show the number
        if (window.innerWidth >= 768) {
            e.preventDefault();
            setActivePhoneIndex(activePhoneIndex === idx ? null : idx);
        }
    };

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
    const teamMembers = [
        {
            name: "Renata",
            role: "Founder | Women's & Men's Stylist",
            imageFallback: "STYLIST 01",
            phone: "(630) 435-6080"
        },
        {
            name: "Vanesa",
            role: "Men's Stylist",
            imageFallback: "STYLIST 02",
            phone: "(815) 549-2844"
        },
        {
            name: "Colette",
            role: "Women's & Men's Stylist",
            imageFallback: "STYLIST 03",
            phone: "(630) 391-1227"
        },
        {
            name: "Donna",
            role: "Men's Stylist",
            imageFallback: "STYLIST 04",
            phone: "(630) 915-3778"
        }
    ];

    return (
        <section id="team" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-brand-bg relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header section matching About/Services */}
                <div className="mb-10 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
                    <h2 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] font-medium tracking-tight text-brand-text">
                        Meet the<br className="hidden md:block" />
                        Team.
                    </h2>

                    <div className="max-w-sm flex flex-col md:items-end gap-6 md:gap-0">
                        <p className="text-[13px] md:text-sm font-medium text-brand-text/70 leading-relaxed md:text-right">
                            Skilled stylists united by a passion for great hair and genuine care for every client who walks through our doors.
                        </p>

                        {/* Mobile Navigation Buttons have been moved to bottom */}
                    </div>
                </div>

                {/* Grid of Team Members */}
                <div ref={scrollContainerRef} className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 mt-8 md:mt-12 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="group cursor-pointer w-[85vw] sm:w-[60vw] md:w-auto snap-center shrink-0 md:shrink">
                            {/* Stylist Image Box */}
                            <div className="w-full aspect-square md:aspect-[3/4] bg-[#EAE8E2] mb-6 relative flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-[#DBD8CF]">
                                <span className="font-medium text-brand-text/30 text-[10px] tracking-[0.2em] uppercase -z-10">
                                    {member.imageFallback}
                                </span>
                                {/* Image Wrapper */}
                                <div className="absolute inset-0 transition-all duration-700 pointer-events-none overflow-hidden group">
                                    <Image src={`/stylist${idx + 1}.jpg`} unoptimized={true} fill alt={member.name} className={`object-cover group-hover:scale-105 transition-transform duration-700 ${idx === 1 ? 'object-[center_20%]' : 'object-center'}`} />
                                </div>
                            </div>

                            {/* Stylist Text Details */}
                            <div className="border-t border-brand-text/10 pt-4 group-hover:border-brand-text transition-colors duration-500 relative">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-brand-red transition-colors">{member.name}</h3>

                                    {/* Call Button */}
                                    <a
                                        href={`tel:${member.phone.replace(/[\s()-]/g, '')}`}
                                        onClick={(e) => handlePhoneClick(e, idx)}
                                        className="flex items-center text-brand-text transition-all duration-500 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 group/phone cursor-pointer"
                                        title={activePhoneIndex === idx ? member.phone : `Call ${member.name}`}
                                    >
                                        <div className={`flex items-center bg-brand-text/5 group-hover/phone:bg-brand-red/10 group-hover/phone:text-brand-red rounded-full p-[8px] transition-all duration-500 overflow-hidden w-[30px] ${activePhoneIndex === idx ? 'md:w-[135px]' : 'md:w-[30px]'}`}>
                                            <Phone size={14} className="shrink-0" />
                                            <span className={`text-[10px] font-bold tracking-[0.1em] pl-3 whitespace-nowrap transition-opacity duration-500 delay-100 hidden md:block ${activePhoneIndex === idx ? 'opacity-100' : 'opacity-0'}`}>
                                                {member.phone}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-brand-text/50">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons (Moved to bottom for thumb access on all viewports) */}
                <div className="flex justify-end gap-3 pb-8 pr-2 mt-4">
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
