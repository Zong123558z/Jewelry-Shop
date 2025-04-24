'use client'

import { SelectSize } from "@/shared/select-size/SelectSize";
import { BottomFixedWrapper } from "@/shared/wrappers/bottom-fixed-wrapper/BottomFixedWrapper";
import { formatNumber } from "@/utils/libs/formatNumber";

export const ProductInfo = () => {
  const handleClick = () => {

  }

  return (
    <div className="flex flex-col justify-start lg:items-start items-center">
      <div className="2xl:w-[450px] lg:w-[320px] md:w-[450px] w-full md:pt-[10px] pt-[0px] md:pr-[14px] pr-[0px]">
        <div className="flex justify-between cormorantSC items-end">
          <h4 className="text-black 2xl:text-[40px] lg:text-[30px] md:text-[40px] text-[9.61vw] font-semibold">Malorem Ipsume</h4>
          <p className="md:block hidden 2xl:text-[20px] lg:text-[16px] md:text-[20px] text-[4.53vw] text-gray font-medium">₽170/гр.</p>
        </div>
        <div className="cormorantSC 2xl:mt-[10px] mt-[0px] flex font-bold justify-between items-center">
          <div className="flex 2xl:gap-[20px] md:gap-[10px] gap-[4vw] items-end">
            <h4 className="2xl:text-[40px] lg:text-[30px] md:text-[40px] text-[9.61vw]">₽{formatNumber(17000)}</h4>
            <p className="text-gray 2xl:text-[25px] lg:text-[18px] md:text-[25px] text-[4.53vw] md:mb-0 mb-[2vw] line-through">₽{formatNumber(22000)}</p>
          </div>
          <p className="md:hidden block text-[4.53vw] text-gray font-medium">₽170/гр.</p>
        </div>
      </div>
      <div className="2xl:w-[400px] lg:w-[320px] md:w-[450px] w-full">
        <SelectSize />
        <div className="md:mt-[30px] mt-[5.4vw] md:mb-[10px] mb-[2.67vw]">
          <p className="text-black 2xl:text-[16px] lg:text-[14px] md:text-[16px] text-[3.47vw] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.
          </p>
        </div>
        <button className="flex items-center md:gap-[5px] gap-[0.8vw]">
          <p className="2xl:text-[16px] md:text-[14px] text-[3.1vw] font-normal text-gray">Подробнее</p>
          <svg className="2xl:w-[23px] 2xl:h-[24px] md:w-[19px] w-17px md:h-[20px] h-17px" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="stroke-gray" d="M8.4502 16.7529L12.9845 12.2187C13.397 11.8062 13.397 11.1374 12.9845 10.7249L8.45019 6.19065" stroke="#2D2B2D" strokeWidth="1.05623" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="md:block hidden mt-[30px] lg:w-fit w-[450px]">
        <button onClick={handleClick} className="p-[8px_95px] w-full rounded-[11px] bg-purple text-[#F3F3F3] text-[18px] font-medium transition-all active:scale-95">
          В корзину
        </button>
      </div>
      <BottomFixedWrapper>
        <div className="w-full">
          <button onClick={handleClick} className="flex items-center justify-center h-40px w-full rounded-[11px] bg-purple text-[#F3F3F3] fs-18 font-medium transition-all active:scale-95">
            В корзину
          </button>
        </div>
      </BottomFixedWrapper>
    </div>
  );
};