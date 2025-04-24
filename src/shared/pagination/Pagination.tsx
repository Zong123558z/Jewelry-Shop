'use client'
import { useState } from "react";

interface IProps {
  className?: string;
  totalPage: number;
}

export const Pagination = ({ className, totalPage }: IProps) => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (value: number) => {
    setActivePage(value);
  };

  const handlePrevClick = () => {
    if (activePage === 1) return;
    setActivePage(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (activePage === totalPage) return;
    setActivePage(prev => prev + 1);
  };

  const getPageNumbers = () => {
    let pages = [];
    if (totalPage <= 8) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      if(activePage === 3) {
        return [1, 2, 3, 4, '...', totalPage]
      }
      if(activePage === totalPage - 2) {
        return [1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
      }
      if (activePage <= 3) {
        pages = [1, 2, 3, '...', totalPage];
      } else if (activePage >= totalPage - 2) {
        pages = [1, '...', totalPage - 2, totalPage - 1, totalPage];
      } else {
        pages = [1, '...', activePage - 1, activePage, activePage + 1, '...', totalPage];
      }
    }
    return pages;
  };

  return (
    <div className={`w-full flex md:justify-end justify-center select-none ${className ? className : ''}`}>
      <div className="flex items-center md:gap-[16px] gap-[2vw] md:text-[20px] text-[3.8vw] font-semibold text-[#91908F]">
        <button onClick={handlePrevClick} className="transition-all active:scale-95">
          <svg className="md:w-[17px] md:h-[18px] w-10px h-11px" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.5L5 9.5" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 9.5L12.0002 16.2692" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {getPageNumbers().map((item, index) => (
          <button
            key={index}
            onClick={() => typeof item === 'number' && handleClick(item)}
            className={`md:w-[28px] w-[5vw] transition-all active:scale-95 ${activePage === item ? 'text-purple' : ''} ${item === '...' ? 'text-gray-500' : ''}`}
            disabled={item === '...'}
          >
            <p>{item}</p>
          </button>
        ))}

        <button onClick={handleNextClick} className="transition-all active:scale-95">
          <svg className="md:w-[17px] md:h-[18px] w-10px h-11px rotate-180" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.5L5 9.5" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 9.5L12.0002 16.2692" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
