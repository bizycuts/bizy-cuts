"use client";

import { useState } from "react";

const MAIN_PHONE_NUMBER = "6304356080";

const servicesData = [
    {
        id: "womens",
        title: "Women's",
        subtitle: "",
        items: [
            { name: "Short Hair", price: "$35+" },
            { name: "Long Hair", price: "$50+" },
            { name: "Hair Wash & Style", price: "$30+" },
        ]
    },
    {
        id: "mens",
        title: "Men's",
        subtitle: "",
        items: [
            { name: "Haircut", price: "$30+" },
            { name: "Haircut & Beard", price: "$45+" },
            { name: "Beard Grooming", price: "$15+" },
            { name: "Hair Wash and Style", price: "$15+" },
        ]
    },
    {
        id: "childrens",
        title: "Children's",
        subtitle: "",
        items: [
            { name: "Haircut (< 12 years)", price: "$25" },
        ]
    }
];

export default function Services() {
    const [activeService, setActiveService] = useState<string | null>("womens");

    const toggleService = (id: string) => {
        if (activeService === id) {
            setActiveService(null);
        } else {
            setActiveService(id);
        }
    };

    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-brand-bg relative flex flex-col justify-center min-h-[80vh]">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left Side: Headings */}
                <div className="flex flex-col w-full lg:w-[55%] justify-center">
                    <h2 className="text-[2rem] sm:text-5xl md:text-[4.5rem] leading-[0.95] font-medium tracking-tight text-brand-text mb-12">
                        Services.
                    </h2>
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="border-b border-brand-text/10 lg:border-none pb-6 lg:pb-0 mb-6 lg:mb-4 group relative"
                            onClick={() => toggleService(service.id)}
                            onMouseEnter={() => {
                                if (window.innerWidth >= 1024) {
                                    setActiveService(service.id);
                                }
                            }}
                        >
                            <h3 className={`text-[1.8rem] sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-medium tracking-tight cursor-pointer transition-colors leading-[1.0]
                                ${activeService === service.id ? "text-brand-red" : "text-brand-text lg:hover:text-brand-red"}
                            `}>
                                {service.title} {service.subtitle && <span className="lg:block">{service.subtitle}</span>}
                            </h3>

                            {/* Mobile expansion (Active only on < lg) */}
                            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeService === service.id ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
                                <ul className="flex flex-col gap-5 text-[15px] font-medium">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-end border-b border-brand-text/5 pb-3">
                                            <span className="text-brand-text/90">{item.name}</span>
                                            <span className="text-brand-text font-bold tracking-wider">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 text-[10px] font-bold tracking-wider text-brand-text/40 uppercase">
                                    * Prices may vary depending on the stylist.
                                </div>
                                <div className="mt-8 mb-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (window.innerWidth < 768) {
                                                window.location.href = `tel:${MAIN_PHONE_NUMBER}`;
                                            } else {
                                                window.location.href = "#contact";
                                            }
                                        }}
                                        className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-brand-text pb-1 hover:text-brand-red hover:border-brand-red active:text-brand-red active:border-brand-red transition-colors inline-block"
                                    >
                                        CALL TO BOOK
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Desktop options display (Hidden on mobile) */}
                <div className="hidden lg:flex w-[45%] flex-col justify-center relative min-h-[500px]">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                                ${activeService === service.id ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-12 pointer-events-none"}
                            `}
                        >
                            <div className="bg-[#EAE8E2] p-12 w-full max-w-lg mb-12 relative">
                                <h3 className="text-[10px] font-bold tracking-[0.2em] mb-12 uppercase text-brand-text/40">{service.title} {service.subtitle} MENU</h3>
                                <ul className="flex flex-col gap-6 font-medium text-[15px]">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-end border-b border-brand-text/10 pb-4 group/item">
                                            <span className="text-brand-text/80 group-hover/item:text-brand-red transition-colors">{item.name}</span>
                                            <span className="text-brand-text font-bold tracking-widest">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 text-[10px] font-bold tracking-widest text-brand-text/40 uppercase">
                                    * Prices may vary depending on the stylist.
                                </div>

                                <div className="mt-12">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (window.innerWidth < 768) {
                                                window.location.href = `tel:${MAIN_PHONE_NUMBER}`;
                                            } else {
                                                window.location.href = "#contact";
                                            }
                                        }}
                                        className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-brand-text pb-1 hover:text-brand-red hover:border-brand-red active:text-brand-red active:border-brand-red transition-colors inline-block"
                                    >
                                        CALL TO BOOK
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Empty state when nothing is active */}
                    <div className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 max-w-lg mb-12 w-full ${activeService === null ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        <div className="w-full h-[70%] border border-brand-text/10 flex items-center justify-center">
                            <p className="text-brand-text/30 font-medium tracking-[0.2em] uppercase text-[10px] text-center px-8 leading-loose">
                                Hover over a category <br /> to view pricing details
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
