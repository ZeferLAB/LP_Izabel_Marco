import { motion } from 'framer-motion';

export default function Guarantee() {
    return (
        <section id="guarantee" className="bg-[#F5F5F1] py-10 lg:py-12 px-6 relative overflow-hidden">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">

                {/* Imagem do Selo de Garantia */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-10 relative"
                >
                    <div className="absolute inset-0 bg-[#660000]/10 rounded-full blur-2xl pointer-events-none" />
                    <img
                        src="/selo-garantia.jpg"
                        alt="Selo de Garantia de 7 Dias"
                        className="w-48 md:w-56 h-auto relative drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#660000] font-bold leading-tight">
                        Minha Garantia Incondicional de Elite: Risco Zero.
                    </h2>

                    {/* Texto de Apoio */}
                    <p className="text-[#2D2D2D] text-base md:text-lg lg:text-xl font-sans leading-relaxed">
                        "Eu confio tanto na transformação da Comunicatória que o risco é todo meu. Se você garantir seu ingresso hoje, acessar os bônus imediatos e, em até 7 dias, decidir que a Imersão não é para você, basta me enviar um e-mail. Eu devolvo 100% do seu investimento de R$ 36,90, sem perguntas, sem burocracia e sem ressentimentos. Continuamos amigas e você segue sua jornada. O combinado não sai caro."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
