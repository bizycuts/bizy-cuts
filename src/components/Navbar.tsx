"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 py-6 md:py-8 px-6 md:px-12 flex items-center justify-between bg-brand-bg/90 backdrop-blur-md transition-all duration-300">
            <Link href="#hero" className="flex flex-col z-50">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">Bizy Cuts</span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-brand-text/50 mt-1">Family Hair Salon</span>
            </Link>

            <div className="hidden md:flex gap-12 font-medium text-brand-text text-sm">
                <Link href="#hero" className="hover:text-brand-red transition-colors">Home</Link>
                <Link href="#about" className="hover:text-brand-red transition-colors">About</Link>
                <Link href="#services" className="hover:text-brand-red transition-colors">Services</Link>
                <Link href="#testimonials" className="hover:text-brand-red transition-colors">Reviews</Link>
                <Link href="#team" className="hover:text-brand-red transition-colors">Team</Link>
                <Link href="#contact" className="hover:text-brand-red transition-colors">Contact</Link>
            </div>

            <button className="md:hidden text-brand-text z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile nav drawer */}
            <div className={`absolute top-[100%] right-6 w-[calc(100%-48px)] max-w-sm bg-brand-bg shadow-2xl border border-brand-text/10 rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden z-40 overflow-hidden ${isOpen ? "opacity-100 translate-y-4 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div className="flex flex-col p-8 gap-6">
                    <Link href="#hero" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors border-b border-brand-text/5 pb-4">
                        Home
                    </Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors border-b border-brand-text/5 pb-4">
                        About
                    </Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors border-b border-brand-text/5 pb-4">
                        Services
                    </Link>
                    <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors border-b border-brand-text/5 pb-4">
                        Reviews
                    </Link>
                    <Link href="#team" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors border-b border-brand-text/5 pb-4">
                        Team
                    </Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight hover:text-brand-red transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
