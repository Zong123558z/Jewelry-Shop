'use client'

import { productList } from "@/utils/const/productList";
import { useState } from "react";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { formatNumber } from "@/utils/libs/formatNumber";

export const OrderItem = () => {
  const [isOpen, setIsOpen] = useState(false)

  const orderList = productList.filter((_, index) => index < 2)

  return (
    <div className="w-full md:bg-white bg-transparent md:p-[14px_20px] p-[0px] rounded-[7px]">
      <div className="bg-white md:p-[0px] p-[3.73vw_5.34vw] rounded-[7px] w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center md:gap-[12px] gap-[3.21vw]">
            <h5 className="md:text-[18px] text-[4.27vw] font-semibold">Заказ #231</h5>
            <p className="md:text-[16px] text-[3.21vw] font-medium text-gray-text">12.04.25</p>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="transition-all active:scale-95">
            <svg className={`transition-all md:w-[21px] w-20px md:h-[21px] h-20px ${isOpen ? 'rotate-90': ''}`} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 3.5L14 10L7.5 16.5" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:m-[18px_0px_0px] m-[2.67vw_2.67vw_0px]">
          <ul className="flex flex-col gap-[18px]">
            {orderList.map((item, index) => (
              <li key={index} className="w-full md:p-[0px] p-[2.67vw_2.94vw_5.34vw] bg-white rounded-[10px]">
                <div className="md:hidden flex items-center justify-between text-[3.73vw] p-[0px_2.94vw_2.5vw] border-b-[1px] border-[#ECECEC]">
                  <p>LGS-i92927839300763731</p>
                  <svg className="w-20px h-21px" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.828125" y="1.96143" width="18" height="17" rx="3.5" stroke="#6A3D96"/>
                    <path d="M5.32812 8.46167H13.3281" stroke="#6A3D96" strokeLinecap="round"/>
                    <path d="M5.32812 13.1284H13.3281" stroke="#6A3D96" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex items-start md:gap-[20px] gap-[3.21vw] md:p-[0px] p-[3.21vw_2.94vw_0vw]">
                  <div className={`md:w-[133px] w-84px relative border border-gray aspect-square overflow-hidden rounded-[12px] flex items-center justify-center`}>
                    <ImageWithSkeleton
                      src={item.images[0]}
                      alt="order-img"
                      width={133}
                      height={133}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="md:flex hidden w-[36px] absolute top-[-1px] left-[-1px] z-[10] aspect-square border border-[#B3B3B3] bg-[#FFFFFF4D] backdrop-blur-[6px] items-center justify-center rounded-[12px]">
                      <p className="text-purple text-[13px]">15.5</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-between w-full">
                      <div className={`flex flex-col gap-[2px] md:w-[215px] w-165px`}>
                        <h4 className="font-semibold md:text-[24px] text-[4.80vw] cormorantSC">Malorem Ipsume</h4>
                        <p className="bitter md:text-[13px] text-[2.67vw] font-normal text-gray">Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                      <p className="text-[25px] font-semibold text-purple md:flex hidden">x1</p>
                    </div>
                    <p className="font-bold md:text-[26px] text-[5.34vw] cormorantSC">₽{formatNumber(12312)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="md:flex hidden mt-[20px] items-center text-[15px] gap-[14px]">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.828125" y="1.96143" width="18" height="17" rx="3.5" stroke="#6A3D96"/>
              <path d="M5.32812 8.46167H13.3281" stroke="#6A3D96" strokeLinecap="round"/>
              <path d="M5.32812 13.1284H13.3281" stroke="#6A3D96" strokeLinecap="round"/>
            </svg>
            <p>LGS-i92927839300763731</p>
          </div>
        </div>
      )}
    </div>
  );
};