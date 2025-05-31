'use client'
import { IBasketItem } from '@/entities/catalog/types/catalog'
import { BasketList } from '@/features/basket-list/BasketList'
import { clearDeletedProducts } from '@/views/store/basket.slice'
import { RootState } from '@/views/store/store'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

export const BasketContent = () => {
  const products = useSelector((state: RootState) => state.basket.products)
  const [notDeletedProducts, setNotDeletedProducts] = useState<IBasketItem[]>([])
  const dispatch = useDispatch()
  useEffect(() => {
    setNotDeletedProducts(products.filter(p => !p.isDeleted))
  }, [products])
  useEffect(() => {
    const hasDeleted = products.some(p => p.isDeleted)
    if (hasDeleted) {
      dispatch(clearDeletedProducts())
    }
  }, [])
  return (
    <div className="2xl:w-[540px] lg:w-[450px] w-full flex flex-col gap-[30px] md:p-[0px] p-[0px_6.14vw]">
      <div>
        <div className="flex items-center md:gap-[7px] gap-[1.87vw] md:mt-0 mt-[3vw]">
          <h4 className="cormorantSC md:text-[30px] text-[6.67vw] font-bold">Корзина</h4>
          {notDeletedProducts.length > 0 && (
            <div className="md:w-[28px] w-24px aspect-square rounded-full flex items-center justify-center bg-purple text-white font-semibold md:text-[18px] text-[3.73vw]">
              {notDeletedProducts.length}
            </div>
          )}
        </div>
        {products.length <= 0 && <p className="md:text-[18px] text-[3.73vw]">Корзина пуста</p>}
      </div>

      <BasketList />
    </div>
  )
}
