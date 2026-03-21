import { motion } from 'framer-motion';
import { Clock, Map, Target, ShieldCheck, Mic } from 'lucide-react';

const phases = [
  {
    id: 1,
    time: "Manhã",
    title: "O Diagnóstico da Exaustão",
    description1: "Vamos mapear exatamente onde você começou a se diminuir e qual personagem você criou para sobreviver.",
    description2: "É o momento de desconstruir a síndrome da impostora e a sobrecarga identitária que te trava.",
    icon: Map
  },
  {
    id: 2,
    time: "Manhã",
    title: "O Resgate da Voz (A Comunicatória)",
    description1: "Faremos o alinhamento profundo entre a sua identidade interna e o seu posicionamento externo.",
    description2: "Você vai aprender como parar de imitar outras mulheres e encontrar o seu próprio arquétipo comunicacional.",
    icon: Mic
  },
  {
    id: 3,
    time: "Tarde",
    title: "O Código da Autoridade",
    description1: "Vamos focar em como transferir o peso do seu currículo e da sua competência do mundo \"offline\" para a sua presença no digital.",
    description2: "Abordaremos estratégias para sustentar o seu poder sem perder a feminilidade e eliminaremos o medo de virar \"blogueirinha\".",
    icon: ShieldCheck
  },
  {
    id: 4,
    time: "Fim do Dia",
    title: "A Sustentação Pública",
    description1: "Estruturaremos o plano prático para você falar sem tremer, ocupar espaço e vender sem precisar pedir desculpas pela sua competência.",
    description2: "Aqui conectamos a sua voz recuperada com um posicionamento de conversão inabalável para o longo prazo.",
    icon: Target
  }
];

export default function Programacao() {
  return (
    <section className="bg-offwhite py-24 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center space-y-4 mb-8 md:mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-vinho font-bold tracking-tight"
          >
            O seu mapa de destrave: O que vai acontecer no dia 11 de Abril?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-softblack/80 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Nós teremos 1 dia inteiro de trabalho intenso, dividido em 4 fases cirúrgicas. Você não vai apenas assistir; você vai desconstruir a sua insegurança e estruturar o seu posicionamento ao vivo.
          </motion.p>
        </div>

        {/* Timeline Desktop / Cards Mobile */}
        <div className="relative">
          {/* Linha Vertical Central (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-vinho/10 -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 !== 0; 
              
              return (
                <motion.div 
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Ponto / Ícone Central no Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-14 h-14 bg-vinho text-white rounded-full items-center justify-center shadow-md z-20 border-4 border-offwhite">
                    <Icon size={24} strokeWidth={2.5} />
                  </div>

                  {/* Spacer for Desktop (occupies half) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Conteúdo do Card */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pr-12 lg:pr-16 md:justify-end' : 'md:pl-12 lg:pl-16 md:justify-start'}`}>
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-luxury border-t-4 border-vinho relative w-full hover:-translate-y-2 transition-transform duration-300">
                      
                      {/* Ícone e Tempo (Visualização conjunta) */}
                      <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mb-6">
                        <div className="md:hidden w-10 h-10 bg-vinho/10 text-vinho rounded-full flex items-center justify-center">
                          <Icon size={20} strokeWidth={2.5} />
                        </div>
                        <div className="flex items-center gap-1.5 text-vinho/70 font-bold text-xs tracking-widest uppercase bg-vinho/5 px-4 py-1.5 rounded-full whitespace-nowrap">
                          <Clock size={14} />
                          <span>Fase 0{phase.id} • {phase.time}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl md:text-[26px] text-vinho font-bold mb-4 leading-tight">
                        {phase.title}
                      </h3>
                      
                      <div className="space-y-4 text-softblack/80 font-medium leading-relaxed">
                        <p>{phase.description1}</p>
                        <p>{phase.description2}</p>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center w-full flex justify-center px-4"
        >
          <a 
            href="#offer" 
            className="btn-hero-cta inline-flex justify-center items-center w-full md:w-auto px-8 md:px-12 py-5 text-base md:text-lg rounded-xl uppercase tracking-wider shadow-luxury"
          >
            SIM, QUERO MEU INGRESSO PARA O DIA 11/04
          </a>
        </motion.div>

      </div>
    </section>
  );
}
