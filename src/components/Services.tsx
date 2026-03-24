"use client";

import { useState } from "react";

const MAIN_PHONE_NUMBER = "6304356080";

type ServiceItem = {
    name: string;
    price?: string;
};

type PricingMap = {
    [stylist: string]: ServiceItem[];
};

type ServiceCategory = {
    id: string;
    title: string;
    subtitle: string;
    pricing: PricingMap;
};

const servicesData: ServiceCategory[] = [
    {
        id: "womens",
        title: "Women's",
        subtitle: "",
        pricing: {
            "All": [
                { name: "Hair Wash & Style" },
                { name: "Women's Haircut and style" },
                { name: "Haircut + Shampoo" },
                { name: "Haircut + Style" },
                { name: "Color + Haircut + Style" },
                { name: "Perm + Haircut + Style" },
                { name: "Shampoo" },
                { name: "Deep Conditioning Treatment" },
                { name: "Root Touch-Up" },
                { name: "Full Hair Color" },
                { name: "Highlights" },
                { name: "Toner" }
            ],
            "Renata": [
                { name: "Women's Haircut and style", price: "Starts at $45" },
                { name: "Shampoo", price: "Starts at $10" },
                { name: "Deep Conditioning Treatment", price: "Starts at $20" },
                { name: "Root Touch-Up", price: "Starts at $55" },
                { name: "Full Hair Color", price: "Starts at $65" },
                { name: "Highlights", price: "Starts at $100" },
                { name: "Toner", price: "Starts at $30" }
            ],
            "Vanesa": [],
            "Colette": [
                { name: "Haircut + Shampoo", price: "Starts at $35" },
                { name: "Haircut + Style", price: "Starts at $60" },
                { name: "Color + Haircut + Style", price: "Starts at $120" },
                { name: "Perm + Haircut + Style", price: "Starts at $120" },
                { name: "Highlights", price: "Starts at $100" }
            ],
            "Donna": [
                { name: "Short Hair", price: "Starts at $35" },
                { name: "Long Hair", price: "Starts at $50" },
                { name: "Hair Wash & Style", price: "Starts at $30" }
            ]
        }
    },
    {
        id: "mens",
        title: "Men's",
        subtitle: "",
        pricing: {
            "All": [
                { name: "Men's Haircut" },
                { name: "Men's / Boys Haircut" },
                { name: "Haircut & Beard" },
                { name: "Men's Haircut + Beard Shaping" },
                { name: "Haircut + Beard Trim" },
                { name: "Fade / Skin Fade" },
                { name: "Buzz Cut" },
                { name: "Beard Grooming" },
                { name: "Hair Wash and Style" }
            ],
            "Renata": [
                { name: "Men's Haircut", price: "Starts at $30" },
                { name: "Men's Haircut + Beard Shaping", price: "Starts at $45" }
            ],
            "Vanesa": [
                { name: "Men's / Boys Haircut", price: "$30" },
                { name: "Fade / Skin Fade", price: "$40" },
                { name: "Buzz Cut", price: "$30" },
                { name: "Haircut + Beard Trim", price: "$60" }
            ],
            "Colette": [
                { name: "Men's Haircut", price: "Starts at $30" }
            ],
            "Donna": [
                { name: "Haircut", price: "Starts at $30" },
                { name: "Haircut & Beard", price: "Starts at $45" },
                { name: "Beard Grooming", price: "Starts at $15" },
                { name: "Hair Wash and Style", price: "Starts at $15" }
            ]
        }
    },
    {
        id: "childrens",
        title: "Children's",
        subtitle: "",
        pricing: {
            "All": [
                { name: "Haircut (< 12 years)" },
                { name: "Children's Haircut (under 12)" },
                { name: "Men's / Boys Haircut" }
            ],
            "Renata": [
                { name: "Children's Haircut (under 12)", price: "Starts at $25" }
            ],
            "Vanesa": [
                { name: "Men's / Boys Haircut", price: "$30" }
            ],
            "Colette": [],
            "Donna": [
                { name: "Haircut (< 12 years)", price: "Starts at $25" }
            ]
        }
    }
];

export default function Services() {
    const [activeService, setActiveService] = useState<string | null>("womens");
    const [selectedPricing, setSelectedPricing] = useState<string>("All");

    const toggleService = (id: string) => {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;
        if (activeService === id) {
            setActiveService(null);
        } else {
            setActiveService(id);
        }
    };

    const pricingOptions = ["All", "Renata", "Vanesa", "Colette", "Donna"];

    const getActiveItems = (service: ServiceCategory) => {
        return service.pricing[selectedPricing] || [];
    };

    const getPriceToDisplay = (item: ServiceItem) => {
        if (!item.price) return "";
        return item.price.startsWith("Starts at ") ? item.price.replace("Starts at ", "") : item.price;
    };

    const renderPricingToggle = () => (
        <div className="mb-8 w-full">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/50 mb-4 cursor-pointer">{selectedPricing === "All" ? "Select a stylist for pricing" : "Pricing may vary by stylist"}</h4>
            <div className="flex flex-nowrap overflow-x-auto gap-1 sm:gap-2 w-full pb-2 -mb-2 hide-scrollbar shrink-0">
                {pricingOptions.map((option) => (
                    <button
                        key={option}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPricing(option);
                        }}
                        className={`relative px-3 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 shrink-0 whitespace-nowrap ${selectedPricing === option
                            ? "bg-brand-text text-white shadow-md"
                            : "bg-brand-text/5 text-brand-text/70 hover:bg-brand-text/10 hover:text-brand-text"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-brand-bg relative flex flex-col justify-center min-h-[80vh]">
            <div className="w-full max-w-7xl mx-auto mb-16 lg:mb-24">
                <h2 className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] font-medium tracking-tight text-brand-text mb-6">
                    Services
                </h2>
                <p className="text-[14px] md:text-base font-medium text-brand-text/70 leading-relaxed max-w-xl">
                    Expert cuts, styling, and grooming tailored to your unique look.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left Side: Headings */}
                <div className="flex flex-col w-full lg:w-[45%] justify-start mt-0 lg:-mt-10">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="border-b border-brand-text/10 lg:border-none pb-6 lg:pb-0 mb-6 lg:mb-4 group relative"
                        >
                            <h3 
                                onClick={() => toggleService(service.id)}
                                onMouseEnter={() => {
                                    if (window.innerWidth >= 1024) {
                                        setActiveService(service.id);
                                    }
                                }}
                                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-medium tracking-tight cursor-pointer transition-colors leading-[1.0] inline-block w-max
                                ${activeService === service.id ? "text-brand-red" : "text-brand-text lg:hover:text-brand-red"}
                            `}>
                                {service.title} {service.subtitle && <span className="lg:block">{service.subtitle}</span>}
                            </h3>

                            {/* Mobile expansion (Active only on < lg) */}
                            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeService === service.id ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
                                {renderPricingToggle()}
                                
                                {getActiveItems(service).length > 0 ? (
                                    <ul className="flex flex-col gap-5 text-[15px] font-medium relative">
                                        {getActiveItems(service).map((item, idx) => (
                                            <li key={idx} className="flex justify-between items-end border-b border-brand-text/5 pb-3">
                                                <span className="text-brand-text/90 hover:text-brand-red transition-colors w-max relative">{item.name}</span>
                                                {selectedPricing !== "All" && (
                                                    <span className="text-brand-text font-bold tracking-wider relative">
                                                        <span className={`transition-opacity duration-300`}>
                                                            {getPriceToDisplay(item)}
                                                        </span>
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[13px] text-brand-text/50 font-medium italic mt-2 mb-6">Pricing for these services varies. Please call to inquire.</p>
                                )}

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
                                {renderPricingToggle()}
                                <h3 className="text-[10px] font-bold tracking-[0.2em] mb-12 uppercase text-brand-text/40">{service.title} {service.subtitle} MENU</h3>
                                
                                {getActiveItems(service).length > 0 ? (
                                    <ul className="flex flex-col gap-6 font-medium text-[15px]">
                                        {getActiveItems(service).map((item, idx) => (
                                            <li key={idx} className="flex justify-between items-end border-b border-brand-text/10 pb-4">
                                                <span className="text-brand-text/80 hover:text-brand-red transition-colors w-max relative cursor-pointer">{item.name}</span>
                                                {selectedPricing !== "All" && (
                                                    <span className="text-brand-text font-bold tracking-widest relative overflow-hidden">
                                                        <span className={`block transition-all duration-300`}>
                                                            {getPriceToDisplay(item)}
                                                        </span>
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[14px] text-brand-text/40 font-medium italic mt-2 mb-10 w-full text-center">Contact us directly for specific pricing.</p>
                                )}

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

                </div>

            </div>
        </section>
    );
}
