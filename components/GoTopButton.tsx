
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface GoTopButtonProps {
  visible: boolean;
}

const GoTopButton: React.FC<GoTopButtonProps> = ({ visible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default GoTopButton;
