import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-brand-bg text-brand-text overflow-hidden">
            {/* Top Text Blocks */}
            <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-16">
                <h2 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] font-medium tracking-tight mb-16 text-brand-text">
                    A Tradition of <br className="hidden md:block" />
                    Precision and Care.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* Left Side: Portrait Image Container */}
                    <div className="w-full md:col-span-5 lg:col-span-4 aspect-[3/4] sm:aspect-[4/5] bg-brand-gray relative overflow-hidden group rounded-sm">
                        {/* Fallback pattern if no image */}
                        <div className="absolute inset-0 flex items-center justify-center font-bold uppercase tracking-widest text-[#C8C5BD] mix-blend-multiply opacity-50 text-6xl -z-10">
                            BIZY
                        </div>

                        {/* The image component with unoptimized to bypass Next.js stubborn caching */}
                        <div className="absolute inset-0 transition-all duration-700 cursor-pointer overflow-hidden group">
                            <Image src="/salon.jpg" unoptimized={true} fill alt="About Studio" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Right Side: Philosophy Subtext */}
                    <div className="w-full md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <p className="text-[13px] md:text-sm font-medium text-brand-text leading-relaxed mb-8">
                                Founded in 2006 by Renata, Bizy Cuts has become a trusted name in Downers Grove. As a proudly Lithuanian-owned salon, we are committed to delivering expert craftsmanship, refined technique, and a welcoming experience for every client.
                            </p>
                            <p className="text-[13px] md:text-sm font-medium text-brand-text/70 leading-relaxed mb-12">
                                Our philosophy is simple: combine skill with sincerity. Whether it’s a fresh cut or a complete style refresh, we approach every appointment with the same focus — precision, consistency, and care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
