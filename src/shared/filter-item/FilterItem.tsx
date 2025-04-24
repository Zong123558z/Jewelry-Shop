import { useState } from "react";

interface IProps {
  title: string;
  value: string;
  items: {
    name: string;
    value: string;
  }[]
}

export const FilterItem = ({title, value, items}: IProps) => {
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
        <p className="font-semibold">{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className={`transition-all md:w-[20px] md:h-[20px] w-20px h-20px ${isOpen ? '': 'rotate-[-90deg]'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7.5L10.5 14L4 7.5" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {isOpen && <ul className={`w-full md:mb-[0px] mb-[15px] lg:pl-[20px] md:pl-[0px] pl-[2.67vw] md:pr-0 pr-[2.67vw] grid 2xl:grid-cols-2 md:grid-cols-1 grid-cols-2 lg:gap-[13px_9px] md:gap-[9px] gap-[2.6vw] lg:mt-[20px] md:mt-[10px] mt-[2.67vw] transition-all`}>
        {items.map((item) => (
          <li 
            onClick={() => handleClick(item.value)} 
            key={item.value} 
            className={`border cursor-pointer lg:p-[14px_45px] p-[7px_30px] transition-all active:scale-95 md:h-[49px] h-49px ${activeBrands.includes(item.value) ? 'border-purple': 'border-transparent'} w-full rounded-[7px] bg-white flex items-center justify-center`}
          >
            <p className="">{item.name}</p>
          </li>
        ))}
      </ul>}
    </div>
  );
};