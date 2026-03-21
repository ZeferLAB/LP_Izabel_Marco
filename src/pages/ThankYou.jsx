import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const TARGET_DATE = new Date('2026-04-11T09:00:00-03:00').getTime();

export default function ThankYou() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        setIsLive(true);
        return false;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      return true;
    };

    calculateTime();
    const interval = setInterval(() => {
      const shouldContinue = calculateTime();
      if (!shouldContinue) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeInPrefix = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main 
      className="bg-offwhite pt-6 px-4 md:px-6 flex flex-col items-center overflow-x-hidden" 
      style={{ paddingBottom: '40px' }}
    >
      <div className="max-w-[680px] w-full mx-auto space-y-8">
        
        {/* 1. HEADER DE CONFIRMAÇÃO */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="text-center space-y-3 pt-6"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
            className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </motion.div>
          
          <motion.h1 
            variants={fadeInPrefix}
            className="font-serif text-3xl md:text-3xl lg:text-4xl text-vinho font-bold leading-tight"
          >
            Parabéns, sua vaga está confirmada!
          </motion.h1>
          <motion.p 
            variants={fadeInPrefix}
            className="text-base md:text-lg text-softblack/80 font-medium"
          >
            Imersão: O Resgate da Voz — 11 de Abril às 9h
          </motion.p>
        </motion.section>

        {/* 2. CARD DO GRUPO VIP */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-vinho to-vinho-dim rounded-2xl p-6 md:p-8 text-center shadow-deep text-white relative overflow-hidden"
        >
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -mr-6 -mt-6" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -ml-6 -mb-6" />

          <div className="relative z-10 space-y-4 md:space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl text-[#D4AF37] font-bold">
              Seu próximo passo é agora
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-snug px-2">
              Acesse o Grupo VIP e receba o link de acesso à Imersão, materiais exclusivos e suporte.
            </p>
            <div className="pt-2 space-y-3">
              <a 
                href="https://chat.whatsapp.com/Bm4PsMMLEul0cUgrvBoWQA?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto justify-center items-center bg-green-600 hover:bg-green-500 text-white font-bold text-base md:text-lg px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform border border-green-500/30"
              >
                Entrar no Grupo VIP do WhatsApp →
              </a>
              <p className="text-xs md:text-sm text-white/70 block">
                ⚠️ Acesse agora antes que o link expire
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. CONTAGEM REGRESSIVA */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 0.6 }}
          className="text-center space-y-3"
        >
          <p className="text-sm md:text-base font-bold text-vinho/70 uppercase tracking-wide">
            Faltam para a sua Imersão:
          </p>
          {isLive ? (
            <div className="bg-gradient-to-r from-vinho to-vinho-dim text-white py-3 px-6 rounded-lg font-bold text-lg shadow-luxury mx-auto max-w-sm">
              O evento está acontecendo agora!
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur border border-vinho/10 p-4 md:p-5 rounded-xl shadow-sm flex justify-center gap-3 md:gap-6 mx-auto max-w-[340px] md:max-w-sm">
              {[
                { label: 'DIAS', value: timeLeft.days },
                { label: 'HORAS', value: timeLeft.hours },
                { label: 'MINUTOS', value: timeLeft.minutes },
                { label: 'SEGUNDOS', value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center w-[60px] md:w-16">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-vinho leading-none">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-softblack/50 mt-1.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.section>

        {/* 4. DIVISOR E MOTIVADOR */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 0.8 }}
          className="bg-[#fcf5f5] border-l-4 border-vinho p-5 md:p-6 rounded-xl shadow-sm mt-8 space-y-3"
        >
          <div className="flex items-center gap-2 text-vinho">
            <Heart size={20} className="fill-vinho/20 text-vinho" />
            <h3 className="font-serif font-bold text-lg md:text-xl">
              Antes de sair — preciso da sua ajuda
            </h3>
          </div>
          <p className="text-sm md:text-base text-softblack/80 leading-relaxed">
            Separei 2 minutinhos para você responder uma pesquisa rápida. Suas respostas vão me ajudar a personalizar o conteúdo da Imersão para o <strong className="text-vinho">SEU</strong> momento atual. Quanto mais você compartilhar, mais direcionado será o nosso tempo juntas.
          </p>
        </motion.section>

        {/* 5. FORMULÁRIO TALLY */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 1.0 }}
          className="w-full"
        >
          <div className="bg-white rounded-2xl shadow-luxury overflow-hidden">
            <iframe 
              src="https://tally.so/embed/aQGJ2q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              title="Pesquisa de onboarding" 
              scrolling="no"
              style={{ 
                width: '100%', 
                minHeight: '900px',
                border: 'none',
                display: 'block'
              }}
            ></iframe>
          </div>
        </motion.section>

        {/* 6. FOOTER */}
        <motion.footer 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 1.2 }}
          className="pt-6 text-center text-sm font-medium text-softblack/50"
        >
          Dúvidas? Entre em contato pelo Instagram.
        </motion.footer>

      </div>
    </main>
  );
}
