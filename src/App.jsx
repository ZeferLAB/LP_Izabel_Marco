import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Mechanism from './components/Mechanism';
import EventJourney from './components/EventJourney';
import SpeakerBio from './components/SpeakerBio';
import Offer from './components/Offer';
import FAQ from './components/FAQ';

function App() {
  return (
    <main className="min-h-screen pt-[30px]">
      <Header />
      <Hero />
      <Manifesto />
      <Mechanism />
      <EventJourney />
      <SpeakerBio />
      <Offer />
      <FAQ />

      {/* Footer Minimalista */}
      <footer className="bg-[#F5F5F1] py-12 px-6 border-t border-vinho/5 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-serif text-vinho text-xl italic underline decoration-vinho/20 underline-offset-8">
            O Despertar da Mulher Exausta
          </p>
          <p className="text-softblack/40 text-xs tracking-widest uppercase">
            © 2026 Izabel Comunicatória. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
