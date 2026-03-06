import { motion } from 'framer-motion';
import { Countdown, ProgressBar } from './Scarcity';

export default function Offer() {
    return (
        <section id="offer" className="bg-[#F5F5F1] py-24 px-6 relative overflow-hidden">
            {/* Background Texture continuous */}
            <div className="absolute inset-0 paper-texture opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Lado Esquerdo: Conteúdo da Oferta */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10 max-w-xl"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl text-vinho font-serif leading-tight">
                                O seu passe de acesso à <br />
                                1ª Edição Histórica.
                            </h2>

                            <div className="flex flex-col space-y-2">
                                <p className="text-softblack text-2xl lg:text-3xl font-serif">
                                    Valor de Lançamento: <span className="font-bold">R$ 47,00</span>
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                                    Uma condição única e inaugural para as mulheres que decidiram ser as primeiras a despertar. Este valor é um filtro de comprometimento para garantirmos uma sala apenas com quem está pronta para o próximo nível.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <Countdown />
                                <ProgressBar />
                            </div>

                            <div className="pt-2">
                                <a href="#" className="btn-luxury inline-block text-lg py-5 px-10 shadow-2xl tracking-widest">
                                    SIM, EU QUERO MEU LUGAR NA SALA VIP
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] lg:text-xs tracking-[0.1em] text-softblack/60 font-medium uppercase border-t border-vinho/5 pt-8">
                                <span className="flex items-center gap-1.5">✔️ 4 e 5 de Abril</span>
                                <span className="flex items-center gap-1.5">✔️ Ao vivo no Zoom</span>
                                <span className="flex items-center gap-1.5">✔️ Vagas estritamente limitadas</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Direito: O Ingresso Flutuante (Agora Imponente) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1.1, rotate: -3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full flex justify-center items-center"
                    >
                        {/* O Ingresso com efeitos de objeto físico e sombra difusa */}
                        <img
                            src="/INGRESSO-removebg-preview.png"
                            alt="Ingresso Imersão"
                            className="w-full max-w-lg lg:max-w-xl drop-shadow-[0_20px_25px_rgba(102,0,0,0.15)] hover:drop-shadow-[0_30px_40px_rgba(102,0,0,0.2)] rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer"
                        />

                        {/* Brilho sutil atrás do ingresso */}
                        <div className="absolute -inset-10 bg-vinho/5 rounded-full blur-3xl -z-10 animate-pulse" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
