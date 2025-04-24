'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/shared/container/Container";

const breadcrumbsList = [
  {title: 'Серьги', link: '/'},
  {title: 'Бренд', link: '/'},
  {title: 'Вставка', link: '/'},
  {title: 'Категория', link: '/'},
]

export const Breadcrumbs = () => {
  const router = useRouter()

  return (
    <div className="md:block hidden relative p-[10px_28px] text-[14px] font-normal text-gray">
      <div className="flex items-center gap-[20px]">
        {breadcrumbsList.map((item, index, arr) => {
          if(index === arr.length - 1) {
            return <p>{item.title}</p> 
          }
          return (
            <Link href={item.link} key={index} className="flex items-center gap-[10px]">
              <p>{item.title}</p>
              <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.62558 4.13971C4.82999 4.33641 4.82999 4.66359 4.62558 4.86029L1.34669 8.0154C1.02904 8.32106 0.5 8.09594 0.5 7.65511L0.5 1.34489C0.5 0.904057 1.02904 0.678938 1.34669 0.984598L4.62558 4.13971Z" fill="#B3B3B3"/>
              </svg>
            </Link>
          )
        })}
      </div>
      <button onClick={() => router.back()} className="absolute top-[6px] 2xl:left-[-73px] lg:left-[-30px] left-[-20px] w-[29px] h-[29px] rounded-full flex items-center justify-center border border-purple">
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.88641 10.0886L1.11426 5.31647L5.88641 0.544318" stroke="#6A3D96" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};