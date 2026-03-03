export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-brand-red text-brand-white relative min-h-[50vh] flex flex-col items-center justify-center text-center">

            <div className="max-w-4xl w-full z-10 mb-8 mt-12 md:mt-0">
                <h2 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-medium tracking-tight mb-8 leading-[1.05]">
                    Shall we discuss your project?
                </h2>
                <p className="text-[13px] md:text-sm font-medium text-brand-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                    For the design of your visual identity or for any <br className="hidden md:block" />
                    service request, contact us directly or use the <br className="hidden md:block" />
                    online form.
                </p>

                {/* Elegant button outline, transparent by default */}
                <button className="px-6 py-[14px] border-[1.5px] border-brand-white rounded-full text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-white hover:text-brand-red transition-colors inline-block text-center mt-2 group relative overflow-hidden">
                    <span className="relative z-10">CONTACT US</span>
                </button>
            </div>

            {/* Huge subtle logo matching "L'AGENCE" logo placed bottom left */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-12">
                <span className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8] block">BIZY <br className="block md:hidden" />CUTS.</span>
            </div>
        </section>
    );
}
