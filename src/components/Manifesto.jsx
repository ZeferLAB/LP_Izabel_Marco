import { motion } from 'framer-motion';

function handleScrollToOffer(e) {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) offerSection.scrollIntoView({ behavior: 'smooth' });
}

const bullets = [
    {
        main: "engavetou o diploma",
        text: " e hoje assiste outras pessoas (com muito menos capacidade) ocuparem o seu lugar."
    },
    {
        main: "culpa constante",
        text: " e silenciosa por sentir que nunca dá conta de tudo."
    },
    {
        main: "suaviza a própria potência",
        text: " e afina a voz com medo de intimidar os outros."
    }
];

const bulletPrefixes = [
    "A profissional que ",
    "A mulher que até alcançou o sucesso, mas carrega uma ",
    "A líder brilhante que, inconscientemente, "
];

export default function Manifesto() {
    return (
        <section className="bg-white py-12 lg:py-20 px-6 relative overflow-hidden">
            <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 text-center">

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl text-vinho leading-tight font-serif"
                >
                    Nós conquistamos direitos externos, mas ninguém nos ensinou a sustentar nosso poder interno.
                </motion.h2>

                {/* Texto Introdutório */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full text-left space-y-4"
                >
                    <p className="text-softblack text-lg lg:text-xl leading-loose">
                        Você estudou, trabalhou e construiu a sua independência. Mas hoje, o seu maior obstáculo não é a falta de currículo ou técnica. Responda com sinceridade se você se transformou em uma destas mulheres:
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4">
                        {bullets.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 text-softblack text-lg lg:text-xl leading-relaxed"
                            >
                                <span className="text-vinho font-bold text-xl mt-0.5 shrink-0">✓</span>
                                <span>
                                    {bulletPrefixes[idx]}
                                    <strong className="text-softblack font-semibold">{item.main}</strong>
                                    {item.text}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Citação Final */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="pt-4"
                >
                    <blockquote className="text-2xl lg:text-3xl text-vinho italic font-serif leading-snug">
                        "Você não está cansada de trabalhar. Você está cansada de performar um personagem e de se diminuir para caber nos lugares."
                    </blockquote>
                </motion.div>

                {/* CTA */}
                <a
                    href="#offer"
                    onClick={handleScrollToOffer}
                    className="btn-hero-cta w-[95%] lg:w-max py-[14px] px-[28px] text-[15px] text-center uppercase tracking-widest block"
                >
                    SIM, EU PRECISO RESGATAR A MINHA VOZ
                </a>

            </div>

            {/* Background Decorativo */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-vinho/20 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
