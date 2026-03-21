import { motion } from 'framer-motion';

export default function Offer({ onOpenModal }) {
    return (
        <section id="offer" className="bg-[#F5F5F1] py-8 lg:py-10 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Background Texture continuous */}
            <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 w-full flex justify-center">
                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-[#F5F5F1] border-[0.5px] border-[#660000]/30 rounded-sm p-12 md:p-20 text-center flex flex-col items-center justify-center shadow-2xl relative w-full max-w-3xl"
                >
                    {/* Linha decorativa leve */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#660000]/40 to-transparent"></div>

                    <h3 className="text-[#2D2D2D] text-sm md:text-base font-sans tracking-[0.2em] uppercase mb-8">
                        Condição Exclusiva de Lançamento:
                    </h3>

                    <div className="mb-10">
                        <span className="text-7xl md:text-8xl lg:text-[120px] font-serif text-[#660000] leading-none block drop-shadow-sm">
                            R$ 36,90
                        </span>
                    </div>

                    <p className="text-[#2D2D2D] text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed font-serif mb-6">
                        Uma condição única e inaugural para as mulheres que decidiram ser as primeiras a despertar. Este valor é um filtro de comprometimento para garantirmos uma sala apenas com quem está pronta para o próximo nível.
                    </p>

                    <button
                        onClick={onOpenModal}
                        className="btn-hero-cta w-full max-w-md py-[16px] px-[24px] text-[18px] text-center uppercase tracking-widest block mx-auto mb-8 cursor-pointer"
                    >
                        Quero Garantir Minha Vaga
                    </button>

                    <p className="text-[#2D2D2D]/70 text-sm italic font-serif max-w-md mx-auto">
                        "Risco Zero: Se ao final da nossa imersão você achar que não valeu a pena, devolvo seu dinheiro na hora."
                    </p>

                    {/* Linha decorativa inferior */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#660000]/40 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}
