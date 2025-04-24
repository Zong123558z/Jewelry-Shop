'use client'
import { setFilterOpen, useAppDispatch } from "@/views/store";
import { BottomFixedWrapper } from "../wrappers/bottom-fixed-wrapper/BottomFixedWrapper";

interface IProps {
  filterListLength: number,
  resultCount: number
}

export const FilterButtons = ({filterListLength, resultCount}: IProps) => {
  const dispatch = useAppDispatch()

  const handleSearch = () => {
    dispatch(setFilterOpen(false))
  }

  const handleReset = () => {

  }

  return (
    <>
      <BottomFixedWrapper>
        <div className="flex items-center justify-center gap-[2.67vw] h-40px fs-18 font-medium">
          <button onClick={handleSearch} className={`w-full active:scale-95 transition-all h-full text-white rounded-[11px] flex items-center justify-center bg-purple`}>Найти ({resultCount})</button>
          <button onClick={handleReset} className={`h-full active:scale-95 transition-all aspect-square rounded-[11px] flex items-center justify-center  ${filterListLength === 0 ? 'border border-gray': 'bg-purple'}`}>
            {filterListLength !== 0
              ? (
                <svg className="w-30px h-30px" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_149_4827)">
                  <path d="M5.50452 8.82525C7.63551 5.15791 11.6066 2.69214 16.1536 2.69214C22.951 2.69214 28.4613 8.20248 28.4613 14.9998C28.4613 21.7972 22.951 27.3075 16.1536 27.3075C9.35629 27.3075 3.84595 21.7972 3.84595 14.9998" stroke="white" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8.84613H5.38465V3.5" stroke="white" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.7986 12.2217L19.5088 18.9319" stroke="white" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.509 12.2217L12.7988 18.9319" stroke="white" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_149_4827">
                  <rect width="30" height="30" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              )
              : (
                <svg className="w-30px h-30px" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_149_4955)">
                  <path d="M5.50452 8.82525C7.63551 5.15791 11.6066 2.69214 16.1536 2.69214C22.951 2.69214 28.4613 8.20248 28.4613 14.9998C28.4613 21.7972 22.951 27.3075 16.1536 27.3075C9.35629 27.3075 3.84595 21.7972 3.84595 14.9998" stroke="#B3B3B3" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8.84613H5.38465V3.5" stroke="#B3B3B3" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.7986 12.2217L19.5088 18.9319" stroke="#B3B3B3" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.509 12.2217L12.7988 18.9319" stroke="#B3B3B3" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_149_4955">
                  <rect width="30" height="30" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              )
            }
          </button>
        </div>
      </BottomFixedWrapper>

      <div className="md:block hidden lg:mt-[150px] mt-[80px] lg:w-[500px] w-[350px]">
        <div className="flex items-center justify-center lg:gap-[20px] gap-[13px] lg:h-[40px] h-[30px] lg:text-[18px] text-[14px] font-medium">
          <button onClick={handleSearch} className={`w-full active:scale-95 transition-all h-full text-white rounded-[11px] flex items-center justify-center bg-purple`}>Найти ({resultCount})</button>
          <button onClick={handleReset} className={`h-full active:scale-95 transition-all aspect-square rounded-[11px] flex items-center justify-center  ${filterListLength === 0 ? 'border border-gray': 'bg-purple'}`}>
            {filterListLength !== 0
              ? (
                <svg className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_149_4827)">
                  <path d="M5.50452 8.82525C7.63551 5.15791 11.6066 2.69214 16.1536 2.69214C22.951 2.69214 28.4613 8.20248 28.4613 14.9998C28.4613 21.7972 22.951 27.3075 16.1536 27.3075C9.35629 27.3075 3.84595 21.7972 3.84595 14.9998" stroke="white" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8.84613H5.38465V3.5" stroke="white" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.7986 12.2217L19.5088 18.9319" stroke="white" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.509 12.2217L12.7988 18.9319" stroke="white" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_149_4827">
                  <rect width="30" height="30" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              )
              : (
                <svg className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_149_4955)">
                  <path d="M5.50452 8.82525C7.63551 5.15791 11.6066 2.69214 16.1536 2.69214C22.951 2.69214 28.4613 8.20248 28.4613 14.9998C28.4613 21.7972 22.951 27.3075 16.1536 27.3075C9.35629 27.3075 3.84595 21.7972 3.84595 14.9998" stroke="#B3B3B3" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8.84613H5.38465V3.5" stroke="#B3B3B3" strokeWidth="1.15385" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.7986 12.2217L19.5088 18.9319" stroke="#B3B3B3" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.509 12.2217L12.7988 18.9319" stroke="#B3B3B3" strokeWidth="0.969249" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_149_4955">
                  <rect width="30" height="30" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              )
            }
          </button>
        </div>
      </div>
    </>
  );
};