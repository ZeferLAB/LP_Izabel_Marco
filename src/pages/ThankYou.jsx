import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-04-11T09:00:00-03:00').getTime();

export default function ThankYou() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Calculo inicial imediato
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main 
      className="bg-offwhite pt-12 px-6 flex flex-col items-center" 
      style={{ paddingBottom: '40px' }}
    >
      <div className="max-w-[680px] w-full mx-auto space-y-12">
        
        {/* 1. HEADER DE CONFIRMAÇÃO */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center space-y-6"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
            className="mx-auto w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </motion.div>
          
          <motion.h1 
            variants={fadeInPrefix}
            className="font-serif text-4xl md:text-5xl text-vinho font-bold"
          >
            Parabéns, sua vaga está confirmada!
          </motion.h1>
          <motion.p 
            variants={fadeInPrefix}
            className="text-lg md:text-xl text-softblack/80 font-medium"
          >
            Imersão: O Resgate da Voz — 11 de Abril às 9h da manhã
          </motion.p>

          <motion.div variants={fadeInPrefix} className="pt-6">
            {isLive ? (
              <div className="bg-gradient-to-r from-vinho to-vinho-dim text-white py-4 px-6 rounded-lg font-bold text-xl text-center shadow-luxury">
                O evento está acontecendo agora!
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur border border-vinho/10 p-6 rounded-2xl shadow-luxury flex justify-center gap-4 md:gap-8">
                {[
                  { label: 'DIAS', value: timeLeft.days },
                  { label: 'HORAS', value: timeLeft.hours },
                  { label: 'MINUTOS', value: timeLeft.minutes },
                  { label: 'SEGUNDOS', value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center w-16 md:w-20">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-vinho">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-softblack/50 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* 2. CARD DO GRUPO VIP */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-vinho to-vinho-dim rounded-2xl p-8 md:p-10 text-center shadow-deep text-white relative overflow-hidden"
        >
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -ml-10 -mb-10" />

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">
              Seu próximo passo agora
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Entre no Grupo VIP exclusivo para receber todas as informações, materiais e suporte antes da Imersão.
            </p>
            <div className="pt-4 space-y-4">
              <a 
                href="https://chat.whatsapp.com/DOUNYiAuDXUCYvPqHssT0E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto justify-center items-center bg-green-600 hover:bg-green-500 text-white font-bold text-lg md:text-xl px-8 py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform border border-green-500/30"
              >
                Entrar no Grupo VIP do WhatsApp →
              </a>
              <p className="text-sm text-white/70 block">
                ⚠️ Atenção: acesse agora antes que o link expire
              </p>
            </div>
          </div>
        </motion.section>

        {/* 3. DIVISOR */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 py-8"
        >
          <div className="h-[1px] flex-1 bg-vinho/20"></div>
          <span className="text-xs md:text-sm font-bold tracking-widest text-vinho/60 uppercase">
            Antes de sair — leva só 2 minutinhos
          </span>
          <div className="h-[1px] flex-1 bg-vinho/20"></div>
        </motion.div>

        {/* 4. FORMULÁRIO TALLY */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 1.0 }}
          className="space-y-6 text-center"
        >
          <div className="space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-vinho">
              Preciso te conhecer melhor
            </h2>
            <p className="text-softblack/70 text-lg">
              Suas respostas vão me ajudar a nivelar o conteúdo para o seu momento atual.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-luxury overflow-hidden">
            <iframe 
              src="https://tally.so/embed/aQGJ2q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              width="100%" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0" 
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

        {/* 5. FOOTER */}
        <motion.footer 
          initial="hidden"
          animate="visible"
          variants={fadeInPrefix}
          transition={{ delay: 1.2 }}
          className="pt-12 text-center text-sm font-medium text-softblack/50"
        >
          Dúvidas? Entre em contato pelo Instagram
        </motion.footer>

      </div>
    </main>
  );
}
