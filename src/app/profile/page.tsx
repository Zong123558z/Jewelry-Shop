import { ProfileDetails } from "@/widgets/profile-details/ProfileDetails";
import { ProfileInfo } from "@/widgets/profile-info/ProfileInfo";

export default function Page() {
  return (
    <div className='2xl:w-[1200px] lg:w-[1000px] w-full p-[0px_24px] md:m-[63px_auto_190px] m-[6.67vw_auto_15vw]'>
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center">
        <ProfileInfo />
        <ProfileDetails />
      </div>
    </div>
  )
}
