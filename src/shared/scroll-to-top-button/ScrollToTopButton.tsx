'use client'
import { useState, useEffect } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined' && window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);

      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  return (
    <div className={`md:block hidden fixed bottom-[50%] 2xl:right-[87px] lg:right-[40px] right-[20px] transition-all ${isVisible ? '': 'pointer-events-none opacity-0'}`}>
      <button onClick={scrollToTop}>
        <svg className='2xl:w-[79px] 2xl:h-[79px] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]' width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <rect width="79" height="79" rx="39.5" fill="#F5F6F1" fillOpacity="0.1"/>
            <circle cx="39.5" cy="39.5" r="38.75" stroke="black" strokeWidth="1.5"/>
            <path d="M27 46L40 33L53 46" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </button>
    </div>
  );
};
