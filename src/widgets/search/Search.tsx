'use client'
import { setFilterOpen, useAppDispatch, useAppSelector } from "@/views/store";
import { ChangeEvent, useState } from "react"


export const Search = () => {
  const dispatch = useAppDispatch()
  const { filterOpen } = useAppSelector(state => state.main.settings)

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const handleClick = () => {
    dispatch(setFilterOpen(!filterOpen))
  }

  return (
    <div className="w-full flex items-center justify-between md:gap-[10px] gap-[3.47vw] md:h-[48px] h-40px cormorantSC">
      <div className="relative w-full h-full">
        <input 
          value={searchValue} 
          onChange={handleChange} 
          className="w-full h-full flex items-center bg-white md:rounded-[15px] rounded-[9px] md:p-[0px_56px_0px_26px] p-[0px_11vw_0px_4.53vw] md:text-[17px] text-[4.27vw] font-medium md:placeholder:text-gray-text placeholder:text-primary"
          placeholder="Поиск"
        />
        <button onClick={() => setSearchValue('')} className="absolute md:right-[27px] right-[3.21vw] md:top-[8px] top-[2.5vw] transition-all cursor-pointer active:scale-95">
          <svg className="md:w-[31px] md:h-[31px] w-20px h-20px" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.81055 9.94556L20.8105 21.9456" stroke="#B3B3B3" strokeWidth="0.63859" strokeLinecap="round"/>
            <path d="M20.8105 9.94556L9.81055 21.9456" stroke="#B3B3B3" strokeWidth="0.63859" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <button onClick={handleClick} className={`${filterOpen ? 'bg-purple': 'bg-white'} flex items-center justify-center md:rounded-[15px] rounded-full h-full aspect-square transition-all cursor-pointer active:scale-95`}>
        {filterOpen 
          ? (
            <svg className="md:w-[26px] md:h-[24px] w-[5.53vw] h-[4.80vw]" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3896 23.311V1.63211" stroke="white" stroke-width="1.30676" stroke-linecap="round"/>
              <path d="M18.4827 4.14504C20.287 4.14504 21.7496 5.60768 21.7496 7.41194C21.7496 9.21619 20.287 10.6788 18.4827 10.6788C16.6785 10.6788 15.2158 9.21619 15.2158 7.41194C15.2158 5.60768 16.6785 4.14504 18.4827 4.14504Z" fill="#6A3D96" stroke="white" stroke-width="1.30676"/>
              <path d="M8.06055 1.63196V23.3109" stroke="white" stroke-width="1.30676" stroke-linecap="round"/>
              <path d="M8.06129 20.6851C9.86202 20.6851 11.3218 19.2253 11.3218 17.4246C11.3218 15.6238 9.86202 14.1641 8.06129 14.1641C6.26056 14.1641 4.80078 15.6238 4.80078 17.4246C4.80078 19.2253 6.26056 20.6851 8.06129 20.6851Z" fill="#6A3D96" stroke="white" stroke-width="1.30676"/>
            </svg>
          )
          : (
            <svg className="md:w-[26px] md:h-[24px] w-[5.53vw] h-[4.80vw]" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3896 23.311V1.63211" stroke="#6A3D96" strokeWidth="1.30676" strokeLinecap="round"/>
              <path d="M18.4827 4.14504C20.287 4.14504 21.7496 5.60768 21.7496 7.41194C21.7496 9.21619 20.287 10.6788 18.4827 10.6788C16.6785 10.6788 15.2158 9.21619 15.2158 7.41194C15.2158 5.60768 16.6785 4.14504 18.4827 4.14504Z" fill="white" stroke="#6A3D96" strokeWidth="1.30676"/>
              <path d="M8.06055 1.63196V23.3109" stroke="#6A3D96" strokeWidth="1.30676" strokeLinecap="round"/>
              <path d="M8.06129 20.6851C9.86202 20.6851 11.3218 19.2253 11.3218 17.4246C11.3218 15.6238 9.86202 14.1641 8.06129 14.1641C6.26056 14.1641 4.80078 15.6238 4.80078 17.4246C4.80078 19.2253 6.26056 20.6851 8.06129 20.6851Z" fill="white" stroke="#6A3D96" strokeWidth="1.30676"/>
            </svg>
          )
        }

      </button>
    </div>
  );
};