import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-bg text-brand-text pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-brand-text/10 w-full overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col mb-24 md:mb-32">

                <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[9rem] leading-[0.8] font-extrabold tracking-tighter uppercase mb-20 text-center md:text-left">
                    BIZY CUTS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-16">

                    {/* Address & Directions */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Address</h4>
                                <p className="text-[15px] md:text-lg font-medium leading-relaxed">
                                    444 75th St, <br />
                                    Downers Grove, IL 60516
                                </p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <a
                                href="https://maps.google.com/maps?q=444%2075th%20St,%20Downers%20Grove,%20IL%2060516"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-brand-text/20 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 inline-block text-center shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-lg"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Phone & Socials */}
                    <div className="flex flex-col gap-12">
                        <div className="flex items-start gap-4">
                            <Phone className="shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Phone</h4>
                                <p className="text-[15px] md:text-lg font-medium leading-relaxed">
                                    <a href="tel:6304356080" className="hover:text-brand-red transition-colors">(630) 435-6080</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-[20px] shrink-0"></div>
                            <div>
                                <h4 className="text-[11px] font-black uppercase mb-2 tracking-widest text-brand-text/50">Socials</h4>
                                <div className="flex gap-4 text-[15px] md:text-lg font-medium leading-relaxed">
                                    <a href="https://www.instagram.com/bizy_cuts/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Instagram</a>
                                    <a href="https://www.facebook.com/BizyCuts" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
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
