
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-black tracking-tighter">TAIPEI FASHION WEEK</h2>
            <p className="text-xs text-gray-500 tracking-[0.3em] uppercase mt-1">THE NEW AVANT-GARDE</p>
          </div>

          <div className="flex space-x-8">
            <a href="https://instagram.com" target="_blank" className="hover:text-gray-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-gray-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-gray-400 transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
          <p>© 2025 TAIPEI FASHION WEEK. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
