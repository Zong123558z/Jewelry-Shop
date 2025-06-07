'use client'
import { IProduct } from '@/entities/catalog/types/catalog'
import { ProductItem } from '@/features/product-item/ProductItem'
import { Pagination } from '@/shared/pagination/Pagination'
import { RootState } from '@/views/store/store'
import { useSelector } from 'react-redux'

interface IProps {
  productList: IProduct[]
}

export const ProductList = ({ productList }: IProps) => {
  const products = useSelector((state: RootState) => state.searchFilter.products)
  
  return (
    <div className="">
      {/* <ul className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[2.4vw_4.8vw]">
        <ProductItem product={{id: 1, article: 'article', images: ['https://i.imgur.com/string', 'https://i.imgur.com/string', 'https://i.imgur.com/string'], name: 'name', price: 1000, pricePerGram: 100}} />
      </ul> */}
      {products.length > 0 && (
        <>
          <ul className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[2.4vw_4.8vw]">
            {productList.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
          <Pagination className="md:mt-[56px] mt-[10vw]" />
        </>
      )}
      {products.length <= 0 && (
        <div className="mdmt-[10vw] flex flex-col items-center">
          <p className="md:text-[20px] text-[4.53vw] text-gray font-medium ">Ничего не найдено</p>
        </div>
      )}
    </div>
  )
}
