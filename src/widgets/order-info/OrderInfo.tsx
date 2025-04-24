'use client'

import { CreateOrderErrorModal } from "@/shared/create-order-error-modal/CreateOrderErrorModal";
import { CreateOrderSuccessModal } from "@/shared/create-order-success-modal/CreateOrderSuccessModal";
import { formatNumber } from "@/utils/libs/formatNumber";
import { useState } from "react";

const selectList = [
  {title: 'Предоплата', value: 'prepayment'},
  {title: 'Отсрочка', value: 'postponement'},
]

export const OrderInfo = () => {
  const [select, setSelect] = useState(selectList[0].value)
  const [createOrderSuccess, setCreateOrderSuccess] = useState(false)
  const [createOrderError, setCreateOrderError] = useState(false)

  const handleSelect = (value: string) => {
    setSelect(value)
  }

  const handleClick = () => {
    setCreateOrderError(true)
  }

  return (
    <>
      <div className="2xl:w-[450px] lg:w-[300px] w-full flex flex-col lg:mt-[0px] mt-[5.34vw] md:p-[0px] p-[0px_6.14vw]">
        <CreateOrderSuccessModal isOpen={createOrderSuccess} setIsOpen={setCreateOrderSuccess} />
        <CreateOrderErrorModal isOpen={createOrderError} setIsOpen={setCreateOrderError} />

        <h2 className="lg:block hidden cormorantSC 2xl:text-[40px] lg:text-[25px] md:text-[40px] text-[6.67vw] font-bold">Оформление заказа</h2>
        <div className="2xl:w-[336px] lg:w-[250px] w-full">
          <div className="md:mt-[15px] mt-[0px]">
            <h5 className="lg:block hidden 2xl:text-[20px] lg:text-[15px]">Способ оплаты</h5>
            <h2 className="lg:hidden block cormorantSC md:text-[30px] text-[6.67vw] font-bold">Способ оплаты</h2>
            <div className="mt-[10px] flex md:gap-[7px] gap-[2vw]">
              {selectList.map(({title, value}, index) => (
                <button key={index} onClick={() => handleSelect(value)} className={`transition-all rounded-[7px] bg-white active:scale-95 flex items-center justify-center w-full 2xl:h-[50px] lg:h-[35px] md:h-[49px] h-49px`}>
                  <p className={`2xl:text-[16px] lg:text-[14px] md:text-[18px] text-[4vw] font-medium transition-all ${select === value ? 'text-purple': 'text-gray'}`}>{title}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="md:mt-[20px] mt-[16.54vw]">
            <div className="flex items-center gap-[11px]">
              <div className="2xl:p-[5px_21px] lg:p-[2px_15px] md:p-[5px_21px] p-[1.43vw_5.34vw] bg-purple rounded-[9px]">
                <p className="text-white 2xl:text-[15px] lg:text-[12px] md:text-[15px] text-[4.27vw] font-semibold text-nowrap">
                  <span className="2xl:text-[16px] lg:text-[13px] md:text-[16px] text-[4vw] font-bold">5%</span> Скидка
                </p>
              </div>
              <p className="2xl:text-[14px] lg:text-[11px] md:text-[14px] text-[3.21vw]">*Купите еще на {formatNumber(1000)}₽, чтобы увеличить скидку.</p>
            </div>
            <div className="w-full md:block hidden bg-[#D9D9D9] rounded-[5px] h-[3px] mt-[11px]">
              <div style={{width: `45%`}} className="bg-purple h-full rounded-[5px]"></div>
            </div>
          </div>
        </div>
        <div className="md:block hidden 2xl:mt-[70px] lg:mt-[35px] md:mt-[40px]">
          <div className="flex items-end 2xl:gap-[30px] lg:gap-[15px] md:gap-[30px] cormorantSC font-bold">
            <h4 className="2xl:text-[50px] lg:text-[30px] md:text-[50px]">₽{formatNumber(170000)}</h4>
            <p className="text-gray line-through 2xl:text-[30px] lg:text-[20px] md:text-[30px]">₽{formatNumber(23000)}</p>
          </div>
          <button onClick={handleClick} className="2xl:mt-[20px] lg:mt-[15px] mt-[30px] transition-all active:scale-95 2xl:p-[13px_91px] lg:p-[8px_50px] md:p-[13px_91px] bg-purple rounded-[11px]">
            <p className="text-white 2xl:text-[18px] lg:text-[14px] md:text-[18px] font-medium">Оформить заказ</p>
          </button>
        </div>

      </div>
      <div className="md:hidden block mt-[2.7vw]">
        <div className="w-full bg-[#D9D9D9] rounded-[5px] h-[3px]">
          <div style={{width: `45%`}} className="bg-purple h-full rounded-[5px]"></div>
        </div>
        <div className="bg-white p-[2.94vw_6.41vw_13.88vw]">
          <div className="flex items-center gap-[4vw]">
            <p className="text-[5.34vw] text-purple font-medium">Итого:</p>
            <div className="flex items-end gap-[3vw] cormorantSC font-bold">
              <h4 className="text-[8vw]">₽{formatNumber(170000)}</h4>
              <p className="text-gray line-through text-[5.87vw]">₽{formatNumber(23000)}</p>
            </div>
          </div>
          <button onClick={handleClick} className="flex mt-[5.61vw] items-center justify-center h-40px w-full rounded-[11px] bg-purple text-[#F3F3F3] fs-18 font-medium transition-all active:scale-95">
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  );
};