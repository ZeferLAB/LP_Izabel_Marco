import { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading components below the fold
const Manifesto = lazy(() => import('./components/Manifesto'));
const Mechanism = lazy(() => import('./components/Mechanism'));
const Programacao = lazy(() => import('./components/Programacao'));
const SpeakerBio = lazy(() => import('./components/SpeakerBio'));
const Offer = lazy(() => import('./components/Offer'));
const Guarantee = lazy(() => import('./components/Guarantee'));
const FAQ = lazy(() => import('./components/FAQ'));
const LeadFormModal = lazy(() => import('./components/LeadFormModal'));
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
      
      <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="w-6 h-6 border-2 border-vinho/20 border-t-vinho rounded-full animate-spin" /></div>}>
        <Manifesto />
        <Mechanism />
        <Programacao />
        <SpeakerBio />
        <Offer onOpenModal={() => setIsModalOpen(true)} />
        <Guarantee />
        <FAQ />
        
        <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>

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
    </main>
  );
}

export default App;
