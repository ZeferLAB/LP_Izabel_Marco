import { motion } from 'framer-motion';

export default function EventJourney() {
    const cards = [
        {
            title: "A Voz Interna",
            content: "Desmontar a síndrome da impostora e identificar a persona que você criou para sobreviver."
        },
        {
            title: "O Código de Autoridade",
            content: "Seu arquétipo comunicacional. Como sustentar poder sem perder sua feminilidade."
        },
        {
            title: "A Sustentação Pública",
            content: "Falar sem tremer. Vender e cobrar seu valor real sem precisar se explicar três vezes."
        }
    ];

    return (
        <section className="bg-white py-10 lg:py-12 px-6">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 space-y-3"
                >
                    <h2 className="text-3xl lg:text-5xl text-softblack font-serif italic">A Jornada da Imersão</h2>
                    <p className="text-softblack/50 text-sm uppercase tracking-widest font-bold">O Rito de Passagem</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 border border-vinho/10 rounded-sm shadow-sm hover:-translate-y-2 hover:shadow-luxury hover:border-vinho/30 transition-all duration-500 group"
                        >
                            <h3 className="text-xl text-vinho font-serif mb-3 group-hover:italic transition-all">
                                {card.title}
                            </h3>
                            <p className="text-softblack/70 leading-relaxed">
                                {card.content}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-8 w-12 h-[1px] bg-vinho/20 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
