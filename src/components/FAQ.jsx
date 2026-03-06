import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Eu sou muito tímida e travo na frente da câmera. Isso serve para mim?",
        a: "Sim. O Método comunicatória não é sobre 'perder a timidez' ou virar uma pessoa expansiva. É sobre **Comunicatória**: alinhar sua voz interna para que a técnica flua com segurança. Você vai aprender a sustentar sua autoridade mesmo sendo reservada."
    },
    {
        q: "Eu não quero virar 'blogueirinha' nem fazer dancinhas. Vou ter que me expor?",
        a: "De jeito nenhum. A Izabel combate exatamente a 'performance vazia'. A imersão é para mulheres tecnicamente excelentes que querem ser respeitadas pelo seu valor, não pela sua exposição superficial. Vamos focar em **posicionamento estratégico**, não em entretenimento."
    },
    {
        q: "O meu mercado é muito tradicional e masculino. Esse método funciona?",
        a: "É exatamente para você. A Izabel foi a primeira estagiária mulher em uma multinacional química machista. Ela criou o CQC no campo de batalha, aprendendo a impor limites e ser ouvida onde o currículo não era suficiente. Você vai aprender a ocupar seu espaço sem pedir desculpas."
    },
    {
        q: "Eu já fiz cursos de oratória e não funcionou. Por que o CQC seria diferente?",
        a: "Porque o erro dos cursos comuns é ensinar técnica antes de identidade. Eles tentam consertar sua voz sem olhar para quem você é. Na imersão, trabalhamos a **Comunicatória**: primeiro a sua voz interna e o seu código de autoridade, para depois aplicar a oratória."
    },
    {
        q: "Eu não tenho tempo. O evento vai ficar gravado?",
        a: "A gravação será vendida separadamente. O valor de R$ 47 é um filtro para garantir que você esteja **ao vivo** na sala do Zoom. A transformação real acontece na interação e na prática desses dois dias. Se você quer parar de ser invisível, precisa priorizar a sua voz."
    },
    {
        q: "Eu já sou bem-sucedida no offline, mas me sinto invisível no digital. A imersão ajuda?",
        a: "Esse é o foco principal. Você é o que chamamos de 'Mulher Conquistadora Exausta'. Você tem o faturamento e a competência, mas a sua imagem digital não faz jus ao seu tamanho. Vamos fechar esse abismo entre quem você é e como o mundo te percebe."
    },
    {
        q: "Por que o valor é tão baixo (R$ 47,00)?",
        a: "Porque é um filtro de compromisso. Este valor afasta as curiosas que só buscam dicas gratuitas e coloca na sala apenas mulheres decididas a parar de se diminuir. É um valor simbólico para garantir que a energia da sala seja de quem quer, de fato, o próximo nível."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-white py-24 px-6 border-t border-vinho/5">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl lg:text-4xl text-softblack font-serif text-center mb-16 italic">
                    Esclarecendo sua Jornada
                </h2>

                <div className="space-y-4">
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
