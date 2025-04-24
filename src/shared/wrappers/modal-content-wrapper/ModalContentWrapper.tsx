"use client";
import React, { PropsWithChildren } from 'react';
import { Modal } from '../../modal/Modal';
import { useAppSelector } from '@/views/store';

interface IProps extends PropsWithChildren {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
  paddingWrapper?: string
  onClick: () => void
  buttonText: string
  classNameButton?: string
}

export const ModalContentWrapper = (props: IProps) => {
  const { children, isOpen, setIsOpen, title, paddingWrapper, buttonText, onClick, classNameButton } = props
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen} setOpen={handleClose}>
      <div className='md:w-[519px] w-327px rounded-[25px] bg-white md:p-[22px_32px_32px_32px] p-[3.47vw_5.34vw_5.34vw]'>
        <div className="">
          <div style={{gridTemplateColumns: '1fr 6fr 1fr'}} className="grid">
            <div className=""></div>
            <h3 className='text-center font-bold md:text-[35px] text-[5.87vw] cormorantSC'>{title}</h3>
            <div className="flex justify-end items-center">
              <button onClick={() => setIsOpen(false)} className="transition-all active:scale-[0.98] hover:scale-105">
                <svg className='md:w-[32px] md:h-[32px] w-20px h-20px' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.39209 8.47534L22.1613 22.2446" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.1611 8.47534L8.39192 22.2446" stroke="#B3B3B3" strokeWidth="1.52991" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:mt-[21px] mt-[3.47vw] rounded-[23px] border border-[#ECECEC]">
            <div style={{padding: paddingWrapper ? paddingWrapper: (isMobileDevice ? '5.07vw 4.53vw 4.80vw' : '19px 28.6px 22.6px')}} className="flex flex-col justify-between">
              {children}
              <button onClick={onClick} className={`rounded-[8px] font-medium md:text-[20px] text-[4.27vw] text-white w-full bg-purple md:p-[19.7px_0px] p-[2.7vw_0px] flex items-center justify-center transition-all active:scale-[0.98] ${classNameButton ? classNameButton: ''}`}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};