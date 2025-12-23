
import React from 'react';
import { HeroData } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with subtle zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-[scale-slow_20s_infinite_alternate]"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1539109132314-3477524c7590?q=80&w=1920&auto=format&fit=crop")',
          filter: 'grayscale(100%) brightness(0.4)'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-6">
        <h2 className="text-sm md:text-xl font-light letter-spacing-wide mb-4 animate-[fadeInUp_1.5s_ease-out]">
          {data.season} &mdash; {data.slogan}
        </h2>
        <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-12 animate-[fadeInUp_1.8s_ease-out]">
          TAIPEI <br className="md:hidden" />FASHION WEEK
        </h1>
        
        <div className="animate-[fadeInUp_2.1s_ease-out]">
          <a 
            href="#selection"
            className="inline-block px-10 py-4 bg-white text-black text-sm font-black border border-white hover:bg-transparent hover:text-white transition-all duration-500 uppercase tracking-widest"
          >
            {data.cta_text}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes scale-slow {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
