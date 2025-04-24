'use client'
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { useRef, useState } from "react";
import { SliderPagination } from "@/shared/slider-pagination/SliderPagination";
import { ProductVideoSlide } from "@/shared/product-video-slide/ProductVideoSlide";
import 'swiper/css'

const images: string[] = ['/images/product/product.png', '/images/product/product.png', '/images/product/product.png', '/images/product/product.png']
const videos: string[] = ['/images/product/product.mp4', '/images/product/product.mp4']

export const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative w-full flex justify-between items-start">
      <button onClick={handlePrevClick} className={`top-[50%] left-[0vw] md:translate-y-0 translate-y-[-50%] transition-all active:scale-95 2xl:mt-[161px] lg:mt-[140px] md:mt-[180px] mt-[0px] md:relative absolute z-[50]`}>
        <svg className="md:w-[67px] md:h-[67px] h-50px w-50px" width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 17.5946L27.8346 32.1166C27.4633 32.647 27.4633 33.353 27.8346 33.8835L38 48.4054" stroke="#B3B3B3" strokeWidth="2.31081" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>                     
      </button>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        className='flex justify-between 2xl:w-[460px] lg:w-[400px] md:w-[500px] w-full relative'
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="w-full">
            <ProductVideoSlide videoSrc={video} />
          </SwiperSlide>
        ))}
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="w-full aspect-square overflow-hidden md:rounded-[35px] rounded-[0px]">
              <ImageWithSkeleton 
                src={image}
                alt="product-img"
                width={460}
                height={460}
                className="object-center object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <SliderPagination className="z-30 mt-[-30px] w-[140px] gap-[9px]" activeSlide={activeSlide} totalSlides={images.length + videos.length}/>
      </Swiper>
      <button onClick={handleNextClick} className={`top-[50%] right-0 md:translate-y-0 translate-y-[-50%] transition-all active:scale-95 2xl:mt-[161px] lg:mt-[140px] md:mt-[180px] mt-[0px] md:relative absolute z-[50]`}>
        <svg className="md:w-[67px] md:h-[67px] h-50px w-50px" width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 17.5946L39.1654 32.1166C39.5367 32.647 39.5367 33.353 39.1654 33.8835L29 48.4054" stroke="#B3B3B3" strokeWidth="2.31081" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};