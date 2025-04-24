'use client'
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { SliderPagination } from "@/shared/slider-pagination/SliderPagination";
import { useAppSelector } from "@/views/store";
import 'swiper/css'

const list = [
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection-mobile.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
  {title: 'Кольца', description: 'Ririwa Marsallo x Albinoo12', image: '/images/catalog/collection.png'},
]

export const Collections = () => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  const [activeSlide, setActiveSlide] = useState(0)

  if(isMobileDevice) return (
    <div className="w-full mt-[-73px] relative">
      <SliderPagination activeSlide={activeSlide} totalSlides={list.length} className="w-95px !gap-[6px] z-[20] mt-[82px] !h-[2px]" />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className='w-full'
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index} className='w-full'>
            <div className="">
              <div className="overflow-hidden relative">
                <ImageWithSkeleton src={item.image} alt="collection-item" width={375} height={445} className='h-445px w-full object-cover object-center' />
                <div className="absolute w-full h-full flex flex-col items-center justify-end z-[10px] top-0 left-0 p-[0px_3.7vw_4.27vw]">
                  <div className="flex items-start justify-between w-full">
                    <h4 className="w-217px cormorantSC fs-20 font-medium">Christian Louboutin x Maison Margiela</h4>
                    <button onClick={() => {}} className="mt-[1.4vw]">
                      <svg className="w-20px h-20px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4L11.4665 9.35982C11.7756 9.73066 11.7756 10.2693 11.4665 10.6402L7 16" stroke="#2D2B2D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
  
  return (
    <div className="w-full mt-[20px] mb-[87px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className='w-full rounded-[35px]'
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index} className='w-full'>
            <div className="">
              <div className="overflow-hidden rounded-[35px] relative">
                <ImageWithSkeleton src={item.image} alt="collection-item" width={1414} height={876} className='w-full 2xl:h-[876px] lg:h-[600px] h-[450px] object-cover object-center' />
                <div className="absolute w-full bottom-[45px] flex items-center justify-center text-white">
                  <div className="w-[283px] flex flex-col gap-[28px] text-center">
                    <div className="">
                      <p className='text-[20px] font-medium mb-[6px]'>{item.title}</p>
                      <p className='text-[25px] font-medium cormorantSC'>{item.description}</p>
                    </div>
                    <button onClick={() => {}} className="transition-all hover:scale-105 active:scale-[0.98] text-[17px] font-medium uppercase p-[13px_82px] border-[1.5px] border-white rounded-[8px]">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full p-[0px_33px] mt-[12px]">
        <div className="w-full bg-[#D9D9D9] rounded-[5px] h-[5px] overflow-hidden">
          <div 
            style={{width: activeSlide ? `${100 / (list.length - 1) * activeSlide}%` : 5}}
            className="bg-purple h-full rounded-[5px] transition-all"
          ></div>
        </div>
      </div>
    </div>
  );
};