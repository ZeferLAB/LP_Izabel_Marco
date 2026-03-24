import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Monitor } from 'lucide-react';
import { Countdown } from './Scarcity';

export default function Hero() {
    const handleScrollToOffer = (e) => {
        e.preventDefault();
        const offerSection = document.getElementById('offer');
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[calc(100vh-60px)] flex flex-col justify-center bg-gradient-to-br from-[#F5F5F1] via-[#ffffff] to-[#eaeae4] overflow-hidden pt-[16px] lg:pt-20 pb-6 lg:pb-20">
            <div className="section-container !py-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">

                {/* Coluna de Imagem: Aparece PRIMEIRO no mobile (order-1), SEGUNDO no desktop (lg:order-2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative order-1 lg:order-2 flex justify-center items-center w-full"
                >
                    {/* Brilho/Glow de Luxo atrás da foto */}
                    <div className="absolute inset-0 bg-gradient-radial from-vinho/10 via-transparent to-transparent opacity-60 scale-150 blur-3xl -z-10" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/40 blur-[80px] -z-10" />

                    <div className="relative aspect-[4/5] sm:aspect-[3/4] w-[70%] sm:w-full lg:max-w-sm mx-auto group">
                        <div className="absolute inset-0 bg-gray-200 border border-gray-100 shadow-luxury overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.02] sm:rounded-sm">
                            {/* Foto da especialista */}
                            <img 
                                src="/foto-autoridade.jpg" 
                                alt="Izabel" 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Moldura elegante flutuante - Oculta no mobile para layout full width */}
                        <div className="hidden sm:block absolute -inset-2 border border-vinho/5 rounded-sm -z-0" />
                        <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 bg-vinho/5 rounded-full blur-2xl" />
                    </div>
                </motion.div>

                {/* Coluna de Texto: Aparece SEGUNDO no mobile (order-2), PRIMEIRO no desktop (lg:order-1) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1 mt-2 lg:mt-0 px-2 lg:px-0"
                >
                    <h1 className="text-[26px] sm:text-4xl lg:text-5xl xl:text-5xl text-softblack leading-[1.1] lg:leading-[1.15] font-serif lg:mb-6">
                        Construa o seu <span className="text-vinho italic">posicionamento de autoridade</span> e resgate a sua voz em <span className="text-vinho italic">1 dia de Imersão</span>.
                    </h1>

                    <p className="text-[17px] lg:text-lg text-softblack/80 max-w-lg leading-[1.35] lg:leading-relaxed font-sans mt-3 lg:mt-0 lg:mb-8">
                        Pare de performar um personagem que te esgota. Vamos desconstruir a <span className="font-bold">&quot;síndrome da impostora&quot;</span> e estruturar a base prática para você ser <span className="font-bold">ouvida e respeitada</span> pela sua <span className="font-bold">real competência</span>.
                    </p>

                    <div className="flex flex-col w-full items-center lg:items-start mt-3 lg:mt-8">
                        <a
                            href="#offer"
                            onClick={handleScrollToOffer}
                            className="btn-hero-cta w-[95%] lg:w-max py-[14px] px-[20px] text-[16px] text-center uppercase tracking-widest block"
                        >
                            QUERO GARANTIR MINHA VAGA NA IMERSÃO
                        </a>

                        <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-[10px] text-softblack/50 font-medium uppercase tracking-widest mt-4">
                            <span className="flex items-center gap-1.5">
                                <Monitor size={12} className="text-vinho/60" /> Ao vivo no Zoom
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={12} className="text-vinho/60" /> Vagas Limitadas
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={12} className="text-vinho/60" /> 11 de Abril
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
