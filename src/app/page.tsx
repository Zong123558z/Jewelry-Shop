'use client'
import Image from "next/image";
import { useAppSelector } from "@/views/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Home() {
  const router = useRouter();
  const { isMobileDevice } = useAppSelector(state => state.main.settings);

  useEffect(() => {
    if(isMobileDevice) {
      router.push('/onboarding')
    }else {
      router.push('/home')
    }
  }, [isMobileDevice])

  if(!isMobileDevice) return <></>

  return (
    <div className="w-screen h-screen bg-[#F5F6F1] flex items-center justify-center">
      <Image 
        src={'/images/loading/logo.png'}
        alt="logo"
        width={228}
        height={202}
      />
    </div>
  )
}
