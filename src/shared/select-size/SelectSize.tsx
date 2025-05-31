'use client'
import { IProductDetail, ISize } from '@/entities/catalog/types/catalog'
import { useAppSelector } from '@/views/store'
import { setCurrentSize } from '@/views/store/product.slice'
import { RootState } from '@/views/store/store'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IProps {
  product: IProductDetail
}

export const SelectSize = ({ product }: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  const currentSize = useSelector((state: RootState) => state.product.currentSize)
  const sizes = useSelector((state: RootState) => state.product.sizes)
  const dispatch = useDispatch()

  const handleClick = (item: ISize) => {
    if (item.stock) {
      dispatch(setCurrentSize(item))
    }
  }

  return (
    <div className="w-full lg:mt-[25px] md:mt-[20px] mt-[5.34vw] select-none md:pr-0 pr-[10vw]">
      <Swiper spaceBetween={10} slidesPerView={7} className="w-full relative">
        {sizes &&
          sizes.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <button
                onClick={() => handleClick(item)}
                className={`border-[2px] 2xl:text-[17px] lg:text-[14px] md:text-[17px] text-[3.4vw] ${
                  item.id === currentSize?.id ? 'border-purple' : 'border-gray'
                } ${
                  item.stock ? '' : 'opacity-50 pointer-events-none'
                } transition-all active:scale-95 2xl:w-[46px] lg:w-[37px] 2xl:h-[46px] lg:h-[37px] md:w-[46px] md:h-[46px] w-35px h-35px rounded-[10px] flex items-center justify-center font-medium`}
              >
                {item.name}
              </button>
            </SwiperSlide>
          ))}
        {isMobileDevice && (
          <>
            <SwiperSlide className="w-full"></SwiperSlide>
            <SwiperSlide className="w-full"></SwiperSlide>
            <SwiperSlide className="w-full"></SwiperSlide>
          </>
        )}
        {isMobileDevice && (
          <div className="absolute bg-[#F5F6F1] right-[-10%] bottom-[-30%] w-[50%] h-[100%] rounded-full blur-[12px] z-[10] pointer-events-none"></div>
        )}
      </Swiper>
      <div className="md:block hidden w-full mt-[16px]">
        <div className="w-full bg-[#D9D9D9] rounded-[5px] h-[3px] overflow-hidden">
          {/* <div
            style={{ width: `${(100 / activeItem.total) * activeItem.count}%` }}
            className="bg-purple h-full rounded-[5px] transition-all"
          ></div> */}
        </div>
      </div>
    </div>
  )
}
