import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-brand-bg text-brand-text overflow-hidden">
            {/* Top Text Blocks */}
            <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-20 md:mb-32">
                <h2 className="text-[2rem] sm:text-5xl md:text-[4.5rem] leading-[0.95] font-medium tracking-tight mb-16 text-brand-text">
                    A Tradition of <br className="hidden md:block" />
                    Precision and Care.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
                    <p className="text-[13px] md:text-sm font-medium text-brand-text leading-relaxed">
                        Founded in 2007 by Renata, Bizy Cuts has become a trusted name in Downers Grove. As a proudly Lithuanian-owned salon, we are committed to delivering expert craftsmanship, refined technique, and a welcoming experience for every client.
                    </p>
                    <p className="text-[13px] md:text-sm font-medium text-brand-text/70 leading-relaxed">
                        Our philosophy is simple: combine skill with sincerity. Whether it’s a fresh cut or a complete style refresh, we approach every appointment with the same focus — precision, consistency, and care.
                    </p>
                </div>
            </div>

            {/* Media & Sidebar Block equivalent to laptop/text layout */}
            <div className="flex flex-col md:flex-row w-full h-[65vh] md:h-[80vh] relative mt-16 group">

                {/* Left Side: Big Full Width Image Wrapper */}
                <div className="w-full md:w-[60%] h-full bg-brand-gray relative overflow-hidden">
                    {/* Fallback pattern if no image */}
                    <div className="absolute inset-0 flex items-center justify-center font-bold uppercase tracking-widest text-[#C8C5BD] mix-blend-multiply opacity-50 text-6xl -z-10">
                        BIZY
                    </div>

                    {/* The image component with unoptimized to bypass Next.js stubborn caching */}
                    <div className="absolute inset-0 transition-all duration-700 cursor-pointer overflow-hidden group">
                        <Image src="/about.png" unoptimized={true} fill alt="About Studio" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

                {/* Right Side: Floating Text equivalent to right-side sidebar */}
                <div className="w-full md:w-[40%] bg-brand-bg md:bg-transparent h-full md:absolute right-0 top-0 flex flex-col justify-center px-8 md:pl-20 md:pr-16 md:bg-gradient-to-l md:from-brand-bg md:via-brand-bg md:to-transparent z-10 py-12 md:py-0">
                    <div className="max-w-sm ml-auto md:bg-brand-bg p-6 md:p-8">
                        <h3 className="text-sm font-bold tracking-tight mb-2 uppercase text-brand-text">CRAFTSMANSHIP WITHOUT COMPROMISE</h3>
                        <p className="text-sm md:text-[13px] text-brand-text/70 leading-relaxed font-medium mb-8">
                            We approach every cut with structure, balance, and attention to detail -- delivering results that look sharp today and grow out beautifully tomorrow.
                        </p>

                        <h3 className="text-sm font-bold tracking-tight mb-2 uppercase text-brand-text">A SPACE YOU CAN TRUST</h3>
                        <p className="text-sm md:text-[13px] text-brand-text/70 leading-relaxed font-medium">
                            Clean, professional, and welcoming -- we've created an environment where quality service and genuine care go hand in hand.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
