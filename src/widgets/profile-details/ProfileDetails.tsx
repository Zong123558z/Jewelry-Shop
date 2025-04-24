'use client'
import { OrderList } from "@/features/order-list/OrderList";
import { SelectMenu } from "@/shared/select-menu/SelectMenu";
import { useState } from "react";

const list = [
  {title: 'Заказы', value: 'orders'},
  {title: 'История', value: 'history'}
]

export const ProfileDetails = () => {
  const [activeValue, setActiveValue] = useState(list[0].value)

  return (
    <div className="2xl:w-[719px] md:w-[600px] w-full lg:mt-[0px] mt-[4vw]">
      <div className="lg:block hidden">
        <SelectMenu 
          list={list} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue}
          className="!justify-center !gap-[190px]"
        />
      </div>
      <div className="lg:hidden block">
        <SelectMenu 
          list={list} 
          activeValue={activeValue} 
          setActiveValue={setActiveValue}
          className="!justify-center !gap-[20vw] !p-0"
        />
      </div>
      <OrderList />
    </div>
  );
};