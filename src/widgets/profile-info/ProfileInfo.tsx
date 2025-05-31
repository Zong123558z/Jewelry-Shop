'use client'
import { useGetProfileQuery } from '@/entities/profile/api/profile.api'
import { ImageWithSkeleton } from '@/shared/image-with-skeleton/ImageWithSkeleton'
import { useEffect } from 'react'

export const ProfileInfo = () => {
  const { data, error, isLoading } = useGetProfileQuery()
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="2xl:w-[335px] md:w-[300px] w-full flex flex-col lg:items-start items-center">
      <div className="rounded-full aspect-square md:w-[177px] w-105px overflow-hidden">
        <ImageWithSkeleton
          src={data?.profile.photo ?? ''}
          alt="profile-img"
          width={177}
          height={177}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="md:mt-[30px] mt-[2.67vw] lg:text-start text-center">
        <h4 className="cormorantSC md:text-[30px] text-[6.41vw] font-bold">{data?.profile.fullName}</h4>
        <p className="md:text-[18px] text-[3.21vw] md:font-medium font-normal text-gray">{data?.profile.companyName}</p>
      </div>
      <div className="flex flex-col gap-[20px] md:mt-[30px] mt-[5.5vw] md:text-[16px] text-[4.27vw] md:font-semibold font-normal w-full">
        <div className="w-full md:p-[14px_20px] p-[3.73vw_5.34vw] bg-white rounded-[7px]">{data?.profile.inn}</div>
        <div className="w-full md:p-[14px_20px] p-[3.73vw_5.34vw] bg-white rounded-[7px]">
          {data?.profile.phoneNumber}
        </div>
      </div>
    </div>
  )
}
