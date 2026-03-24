import { useState, useEffect } from 'react';

export const ProgressBar = ({ percentage = 85, label = "85% DOS CONVITES FUNDADORES RESGATADOS" }) => {
    return (
        <div className="w-full max-w-md space-y-3">
            <div className="flex justify-between items-end">
                <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">
                    {label}
                </span>
            </div>
            <div className="h-1 lg:h-1.5 w-full bg-gray-200 overflow-hidden rounded-full">
                <div
                    className="h-full bg-vinho transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export const Countdown = () => {
    // Simulação de contador (para exemplo, fixaremos alguns números)
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 4,
        minutes: 30,
    });

    return (
        <div className="flex gap-6 lg:gap-8">
            {[
                { label: 'Dias', value: timeLeft.days },
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-3xl lg:text-4xl text-vinho font-serif mb-1">
                        {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};
