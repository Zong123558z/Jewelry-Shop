'use client'
import { IProduct } from "@/entities/product/types/product";
import { BasketItem } from "@/shared/basket-item/BasketItem";
import { productList } from "@/utils/const/productList";
import { useEffect, useState } from "react";

export const BasketList = () => {
  const [basketList, setBasketList] = useState(productList.filter((_, index) => index < 3))
  const [deletedBasketList, setDeletedBasketList] = useState<IProduct[]>([])
  
  const handleDelete = (item: IProduct) => {
    setDeletedBasketList([...deletedBasketList, item])
  }

  const handleRestore = ({id}: IProduct) => {
    setDeletedBasketList(deletedBasketList.filter(item => item.id !== id))
  }

  useEffect(() =>{
    return () => {
      // delete all items in deletedBasketList
    }
  }, [])

  return (
    <ul className="w-full flex flex-col md:gap-[25px] gap-[2.67vw]">
      {basketList.map((item, index) => (
        <BasketItem 
          key={index} 
          handleDelete={handleDelete} 
          handleRestore={handleRestore}
          deletedBasketList={deletedBasketList}
          {...item} 
        />
      ))}
    </ul>
  );
};