import { Star, Calendar } from 'lucide-react';

export default function Header() {
    return (
        <>
            {/* 1. Top Announcement Bar */}
            <div className="fixed top-0 w-full z-[100] bg-vinho text-white py-2 px-6 shadow-md shadow-vinho/10">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] lg:text-xs tracking-[0.15em] font-sans uppercase font-medium">
                    <div className="flex items-center gap-2">
                        <Star size={12} className="text-white/80" />
                        <span>Imersão O Resgate da Sua Voz | 1ª Edição Histórica</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-white/80" />
                        <span>4 de Abril | Ao vivo no Zoom</span>
                    </div>
                </div>
            </div>

        </>
    );
}
