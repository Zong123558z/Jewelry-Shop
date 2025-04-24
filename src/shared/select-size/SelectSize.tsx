'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useState } from "react";
import { useAppSelector } from "@/views/store";

const sizeList = [
  {value: '15.5', total: 10, count: 1},
  {value: '16', total: 10, count: 0},
  {value: '16.5', total: 10, count: 4},
  {value: '17', total: 10, count: 3},
  {value: '17.5', total: 20, count: 12},
  {value: '18', total: 100, count: 93},
  {value: '18.5', total: 10, count: 1},
  {value: '19', total: 10, count: 0},
  {value: '19.5', total: 10, count: 4},
  {value: '20', total: 50, count: 23},
  {value: '20.5', total: 10, count: 0},
  {value: '21', total: 10, count: 4},
  {value: '21.5', total: 10, count: 4},
]

export const SelectSize = () => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  const [activeItem, setActiveItem] = useState(sizeList[0])

  const handleClick = (item: typeof sizeList[0]) => {
    if(item.count !== 0) {
      setActiveItem(item)
    }
  }

  return (
    <div className="w-full lg:mt-[25px] md:mt-[20px] mt-[5.34vw] select-none md:pr-0 pr-[10vw]">
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        className='w-full relative'
      >
        {sizeList.map((item, index) => (
          <SwiperSlide key={index} className='w-full'>
            <button 
              onClick={() => handleClick(item)} 
              className={`border-[2px] 2xl:text-[17px] lg:text-[14px] md:text-[17px] text-[3.4vw] ${
                item.value === activeItem.value
                ? 'border-purple'
                : 'border-gray'
              } ${item.count === 0 
                ? 'opacity-50 pointer-events-none'
                : ''
              } transition-all active:scale-95 2xl:w-[46px] lg:w-[37px] 2xl:h-[46px] lg:h-[37px] md:w-[46px] md:h-[46px] w-35px h-35px rounded-[10px] flex items-center justify-center font-medium`}
            >
              {item.value}
            </button>
          </SwiperSlide>
        ))}
        {isMobileDevice && (
          <>
            <SwiperSlide className='w-full'></SwiperSlide>
            <SwiperSlide className='w-full'></SwiperSlide>
            <SwiperSlide className='w-full'></SwiperSlide>
          </>
        )}
        {isMobileDevice && <div className="absolute bg-[#F5F6F1] right-[-10%] bottom-[-30%] w-[50%] h-[100%] rounded-full blur-[12px] z-[10] pointer-events-none"></div>}
      </Swiper>
      <div className="md:block hidden w-full mt-[16px]">
        <div className="w-full bg-[#D9D9D9] rounded-[5px] h-[3px] overflow-hidden">
          <div 
            style={{width: `${100 / activeItem.total * activeItem.count}%`}}
            className="bg-purple h-full rounded-[5px] transition-all"
          ></div>
        </div>
      </div>
    </div>
  );
};