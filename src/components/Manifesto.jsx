import { motion } from 'framer-motion';

export default function Manifesto() {
    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            <div className="max-w-3xl mx-auto flex flex-col items-center space-y-12 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl text-vinho leading-tight font-serif"
                >
                    Nós conquistamos direitos externos, mas ninguém nos ensinou a sustentar nosso poder interno.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-softblack text-lg lg:text-xl leading-loose text-left"
                >
                    <p>
                        Você estudou, trabalhou e conquistou sua independência. Mas hoje, seu maior obstáculo não é a falta de técnica.
                    </p>

                    <div className="relative group">
                        <p>
                            Existe a mulher que largou a carreira e hoje tem o diploma engavetado. Existe a mulher que tem sucesso, mas carrega uma culpa constante de ser uma "péssima mãe". Existe a mulher que brilha, mas suaviza sua potência com medo de intimidar os homens.
                        </p>

                        {/* Imagem Editorial Desalinhada (Placeholder com estilo) */}
                        <div className="hidden lg:block absolute -right-64 top-0 w-48 aspect-square bg-[#ecebeb] border border-gray-100 shadow-md rotate-3 grayscale opacity-80 group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
                            <img src="/Mood Editorial.jpg" alt="Mood Editorial" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-12 flex flex-col items-center space-y-6"
                >
                    <blockquote className="text-2xl lg:text-3xl text-vinho italic font-serif">
                        "Você não está cansada de trabalhar. Você está cansada de se diminuir para caber nos lugares."
                    </blockquote>

                    {/* Selo de Cera */}
                    <div className="w-24 h-24 pt-4">
                        <img
                            src="/Selo de Cera.jpg"
                            alt="Selo de Cera"
                            className="w-full h-full object-contain filter drop-shadow-md"
                        />
                    </div>
                </motion.div>

            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-vinho/20 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
