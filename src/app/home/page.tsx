import { Container } from "@/shared/container/Container";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { HomePreview } from "@/widgets/home-preview/HomePreview";

export default function Page() {
  return (
    <div>
      <Container>
        <HomePreview />
      </Container>
      <div className="md:hidden block relative">
        <ImageWithSkeleton
          src={'/images/home/bottom-bg.png'} 
          alt="bottom-bg"
          width={375} 
          height={665} 
          className='w-full object-cover object-center' 
        />
        <div className="absolute w-full h-full left-0 flex top-[0px]">
          <div className="p-[13.35vw_8.81vw_0px] text-center flex flex-col items-center gap-[3.2vw]">
            <div className="">
              <ImageWithSkeleton
                src={'/images/home/logo.png'} 
                alt="logo"
                width={152} 
                height={31} 
                className='w-152px' 
              />
            </div>
            <p className="cormorantSC uppercase fs-16">БРЕНД, КОТОРЫЙ ВОПЛОЩАЕТ ЭЛЕГЕНТНОСТЬ И ИЗЫСКАННОСТЬ В СВОИХ УКРАШЕНИЯХ</p>
          </div>
        </div>
      </div>
    </div>
  );
};