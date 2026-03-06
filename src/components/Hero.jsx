import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Monitor } from 'lucide-react';
import { Countdown } from './Scarcity';

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-40px)] flex items-center bg-gradient-to-br from-[#F5F5F1] via-[#ffffff] to-[#eaeae4] overflow-hidden pt-4 pb-8">
            <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Coluna Esquerda: Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-4"
                >
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-vinho leading-[1.15] font-serif">
                        Você não vai sair daqui sabendo falar melhor. <br />
                        <span className="italic font-serif">Você vai sair daqui incapaz de continuar se diminuindo.</span>
                    </h1>

                    <p className="text-sm lg:text-base text-softblack/80 max-w-lg leading-relaxed">
                        Em 2 dias de Imersão, entenda por que você se tornou uma mulher exausta, recupere a sua voz interna e aprenda a sustentar publicamente a autoridade que você já possui.
                    </p>

                    <div className="flex flex-col space-y-6">
                        <Countdown />

                        <div className="flex flex-col space-y-4">
                            <a href="#offer" className="btn-luxury w-full sm:w-max py-4 text-base">
                                QUERO GARANTIR MEU INGRESSO (R$ 47,00)
                            </a>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-softblack/50 font-medium uppercase tracking-widest">
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

                {/* Coluna Direita: Imagem Editorial (Compactada) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[3/4] w-full max-w-[280px] lg:max-w-[320px] mx-auto"
                >
                    <div className="absolute inset-0 bg-gray-200 border border-gray-100 shadow-luxury rounded-sm overflow-hidden">
                        <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-softblack/10 font-serif text-xl italic uppercase tracking-tighter">
                            Izabel
                        </div>
                    </div>
                    {/* Elemento de design flutuante */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-vinho/5 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
