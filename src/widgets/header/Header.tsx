'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname().split('/')[1]
  const busket = true
  const support = true
  const profile = true

  if(pathname === '' || pathname === 'onboarding') return <></>

  return (
    <header className="md:m-[31px_73px_0px] m-[15px_19px_0px] rounded-[13px] bg-white relative z-[100]">
      <menu className="flex items-center justify-between 2xl:p-[9px_74px] lg:p-[9px_50px] md:p-[9px_30px] p-[15px_13px] text-[15px] font-normal">
        <nav className="flex items-center md:gap-[50px] gap-[26px]">
          <Link href={'/catalog'}>
            <p className="md:block hidden">Поиск</p>
            <div className="md:hidden block">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="8" r="6" stroke="#2D2B2D"/>
                <path d="M15.1464 15.8536C15.3417 16.0488 15.6583 16.0488 15.8536 15.8536C16.0488 15.6583 16.0488 15.3417 15.8536 15.1464L15.1464 15.8536ZM15.8536 15.1464L12.3536 11.6464L11.6464 12.3536L15.1464 15.8536L15.8536 15.1464Z" fill="#2D2B2D"/>
              </svg>
            </div>
          </Link>
          <Link href={'/basket'} className="relative">
            <div className="md:block hidden">
              <p>Корзина</p>
              {busket && <div className="top-[2px] right-[-13px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
            <div className="md:hidden block">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 4.25L1 15.5H8.5" stroke="#2D2B2D" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.125 4.25L15.375 15.5H7.875" stroke="#2D2B2D" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.706 4.02941C10.706 3.09335 10.4271 2.19563 9.93068 1.53374C9.43426 0.871848 8.76097 0.5 8.05892 0.5C7.35688 0.5 6.68359 0.871848 6.18717 1.53374C5.69075 2.19563 5.41187 3.09335 5.41187 4.02941" stroke="#2D2B2D" strokeLinecap="round"/>
              </svg>
              {busket && <div className="top-[-3px] right-[-5px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
          </Link>
        </nav>
        <Link href={'/home'}>
          <Image src={'/images/header/logo.png'} alt="logo" quality={100} width={126} height={37} className="lg:h-[37px] md:h-[33px] h-[27px] w-full"/>
        </Link>
        <nav className="flex items-center justify-end md:gap-[50px] gap-[26px]">
          <Link href={'/support'} className="relative">
            <div className="md:block hidden">
              <p>Поддержка</p>
              {support && <div className="top-[2px] right-[-13px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
            <div className="md:hidden block">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2.5H2V13.5L4 11.5H14V2.5Z" stroke="#2D2B2D" strokeLinejoin="round"/>
              </svg>
              {support && <div className="top-[-3px] right-[-5px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
          </Link>
          <Link href={'/profile'} className="relative">
            <div className="md:block hidden">
              <p>Профиль</p>
              {profile && <div className="top-[2px] right-[-13px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
            <div className="md:hidden block">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.65773" cy="3.68947" r="2.72043" stroke="#2D2B2D" strokeWidth="0.93808"/>
                <path d="M5.50006 10L2.87354 15.6499H7.89028" stroke="#2D2B2D" strokeWidth="0.93808" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.3902 10L13.0167 15.6499H7.99998" stroke="#2D2B2D" strokeWidth="0.93808" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {profile && <div className="top-[-3px] right-[-5px] rounded-full h-[6px] w-[6px] bg-purple absolute"></div>}
            </div>
          </Link>
        </nav>
      </menu>
    </header>
  );
};