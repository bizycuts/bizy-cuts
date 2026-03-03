import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-bg text-brand-text pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-brand-text/10 w-full overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col mb-24 md:mb-32">

                <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[9rem] leading-[0.8] font-extrabold tracking-tighter uppercase mb-20 text-center md:text-left">
                    BIZY CUTS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">

                    {/* Column 1: Address & Phone */}
                    <div className="flex flex-col gap-12 order-1">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <MapPin className="shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Address</h4>
                                <a
                                    href="https://maps.google.com/maps?q=444%2075th%20St,%20Downers%20Grove,%20IL%2060516"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start md:items-center gap-2 text-[15px] md:text-lg font-medium leading-relaxed hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-text/20 hover:decoration-brand-red"
                                >
                                    <span>
                                        444 75th St, <br className="md:hidden" /> Downers Grove, IL 60516
                                    </span>
                                    <ArrowUpRight size={14} className="opacity-50 shrink-0 mt-1 md:mt-0" />
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Phone</h4>
                                <a href="tel:6304356080" className="flex items-center gap-2 text-[15px] md:text-lg font-medium leading-relaxed hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-text/20 hover:decoration-brand-red">
                                    (630) 435-6080 <ArrowUpRight size={14} className="opacity-50" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Hours */}
                    <div className="flex items-start gap-4 order-3 md:order-2">
                        <Clock className="shrink-0 mt-1" size={20} />
                        <div className="w-full">
                            <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Hours</h4>
                            <div className="text-[15px] md:text-lg font-medium leading-relaxed space-y-2 w-full max-w-[280px]">
                                <div className="flex justify-between gap-6">
                                    <span>Mon &amp; Sun</span>
                                    <span className="text-brand-text/50 text-right">Closed</span>
                                </div>
                                <div className="flex justify-between gap-6">
                                    <span>Tue - Fri</span>
                                    <span className="text-right">11 AM - 7 PM</span>
                                </div>
                                <div className="flex justify-between gap-6">
                                    <span>Saturday</span>
                                    <span className="text-right">9 AM - 4 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="flex items-start gap-4 order-4 md:order-3">
                        <div className="w-[20px] shrink-0"></div>
                        <div>
                            <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Socials</h4>
                            <div className="flex flex-col gap-3 text-[15px] md:text-lg font-medium leading-relaxed">
                                <a href="https://www.instagram.com/bizy_cuts/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-text/20 hover:decoration-brand-red">
                                    Instagram <ArrowUpRight size={14} className="opacity-50" />
                                </a>
                                <a href="https://www.facebook.com/BizyCuts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-text/20 hover:decoration-brand-red">
                                    Facebook <ArrowUpRight size={14} className="opacity-50" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom Legal */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center text-[10px] font-bold tracking-widest uppercase text-brand-text pt-8 border-t border-brand-text/10">
                <div className="text-center md:text-right opacity-40 font-medium tracking-normal normal-case">
                    &copy; {new Date().getFullYear()} Bizy Cuts. All rights reserved.
                </div>
            </div>

        </footer>
    );
}
