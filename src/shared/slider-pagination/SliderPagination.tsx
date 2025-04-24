'use client'
interface IProps {
  className?: string
  totalSlides: number
  activeSlide: number
}

export const SliderPagination = ({totalSlides, className, activeSlide}: IProps) => {
  return (
    <div className={`w-full flex items-center justify-center absolute`}>
      <div className={`flex items-center justify-center md:h-[3px] h-[3px] ${className ? className: ''}`}>
        {Array(totalSlides).fill(null).map((_, index) => (
          <div 
            key={index} 
            style={{width: `${activeSlide === index ? (100 / (totalSlides + 1) * 2) : (100 / totalSlides + 1)}%`}}
            className={`h-full transition-all rounded-[3px] ${activeSlide === index ? 'bg-purple': 'bg-[#D9D9D9]'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};