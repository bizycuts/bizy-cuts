"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 py-6 md:py-8 px-6 md:px-12 flex items-center justify-between bg-brand-bg/90 backdrop-blur-md transition-all duration-300">
            <Link href="#hero" className="flex items-center z-50">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">Bizy Cuts</span>
            </Link>

            <div className="hidden md:flex gap-12 font-medium text-brand-text text-sm">
                <Link href="#about" className="hover:text-brand-red transition-colors">About</Link>
                <Link href="#services" className="hover:text-brand-red transition-colors">Services</Link>
                <Link href="#team" className="hover:text-brand-red transition-colors">Team</Link>
                <Link href="#contact" className="hover:text-brand-red transition-colors">Contact</Link>
            </div>

            <button className="md:hidden text-brand-text z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile nav overlay */}
            <div className={`fixed inset-0 h-[100dvh] w-full overflow-y-auto bg-brand-bg transition-opacity duration-300 md:hidden z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-start min-h-full pb-20 pt-32 gap-8">
                    <Link href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-medium tracking-tight hover:text-brand-red transition-colors">About</Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="text-3xl font-medium tracking-tight hover:text-brand-red transition-colors">Services</Link>
                    <Link href="#team" onClick={() => setIsOpen(false)} className="text-3xl font-medium tracking-tight hover:text-brand-red transition-colors">Team</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-medium tracking-tight hover:text-brand-red transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
