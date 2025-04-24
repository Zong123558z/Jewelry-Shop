'use client'
import InputMask from 'react-input-mask';
import { ChangeEvent, useState } from "react";
import { CountryFlags } from "../country-flags/CountryFlags";


interface IProps {
  setValuePhone: (valuePhone: string) => void
  setError: (error: string | null) => void
}

export const InputPhone = ({setValuePhone, setError}: IProps) => {
  const [value, setValue] = useState('+7')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setValuePhone(e.target.value)
  }

  return (
    <div className="flex items-center md:gap-[14px] gap-[3.73vw]">
      <CountryFlags setValue={setValue}/>
      <InputMask
        placeholder={value}
        mask={`${value} 999 999 99 99`}
        className="md:text-[18px] text-[3.73vw] font-normal focus:outline-none md:w-[200px] w-159px placeholder:text-gray"
        onChange={handleChange}
      />
    </div>
  );
};