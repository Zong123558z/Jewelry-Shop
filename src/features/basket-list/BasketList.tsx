'use client'
import { IBasketItem } from '@/entities/catalog/types/catalog'
import { BasketItem } from '@/shared/basket-item/BasketItem'
import { productList } from '@/utils/const/productList'
import { RootState } from '@/views/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const BasketList = () => {
  const [basketList, setBasketList] = useState(productList.filter((_, index) => index < 3))
  const products = useSelector((state: RootState) => state.basket.products)
  const [deletedBasketList, setDeletedBasketList] = useState<IBasketItem[]>([])

  const handleDelete = (item: IBasketItem) => {
    setDeletedBasketList([...deletedBasketList, item])
  }

  const handleRestore = (item: IBasketItem) => {
    setDeletedBasketList(deletedBasketList.filter(p => p.product.id !== item.product.id))
  }

  useEffect(() => {
    return () => {
      // delete all items in deletedBasketList
    }
  }, [])

  return (
    <ul className="w-full flex flex-col md:gap-[25px] gap-[2.67vw]">
      {products.map((item, index) => (
        <BasketItem key={index} {...item} />
      ))}
    </ul>
  )
}
