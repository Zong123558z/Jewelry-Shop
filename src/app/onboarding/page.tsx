'use client'
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { SliderPagination } from "@/shared/slider-pagination/SliderPagination";
import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { useRouter } from "next/navigation";

const list = ['/images/onboarding/onboarding.png', '/images/onboarding/onboarding.png', '/images/onboarding/onboarding.png']

export default function Page() {
  const router = useRouter()
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if(activeSlide === 2) {
      router.push('/home')
    }

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-between bg-[#AFB2BE] relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        className='flex justify-between w-full h-full relative'
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {list.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between h-screen relative">
              <div className="w-full">
                <ImageWithSkeleton
                  src={image}
                  alt="product-img"
                  width={375}
                  height={488}
                  className="object-center object-cover w-full h-488px"
                />
              </div>
              <div className="w-full text-black absolute bottom-[14.7vw] left-0">
                <div className="flex flex-col gap-[4.5vw] p-[0px_6.4vw]">
                  <h4 className="cormorantSC fs-28 font-bold">Краткий Заголовок для понимания</h4>
                  <p className="fs-15 font-medium">Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                </div>
                <div className="w-full p-[0px_16.2vw] flex items-center justify-center">
                  <button onClick={handleNextClick} className={`transition-all active:scale-95 bg-purple w-full rounded-[8px] p-[2.7vw_0px] mt-[13.2vw]`}>
                    <p className="fs-16 font-medium text-white">Далее</p>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-0 left-0 z-30 w-full grid col-span-3 mt-[26px]">
          <button onClick={handlePrevClick} className={`ml-[24px] mt-[-8px] transition-all ${activeSlide === 0 ? 'opacity-0 pointer-events-none': ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 3L6 9.5L12.5 16" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <SliderPagination className="w-[70px] gap-[6px] !h-[2px]" activeSlide={activeSlide} totalSlides={3}/>
        </div>
      </Swiper>
    </div>
  );
};