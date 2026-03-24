import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Mechanism from './components/Mechanism';
import Programacao from './components/Programacao';
import SpeakerBio from './components/SpeakerBio';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import LeadFormModal from './components/LeadFormModal';
import ThankYou from './pages/ThankYou';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (window.location.pathname === '/obrigado') {
    return <ThankYou />;
  }

  return (
    <main className="min-h-screen pt-[30px]">
      <Header />
      <Hero />
      <Manifesto />
      <Mechanism />
      <Programacao />
      <SpeakerBio />
      <Offer onOpenModal={() => setIsModalOpen(true)} />
      <Guarantee />
      <FAQ />

      {/* Footer Minimalista */}
      <footer className="bg-[#F5F5F1] py-12 px-6 border-t border-vinho/5 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-serif text-vinho text-xl italic underline decoration-vinho/20 underline-offset-8">
            O Despertar da Mulher Exausta
          </p>
          <p className="text-softblack/40 text-xs tracking-widest uppercase">
            © 2026 Ludimila Izabel. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;
