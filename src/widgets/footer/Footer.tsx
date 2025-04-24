'use client'
import { useAppSelector } from "@/views/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

const list = [
  {
    title: 'Client care', links: [
      {title: 'Contact us', link: ''},
      {title: 'FAQs', link: ''},
      {title: 'Packaging', link: ''},
      {title: 'Return form', link: ''},
      {title: 'Shopping', link: ''},
    ]
  },
  {
    title: 'Client care', links: [
      {title: 'Contact us', link: ''},
      {title: 'FAQs', link: ''},
      {title: 'Packaging', link: ''},
      {title: 'Return form', link: ''},
      {title: 'Shopping', link: ''},
    ]
  },
  {
    title: 'Legal informatioon', links: [
      {title: 'Terms', link: ''},
      {title: 'Privacy', link: ''},
      {title: 'Cookie', link: ''},
      {title: 'Accessibility Status', link: ''},
    ]
  },
  {
    title: 'Legal informatioon', links: [
      {title: 'Terms', link: ''},
      {title: 'Privacy', link: ''},
      {title: 'Cookie', link: ''},
      {title: 'Accessibility Status', link: ''},
    ]
  },
]

const social = [
  {
    link: '', svgElement: (
      <svg className="md:w-[16px] md:h-[14px] w-20px h-17px" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.756437 6.14403C0.791571 6.12646 0.826722 6.10978 0.860978 6.09396C1.45651 5.81816 2.05994 5.55992 2.66249 5.30168C2.69499 5.30168 2.74944 5.26392 2.78018 5.25162C2.82673 5.23142 2.87329 5.21209 2.91985 5.19189L3.18775 5.07682C3.36694 5.00041 3.54523 4.92399 3.72442 4.84757C4.08191 4.69474 4.4394 4.5419 4.79689 4.38819C5.51187 4.08252 6.22775 3.77598 6.94274 3.47031C7.65772 3.16464 8.37358 2.85809 9.08856 2.55242C9.80355 2.24675 10.5194 1.9402 11.2344 1.63454C11.9494 1.32887 12.6653 1.02232 13.3802 0.71665C13.5392 0.648138 13.7114 0.546249 13.8818 0.516385C14.0249 0.490912 14.1646 0.441724 14.3086 0.414495C14.5818 0.362672 14.8831 0.341591 15.1448 0.4549C15.2353 0.494426 15.3188 0.549762 15.3882 0.619152C15.7202 0.947659 15.6736 1.48697 15.6033 1.94899C15.1141 5.16905 14.6249 8.39 14.1347 11.6101C14.068 12.0519 13.9766 12.5367 13.6279 12.816C13.3328 13.0523 12.9129 13.0787 12.5484 12.9785C12.1839 12.8775 11.8624 12.6658 11.5471 12.4577C10.2392 11.5916 8.93046 10.7256 7.62259 9.85949C7.31165 9.65395 6.96558 9.38518 6.96909 9.01187C6.97085 8.78701 7.10523 8.58675 7.24225 8.40844C8.37885 6.92577 10.0187 5.90687 11.2388 4.49272C11.4109 4.29333 11.5462 3.9332 11.3099 3.81814C11.1694 3.74962 11.0078 3.84273 10.8795 3.93144C9.26686 5.05135 7.65509 6.17214 6.04242 7.29205C5.51628 7.65744 4.96467 8.03338 4.3305 8.12297C3.76308 8.20378 3.19215 8.04568 2.64317 7.88406C2.18291 7.74879 1.72351 7.61001 1.26589 7.46684C1.02258 7.3913 0.771372 7.30961 0.583403 7.13833C0.395434 6.96705 0.28741 6.67895 0.400718 6.45058C0.471866 6.30741 0.609771 6.21693 0.7547 6.14315L0.756437 6.14403Z" fill="white"/>
      </svg>
    )
  },
  {
    link: '', svgElement: (
      <svg className="md:w-[18px] md:h-[13px] w-21px h-15px" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3226 12.0865C13.9491 12.1271 13.5669 12.1341 13.2004 12.1332C10.342 12.1306 7.48363 12.1279 4.62613 12.1262C3.72677 12.1262 2.74726 12.0971 2.05226 11.5254C1.26918 10.8798 1.10622 9.76019 1.0428 8.7472C0.954712 7.35897 0.947664 5.96633 1.01989 4.57722C1.05953 3.81439 1.12912 3.03307 1.45768 2.34248C1.69375 1.84656 2.08749 1.40084 2.59134 1.16653C3.17712 0.894348 3.7902 0.942795 4.42089 0.941915C5.93068 0.940153 7.44048 0.939272 8.95027 0.93751C10.52 0.935748 12.0905 0.934867 13.6602 0.933105C14.4019 0.933105 15.1982 0.94808 15.8034 1.37706C16.5847 1.93024 16.797 2.98286 16.8947 3.93507C17.0753 5.68886 17.078 7.46115 16.9018 9.21494C16.8287 9.93812 16.7071 10.7027 16.2306 11.2515C15.7584 11.7959 15.0581 12.0055 14.3235 12.0857L14.3226 12.0865Z" fill="white"/>
        <path d="M11.5587 6.53455L7.29883 4.0752V8.99391L11.5587 6.53455Z" fill="#2D2B2D"/>
      </svg>
    )
  },
  {
    link: '', svgElement: (
      <svg className="md:w-[17px] md:h-[17px] w-18px h-18px" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9069 12.2025C7.69828 12.2025 5.08779 9.59113 5.08691 6.38248C5.08779 5.56912 5.75008 4.90771 6.56168 4.90771C6.64513 4.90771 6.72768 4.91474 6.80674 4.9288C6.98065 4.95778 7.14579 5.01663 7.29775 5.10535C7.31971 5.11852 7.33464 5.1396 7.33815 5.1642L7.67719 7.30124C7.68159 7.32672 7.67368 7.35131 7.65699 7.36976C7.4699 7.57705 7.23099 7.72637 6.96485 7.80103L6.83661 7.83704L6.88491 7.96089C7.32234 9.07465 8.213 9.96443 9.32763 10.4036L9.45149 10.4528L9.48749 10.3246C9.56215 10.0584 9.71147 9.8195 9.91877 9.63241C9.9337 9.61835 9.9539 9.61133 9.9741 9.61133C9.9785 9.61133 9.98289 9.61133 9.98816 9.61221L12.1252 9.95125C12.1507 9.95564 12.1718 9.9697 12.1849 9.99166C12.2728 10.1436 12.3316 10.3096 12.3615 10.4835C12.3755 10.5608 12.3817 10.6425 12.3817 10.7277C12.3817 11.5402 11.7203 12.2016 10.9069 12.2025Z" fill="white"/>
        <path d="M16.5965 7.83146C16.4235 5.87623 15.5275 4.06242 14.0738 2.72468C12.6114 1.37903 10.7141 0.637695 8.7299 0.637695C4.375 0.637695 0.831706 4.181 0.831706 8.5359C0.831706 9.99749 1.23486 11.4213 1.99816 12.6616L0.295898 16.4297L5.74612 15.8491C6.69387 16.2374 7.69695 16.4341 8.72902 16.4341C9.00044 16.4341 9.27888 16.4201 9.5582 16.3911C9.80414 16.3647 10.0527 16.3261 10.2969 16.2769C13.9439 15.5399 16.6062 12.3032 16.6272 8.57806V8.5359C16.6272 8.29874 16.6167 8.06159 16.5956 7.83146H16.5965ZM5.95605 14.1952L2.94065 14.5166L3.84096 12.5219L3.6609 12.2803C3.64772 12.2628 3.63455 12.2452 3.61962 12.225C2.83788 11.1455 2.42504 9.87013 2.42504 8.53678C2.42504 5.06023 5.25336 2.23192 8.7299 2.23192C11.9869 2.23192 14.7475 4.77301 15.0137 8.01679C15.0277 8.1907 15.0356 8.3655 15.0356 8.53766C15.0356 8.58685 15.0348 8.63515 15.0339 8.68698C14.9671 11.5952 12.9355 14.0652 10.0931 14.6941C9.87616 14.7424 9.65394 14.7793 9.43259 14.803C9.20246 14.8293 8.96618 14.8425 8.73166 14.8425C7.89634 14.8425 7.08474 14.6809 6.31793 14.3612C6.23273 14.3269 6.14928 14.29 6.07111 14.2523L5.95693 14.1969L5.95605 14.1952Z" fill="white"/>
      </svg>
    )
  }
]

const contactList = ['+7 921 264 10 27', '+7 911 456 78 36']

export const Footer = () => {
  const {filterOpen, isMobileDevice} = useAppSelector(state => state.main.settings)
  const pathname = usePathname().split('/')[1]

  if(
    pathname === '' 
    || pathname === 'onboarding' 
    || (filterOpen && isMobileDevice) 
    || (pathname === 'product' && isMobileDevice)
    || (pathname === 'basket' && isMobileDevice)
  ) return <></>

  return (
    <footer className="bg-primary text-white 2xl:p-[72px_253px] lg:p-[50px_153px] md:p-[30px_100px] p-[4.27vw_6.675vw_8.277vw]">
      <ul className="justify-between md:flex hidden">
        {list.map(({title, links}, index) => (
          <li key={index} className="flex flex-col 2xl:gap-[18px] md:gap-[14px] gap-[10px]">
            <h4 className="font-semibold 2xl:text-[16px] text-[13px] uppercase">{title}</h4>
            {links.map((item, i) => (
              <Link key={i} href={item.link} className="font-medium 2xl:text-[15px] text-[12px]">{item.title}</Link>
            ))}
          </li>
        ))}
        <li className="flex flex-col 2xl:gap-[18px] md:gap-[14px] gap-[10px]">
          <h4 className="font-semibold 2xl:text-[16px] text-[13px] uppercase">Follow us</h4>
          <div className="flex items-center gap-[11.4px]">
            {social.map((item, index) => (
              <Link key={index} href={item.link} className="flex items-center justify-center rounded-full bg-[#353535] min-h-[32px] min-w-[32px]">
                {item.svgElement}
              </Link>
            ))}
          </div>
        </li>
      </ul>
      <ul className="mt-[61px] md:flex hidden">
        <li className="flex flex-col 2xl:gap-[18px] md:gap-[14px] gap-[10px]">
          <h4 className="font-semibold 2xl:text-[16px] text-[13px] uppercase">Contact</h4>
          {contactList.map((item, i) => (
            <Link key={i} href={`tel:${item.trim()}`} className="font-medium 2xl:text-[15px] text-[12px]">{item}</Link>
          ))}
        </li>
      </ul>
      <div className="items-center justify-center mt-[12px] md:flex hidden">
        <div className="text-center max-w-[250px]">
          <p className="2xl:text-[20px] text-[16px] font-semibold 2xl:mb-[12px] mb-[8px]">BRAUNS</p>
          <p className="2xl:text-[16px] text-[13px] font-normal">2024—2025 © BRAUNS Inc. Все права защищены</p>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-between gap-[4.27vw]">
        <p className="fs-10 text-white">2024—2025 © BRAUNS Inc.<br />Все права защищены</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5.61vw]">
            <div className="w-30px aspect-square bg-white rounded-full"></div>
            <div className="w-30px aspect-square bg-white rounded-full"></div>
            <div className="w-30px aspect-square bg-white rounded-full"></div>
          </div>
          <div className="flex items-center gap-[4.53vw]">
            {social.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.svgElement}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};