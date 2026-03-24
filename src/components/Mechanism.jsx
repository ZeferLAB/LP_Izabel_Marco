import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Mechanism() {
    const steps = [
        { title: "Identidade", subtitle: "Quem você é" },
        { title: "Posicionamento", subtitle: "Como se coloca" },
        { title: "Expressão", subtitle: "O que você diz" }
    ];

    return (
        <section className="bg-[#F9F9F8] py-10 lg:py-14 px-6 overflow-hidden">
            <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Coluna Esquerda: Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl lg:text-5xl text-softblack font-serif leading-tight">
                        Esqueça a oratória engessada e o marketing de "blogueirinha".
                    </h2>

                    <div className="space-y-3 text-lg text-softblack/80 leading-relaxed">
                        <p>
                            O mercado mentiu para você. Disseram que para vender você precisava "performar".
                        </p>
                        <p>
                            Eu criei a <span className="text-vinho font-bold">Comunicatória</span>: a fusão exata entre sua Identidade (quem você é) e sua Técnica (o que você diz).
                        </p>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl text-vinho italic font-serif"
                    >
                        "Você não precisa aprender a falar. Você precisa parar de se sabotar enquanto fala."
                    </motion.p>
                </motion.div>

                {/* Coluna Direita: Diagrama e Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center space-y-8"
                >
                    {/* Fluxo Minimalista */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="bg-white border border-vinho/20 px-8 py-4 rounded-md shadow-sm text-center min-w-[160px]">
                                    <h4 className="text-vinho font-bold uppercase tracking-wider text-sm">{step.title}</h4>
                                    <p className="text-xs text-softblack/50">{step.subtitle}</p>
                                </div>
                                {idx < steps.length - 1 && (
                                    <ArrowRight className="text-vinho/30 rotate-90 sm:rotate-0" size={24} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mockup iPad */}
                    <div className="relative w-full max-w-md group">
                        <div className="absolute -inset-4 bg-vinho/5 rounded-3xl blur-2xl group-hover:bg-vinho/10 transition-colors" />
                        <div className="relative aspect-[4/3] bg-softblack rounded-[2rem] p-3 shadow-2xl rotate-1 border-[6px] border-[#3d3d3d] overflow-hidden">
                            {/* Simulação de tela do iPad */}
                            <div className="w-full h-full bg-[#1a1a1a] rounded-[1.5rem] overflow-hidden relative">
                                <img
                                    src="/Caderno.png"
                                    alt="Mockup Digital"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-vinho/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
