import { motion } from 'framer-motion';

export default function SpeakerBio() {
    return (
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24 px-6 relative overflow-hidden">
            <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Imagem (Esquerda): Placeholder B&W */}
                <motion.div
                    initial={{ opacity: 0, grayscale: 1 }}
                    whileInView={{ opacity: 1, grayscale: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-square bg-white p-4 shadow-luxury rounded-sm relative z-10">
                        <div className="w-full h-full bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                            <img 
                                src="/foto-principal.jpg" 
                                alt="Izabel" 
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Overlay sutil */}
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                    {/* Decorative accents */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 border-l-[1px] border-t-[1px] border-vinho/20" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-[1px] border-b-[1px] border-vinho/20" />
                </motion.div>

                {/* Texto (Direita) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div className="space-y-2">
                        <p className="text-vinho font-bold tracking-widest text-xs uppercase">A Porta-Voz</p>
                        <h2 className="text-4xl lg:text-5xl text-softblack font-serif leading-tight">
                            Quem vai guiar você <br /> nesse despertar?
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-softblack/80 leading-relaxed font-sans">
                        <p>
                            Não sou uma teórica. Minha voz foi forjada no campo de batalha.
                        </p>
                        <p>
                            De uma nota 1,6 em física no IFBA à liderança em uma multinacional química (Dow Brasil). Minha missão é ser a porta-voz das mulheres tecnicamente excelentes que não aceitam mais a invisibilidade financeira.
                        </p>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-[1px] bg-gradient-to-r from-vinho/40 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
