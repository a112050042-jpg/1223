
import React, { useEffect, useRef } from 'react';
import { IntroData } from '../types';

interface AboutProps {
  data: IntroData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !textRef.current) return;
      const scrollPos = window.scrollY;
      const elementTop = imageRef.current.parentElement?.offsetTop || 0;
      const relativeScroll = scrollPos - elementTop;
      
      if (window.innerWidth > 768) {
        imageRef.current.style.transform = `translateY(${relativeScroll * 0.1}px)`;
        textRef.current.style.transform = `translateY(${relativeScroll * -0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Parallax Image Block */}
        <div className="relative h-[400px] md:h-[700px] overflow-hidden order-2 md:order-1">
          <div 
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop")',
              filter: 'grayscale(100%)'
            }}
          />
        </div>

        {/* Text Block */}
        <div ref={textRef} className="z-10 order-1 md:order-2 md:pl-12">
          <h3 className="text-xs font-bold letter-spacing-wide text-gray-400 mb-6 uppercase">
            {data.heading}
          </h3>
          <p 
            className="text-2xl md:text-4xl font-light leading-relaxed md:leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="w-24 h-1 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default About;
