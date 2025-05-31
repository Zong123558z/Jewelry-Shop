'use client'
import { IProductDetail } from '@/entities/catalog/types/catalog'
import { ProductInfo } from '@/features/product-info/ProductInfo'
import { ProductSlider } from '@/features/product-slider/ProductSlider'
import { useAppSelector } from '@/views/store'

interface IProps {
  product?: IProductDetail
}

export const ProductContent = ({ product }: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  if (isMobileDevice)
    return (
      <div style={{ gridTemplateColumns: '6fr 4fr' }} className="mt-[8px] mb-[5.5vw] w-full flex flex-col gap-[5.5vw]">
        <ProductSlider product={product} />
        <div className="p-[0px_5.8vw]">
          <ProductInfo product={product} />
        </div>
      </div>
    )

  return (
    <div
      style={{ gridTemplateColumns: '6fr 4fr' }}
      className="mt-[119px] md:mb-[120px] mb-[5.5vw] w-full lg:grid flex flex-col 2xl:gap-[153px] gap-[100px] grid-cols-2"
    >
      <ProductSlider product={product} />
      <ProductInfo product={product} />
    </div>
  )
}
