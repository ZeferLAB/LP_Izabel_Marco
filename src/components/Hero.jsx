import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Monitor } from 'lucide-react';
import { Countdown } from './Scarcity';

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-40px)] flex items-center bg-gradient-to-br from-[#F5F5F1] via-[#ffffff] to-[#eaeae4] overflow-hidden pt-4 pb-12">
            <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Coluna de Imagem: Aparece PRIMEIRO no mobile (order-1), SEGUNDO no desktop (lg:order-2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative order-1 lg:order-2 flex justify-center items-center py-4 lg:py-0"
                >
                    {/* Brilho/Glow de Luxo atrás da foto */}
                    <div className="absolute inset-0 bg-gradient-radial from-vinho/10 via-transparent to-transparent opacity-60 scale-150 blur-3xl -z-10" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/40 blur-[80px] -z-10" />

                    <div className="relative aspect-[3/4] w-full max-w-[260px] lg:max-w-sm mx-auto group">
                        <div className="absolute inset-0 bg-gray-200 border border-gray-100 shadow-luxury rounded-sm overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                            {/* Futura foto da especialista */}
                            <div className="w-full h-full bg-[#f8f8f8] flex items-center justify-center text-softblack/10 font-serif text-xl italic uppercase tracking-tighter">
                                Izabel
                            </div>
                        </div>
                        {/* Moldura elegante flutuante */}
                        <div className="absolute -inset-2 border border-vinho/5 rounded-sm -z-0" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-vinho/5 rounded-full blur-2xl" />
                    </div>
                </motion.div>

                {/* Coluna de Texto: Aparece SEGUNDO no mobile (order-2), PRIMEIRO no desktop (lg:order-1) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-vinho leading-[1.15] font-serif">
                        Você não vai sair daqui sabendo falar melhor. <br />
                        <span className="italic font-serif">Você vai sair daqui incapaz de continuar se diminuindo.</span>
                    </h1>

                    <p className="text-sm lg:text-base text-softblack/80 max-w-lg leading-relaxed">
                        Em 2 dias de Imersão, entenda por que você se tornou uma mulher exausta, recupere a sua voz interna e aprenda a sustentar publicamente a autoridade que você já possui.
                    </p>

                    <div className="flex flex-col space-y-8 w-full items-center lg:items-start">
                        <Countdown />

                        <div className="flex flex-col space-y-4 w-full items-center lg:items-start">
                            <a href="#offer" className="btn-luxury w-full sm:w-max py-4 text-base shadow-xl hover:shadow-2xl transition-all">
                                QUERO GARANTIR MEU INGRESSO (R$ 47,00)
                            </a>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-[10px] text-softblack/50 font-medium uppercase tracking-widest">
                                <span className="flex items-center gap-1.5">
                                    <Monitor size={12} className="text-vinho/60" /> Ao vivo no Zoom
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-vinho/60" /> Vagas Limitadas
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={12} className="text-vinho/60" /> 4 e 5 de Abril
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
