'use client'
import Image from "next/image";
import { useState } from "react";

const brands = [
  {photo: '/images/catalog/brands/brand-1.png', value: 'brand 1'},
  {photo: '/images/catalog/brands/brand-2.png', value: 'brand 2'},
  {photo: '/images/catalog/brands/brand-3.png', value: 'brand 3'},
  {photo: '/images/catalog/brands/brand-4.png', value: 'brand 4'},
  {photo: '/images/catalog/brands/brand-2.png', value: 'brand 5'},
  {photo: '/images/catalog/brands/brand-1.png', value: 'brand 6'},
  {photo: '/images/catalog/brands/brand-4.png', value: 'brand 7'},
  {photo: '/images/catalog/brands/brand-3.png', value: 'brand 8'},
  {photo: '/images/catalog/brands/brand-1.png', value: 'brand 9'},
  {photo: '/images/catalog/brands/brand-2.png', value: 'brand 10'},
  {photo: '/images/catalog/brands/brand-3.png', value: 'brand 11'},
  {photo: '/images/catalog/brands/brand-4.png', value: 'brand 12'},
]

export const BrandList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeBrands, setActiveBrands] = useState<string[]>([])

  const handleClick = (value: string) => {
    if(activeBrands.includes(value)) {
      setActiveBrands(prev => prev.filter(item => item !== value))
    }else{
      setActiveBrands(prev => [...prev, value])
    }
  }

  return (
    <div className="w-full lg:text-[16px] md:text-[14px] text-[4.27vw]">
      <div className="flex items-center justify-between lg:p-[14px_20px] md:p-[8px_13px] p-[3.73vw_5.34vw] bg-white rounded-[7px]">
        <p className="font-semibold">Бренды</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className={`transition-all md:w-[20px] md:h-[20px] w-20px h-20px ${isOpen ? '': 'rotate-[-90deg]'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7.5L10.5 14L4 7.5" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {isOpen && <ul className={`w-full md:mb-[0px] mb-[15px] lg:pl-[20px] md:pl-[0px] pl-[2.67vw] md:pr-0 pr-[2.67vw] grid grid-cols-2 lg:gap-[13px_9px] md:gap-[9px] gap-[2.6vw] lg:mt-[20px] md:mt-[10px] mt-[2.67vw] transition-all`}>
        {brands.map((brand) => (
          <li 
            onClick={() => handleClick(brand.value)} 
            key={brand.value} 
            className={`border cursor-pointer transition-all active:scale-95 ${activeBrands.includes(brand.value) ? 'border-purple': 'border-transparent'} w-full md:h-[49px] h-49px rounded-[7px] bg-white flex items-center justify-center md:p-[4.5px_45px] p-[1.2vw_10vw]`}
          >
            <Image src={brand.photo} alt="brand-img" height={100} width={200} quality={100} className="h-full object-contain" />
          </li>
        ))}
      </ul>}
    </div>
  );
};