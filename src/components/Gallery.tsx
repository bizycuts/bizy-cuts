import Image from "next/image";

export default function Gallery() {
    return (
        <section id="gallery" className="bg-brand-bg px-6 md:px-12 lg:px-24 py-16 w-full">
            {/* Top Split Area: List + Image */}
            <div className="flex flex-col md:flex-row justify-between w-full mx-auto md:mb-8 md:items-end">

                {/* Left Side List */}
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-6 text-brand-text/50">
                        Selected Profiles
                    </p>
                    <ul className="flex flex-col gap-3 font-medium tracking-tight">
                        {[
                            "Modern Classic",
                            "Textured Crop",
                            "Editorial Fade",
                            "Sharp Contour",
                            "Color Transformation",
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="text-[1.8rem] md:text-5xl hover:text-brand-red transition-colors cursor-pointer w-max leading-[1.1]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Single Image */}
                <div className="w-full md:w-[35%] aspect-[3/4] bg-[#E1DED8] relative flex items-center justify-center group cursor-pointer cursor-crosshair">
                    {/* Fallback image style */}
                    <span className="font-medium text-brand-text/30 text-xs tracking-widest uppercase">
                        GALLERY IMAGE
                    </span>
                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-700 pointer-events-none">
                        {/* <Image src="/gallery-1.jpg" fill alt="Selection 1" className="object-cover" /> */}
                    </div>
                </div>
            </div>

            {/* Grid Area - 4 Blocks with distinctive minimal padding & backgrounds */}
            {/* Inspired directly by the 4 masonry grids at the bottom of the reference image */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-2">

                {/* Block 1 */}
                <div className="bg-[#EAE8E2] aspect-square flex items-center justify-center relative p-10 md:p-24 transition-opacity hover:opacity-95">
                    <div className="w-[50%] h-[70%] bg-white shadow-xl relative flex items-center justify-center">
                        <span className="font-bold text-brand-text/30 uppercase tracking-[0.3em] text-[10px] rotate-90">STUDIO</span>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="bg-[#DBD8CF] aspect-square flex items-center justify-center relative p-12 transition-opacity hover:opacity-95">
                    <div className="w-[85%] h-[60%] bg-black shadow-xl relative flex items-center justify-center">
                        <span className="font-medium text-brand-white/50 text-[10px] tracking-widest uppercase text-center leading-loose">
                            BIZY CUTS <br /> PREMIUM
                        </span>
                    </div>
                </div>

                {/* Block 3 */}
                <div className="bg-[#D0CCC1] aspect-square relative overflow-hidden transition-opacity hover:opacity-95 flex items-center justify-center">
                    <span className="font-medium text-brand-text/30 text-xs tracking-widest uppercase absolute z-10 w-full text-center">
                        FULL BLEED
                    </span>
                    <div className="absolute inset-x-0 bottom-0 top-1/4 bg-[#B5B1A7] mix-blend-multiply opacity-20"></div>
                </div>

                {/* Block 4 */}
                <div className="bg-[#E4E2DC] aspect-square flex items-end justify-center relative p-16 transition-opacity hover:opacity-95">
                    <div className="w-[70%] h-[40%] bg-white relative shadow-xl flex items-center justify-center">
                        <span className="font-bold text-brand-text/30 uppercase tracking-widest text-[10px]">
                            EDITORIAL
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
