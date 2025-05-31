'use client'
import { IProduct } from '@/entities/catalog/types/catalog'
import { ImageWithSkeleton } from '@/shared/image-with-skeleton/ImageWithSkeleton'
import { SliderPagination } from '@/shared/slider-pagination/SliderPagination'
import { formatNumber } from '@/utils/libs/formatNumber'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  product: IProduct
}
export const ProductItem = ({ product }: IProps) => {
  const router = useRouter()

  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <li onClick={() => router.push(`/product/${product.id}`)} className="w-full cursor-pointer">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="w-full"
        onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index} className="w-full overflow-hidden rounded-[16px]">
            <ImageWithSkeleton
              src={image}
              alt="collection-item"
              width={266}
              height={349}
              className="object-cover object-center w-full"
            />
          </SwiperSlide>
        ))}
        <SliderPagination
          className="z-30 md:mt-[-30px] mt-[-6vw] md:w-[140px] w-100px gap-[9px] !h-[2px]"
          activeSlide={activeSlide}
          totalSlides={product.images.length}
        />
      </Swiper>
      <div className="md:mt-[8.5px] mt-[1.34vw]">
        <h5 className="md:text-[15px] text-[2.67vw] font-normal text-black">{product.name}</h5>
        <div className="flex items-center md:gap-[11px] gap-[2.94vw] cormorantSC">
          <p className="md:text-[30px] text-[5.61vw] font-bold md:mb-[3px] mb-[0.53vw]">
            ₽{formatNumber(product.price)}
          </p>
          <p className="md:text-[24px] text-[4vw] font-medium text-gray-text">
            ₽{formatNumber(product.pricePerGram)}/гр.
          </p>
        </div>
      </div>
    </li>
  )
}
