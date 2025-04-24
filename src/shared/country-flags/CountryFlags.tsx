'use client'
import { useAppSelector } from "@/views/store";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";

interface IProps {
  setValue: (value: string) => void
}

const flagList = [
  { value: '+7', flagCode: 'RU' },  // Россия
  { value: '+1', flagCode: 'US' },  // США
  { value: '+44', flagCode: 'GB' }, // Великобритания
  { value: '+49', flagCode: 'DE' }, // Германия
  { value: '+33', flagCode: 'FR' }, // Франция
  { value: '+39', flagCode: 'IT' }, // Италия
  { value: '+34', flagCode: 'ES' }, // Испания
  { value: '+81', flagCode: 'JP' }, // Япония
  { value: '+61', flagCode: 'AU' }, // Австралия
  { value: '+55', flagCode: 'BR' }, // Бразилия
  { value: '+91', flagCode: 'IN' }, // Индия
  { value: '+52', flagCode: 'MX' }, // Мексика
  { value: '+27', flagCode: 'ZA' }, // Южноафриканская Республика
  { value: '+20', flagCode: 'EG' }, // Египет
  { value: '+61', flagCode: 'AU' }, // Австралия
  { value: '+82', flagCode: 'KR' }, // Южная Корея
  { value: '+90', flagCode: 'TR' }, // Турция
  { value: '+86', flagCode: 'CN' }, // Китай
  { value: '+33', flagCode: 'FR' }, // Франция
  { value: '+64', flagCode: 'NZ' }, // Новая Зеландия
  { value: '+32', flagCode: 'BE' }, // Бельгия
  { value: '+31', flagCode: 'NL' }, // Нидерланды
  { value: '+47', flagCode: 'NO' }, // Норвегия
  { value: '+48', flagCode: 'PL' }, // Польша
  { value: '+45', flagCode: 'DK' }, // Дания
  { value: '+56', flagCode: 'CL' }, // Чили
  { value: '+59', flagCode: 'PR' }, // Пуэрто-Рико
  { value: '+356', flagCode: 'MT' }, // Мальта
  { value: '+41', flagCode: 'CH' }, // Швейцария
  { value: '+351', flagCode: 'PT' }, // Португалия
  { value: '+53', flagCode: 'CU' }, // Куба
  { value: '+98', flagCode: 'IR' }, // Иран
  { value: '+54', flagCode: 'AR' }, // Аргентина
  { value: '+20', flagCode: 'EG' }, // Египет
  { value: '+60', flagCode: 'MY' }, // Малайзия
  { value: '+66', flagCode: 'TH' }, // Таиланд
  { value: '+977', flagCode: 'NP' }, // Непал
  { value: '+62', flagCode: 'ID' }, // Индонезия
  { value: '+84', flagCode: 'VN' }, // Вьетнам
  { value: '+963', flagCode: 'SY' }, // Сирия
  { value: '+971', flagCode: 'AE' }, // ОАЭ
  { value: '+974', flagCode: 'QA' }, // Катар
  { value: '+971', flagCode: 'AE' }, // Объединенные Арабские Эмираты
  { value: '+355', flagCode: 'AL' }, // Албания
  { value: '+381', flagCode: 'RS' }, // Сербия
  { value: '+995', flagCode: 'GE' }, // Грузия
  { value: '+370', flagCode: 'LT' }, // Литва
  { value: '+371', flagCode: 'LV' }, // Латвия
  { value: '+370', flagCode: 'LT' }, // Литва
  { value: '+41', flagCode: 'CH' }, // Швейцария
  { value: '+420', flagCode: 'CZ' }, // Чехия
  { value: '+352', flagCode: 'LU' }, // Люксембург
];

export const CountryFlags = ({ setValue }: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  
  const handleClick = (index: number) => {
    setIsOpen(false)
    setActiveIndex(index)
  }

  useEffect(() => {
    setValue(flagList[activeIndex].value)
  }, [activeIndex])

  return (
    <div className="relative select-none">
      <div className="flex items-center md:gap-[8px] gap-[1.34vw]">
        <Flag code={flagList[activeIndex].flagCode} style={{ width: isMobileDevice ? '5.87vw': 34, height: isMobileDevice ? '3.73vw': 22 }} />
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <svg className={`transition-all md:w-[18px] md:h-[10px] w-[3vw] h-[2vw] ${isOpen ? 'rotate-[180deg]': ''}`} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.13354 0.926086L8.35258 8.14512C8.7431 8.53564 9.37626 8.53564 9.76679 8.14512L16.9858 0.926086" stroke="#2D2B2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <ul className={`absolute z-[50] overflow-hidden overflow-y-scroll flex flex-col md:gap-[5px] gap-[1.5vw] top-[130%] transition-all md:w-[110px] w-75px md:h-[150px] h-100px ${isOpen ? '': 'pointer-events-none opacity-0 translate-y-[-10px]'} bg-white border border-[#ECECEC] rounded-[9px]`}>
        {flagList.map((flag, index) => (
          <li onClick={() => handleClick(index)} key={index} className={`cursor-pointer flex items-center p-[5px_10px_5px_5px] justify-between ${index === activeIndex ? 'bg-gray': ''}`}>
            <Flag code={flag.flagCode} style={{ width: isMobileDevice ? '5.87vw': 34, height: isMobileDevice ? '3.73vw': 22 }} />
            <p className="md:text-[15px] text-[3.21vw] font-semibold">{flag.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};