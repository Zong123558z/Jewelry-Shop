'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageWithSkeleton } from '@/shared/image-with-skeleton/ImageWithSkeleton'
import { RegistrationModal } from '@/shared/registration-modal/RegistrationModal'
import { IPreview } from '@/utils/types/preview'
import { useAppSelector } from '@/views/store'
import 'swiper/css'

export const HomePreviewItem = (props: IPreview) => {
  const { title, description, image, catalogs } = props
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  
  const [isOpen, setIsOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)


  return (
    <div>
      <RegistrationModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="overflow-hidden lg:rounded-[35px] md:rounded-[20px] rounded-[13px] relative">
        <ImageWithSkeleton src={image} alt="collection-item" width={1414} height={876} className='w-full md:h-full h-434px object-cover object-center' />
        <div className="absolute w-full lg:bottom-[45px] md:bottom-[30px] bottom-[0px] flex justify-center text-white md:h-fit h-full">
          <div className="lg:w-[283px] md:w-[200px] w-full flex flex-col lg:gap-[28px] gap-[20px] text-center items-center md:h-fit h-full justify-between md:mt-[0px] mt-[9.87vw]">
            <div className="">
              <p className='lg:text-[20px] md:text-[16px] text-[4.53vw] font-medium mb-[6px]'>{title}</p>
              <p className='lg:text-[25px] md:text-[19px] text-[5.50vw] font-medium cormorantSC'>{description}</p>
            </div>
            <button 
              onClick={() => setIsOpen(true)} 
              className="md:mb-[0px] mb-[15vw] transition-all hover:scale-105 active:scale-[0.98] lg:p-[13px_82px] md:p-[9px_0px] p-[3.4vw_0vw] md:w-full w-[70.71vw] border-[1.5px] border-white rounded-[8px]"
            >
              <p className='lg:text-[17px] md:text-[14px] text-[4.53vw] font-medium uppercase'>Подробнее</p>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={19}
        slidesPerView={isMobileDevice ? 1.5 : 4}
        className='lg:mt-[30px] mt-[15px]'
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {catalogs.filter((_, index) => index !== 0).map((catalog, index) => (
          <SwiperSlide key={index} className='cursor-pointer'>
            <div className="w-full flex flex-col lg:pt-[16px] pt-[10px]">
              <div className={`w-full overflow-hidden lg:rounded-[42px] rounded-[25px] ${index % 2 === 0 ? 'rotate-[0.7deg]': 'rotate-[-0.7deg]'}`}>
                <ImageWithSkeleton src={catalog.image} alt="catalog-item" width={334} height={565} className='w-full object-center object-cover 2xl:h-[564px] lg:h-[350px] md:h-[250px] h-348px' />
              </div>
              <div className="lg:mt-[34px] mt-[15px] lg:text-[20px] md:text-[14px] text-[4.53vw] font-medium text-center">Loremi Ipsumi</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:hidden block w-118px m-[10.14vw_auto_0px] h-2px bg-[#D9D9D9] rounded-[2px]">
        <div style={{width: `${100 / (catalogs.length - 1) * (activeSlide + 1)}%`}} className="bg-purple h-full rounded-[2px] transition-all"></div>
      </div>
    </div>
  )
}
