import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Para quem é a Imersão?",
        a: "Para mulheres que já possuem excelência técnica, cargos de liderança ou negócios sólidos no &ldquo;mundo real&rdquo; (offline), mas que se sentem invisíveis ou inseguras na hora de se posicionar no digital, em reuniões ou em vendas. Se você está exausta de &ldquo;performar um personagem&rdquo; e quer que a sua voz acompanhe o peso do seu currículo, esse é o seu lugar."
    },
    {
        q: "A Imersão é mais um curso de oratória?",
        a: "Definitivamente não. O mercado tenta te ensinar a gesticular e impostar a voz (técnica antes da identidade). Na Imersão, nós vamos aplicar a **Comunicatória**: um destrave cirúrgico para desconstruir a sua síndrome da impostora e alinhar o seu poder interno com a sua postura externa. Você não vai aprender a &ldquo;falar bonito&rdquo;, vai aprender a sustentar a sua autoridade."
    },
    {
        q: "Como vai funcionar o encontro? É gravado?",
        a: "A nossa Imersão será **100% ao vivo e interativa via Zoom**. Não é um curso gravado para você largar na gaveta. Será 1 dia inteiro de destrave prático, de mão na massa e de olho no olho comigo. Aviso: O foco é a sua transformação imediata, portanto, priorize estar ao vivo para viver essa experiência."
    },
    {
        q: "O meu nicho é muito \"sério\" (Direito, Medicina, Corporativo). Isso funciona para mim?",
        a: "Especialmente para você. A Imersão não foca em te transformar numa &ldquo;blogueirinha&rdquo; de internet. O meu background é a **Indústria Química** (uma multinacional dominada por homens). O que você vai construir aqui é uma postura executiva, firme e inabalável para negociar, liderar e cobrar o seu valor sem precisar pedir desculpas."
    },
    {
        q: "Por que uma Imersão com você custa apenas R$ 36,90?",
        a: "Este valor não paga sequer um almoço, e isso é totalmente intencional. O valor de R$ 36,90 atua como um **&ldquo;filtro de comprometimento&rdquo;**. Ele afasta as curiosas que buscam apenas dicas gratuitas e coloca para dentro da nossa sala de Zoom apenas as mulheres que tomaram a decisão real de parar de se diminuir."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-white py-8 lg:py-10 px-6 border-t border-vinho/5">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl lg:text-4xl text-softblack font-serif text-center mb-8 italic">
                    Esclarecendo sua Jornada
                </h2>

                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-vinho/10 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-4 text-left group hover:text-vinho transition-colors"
                            >
                                <span className="text-lg font-medium text-softblack transition-colors group-hover:text-vinho">
                                    {faq.q}
                                </span>
                                {openIndex === idx ? (
                                    <Minus size={20} className="text-vinho" />
                                ) : (
                                    <Plus size={20} className="text-vinho/40 group-hover:text-vinho" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-softblack/60 leading-relaxed pb-4 pt-2"
                                            dangerouslySetInnerHTML={{ __html: faq.a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-vinho">$1</strong>') }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
