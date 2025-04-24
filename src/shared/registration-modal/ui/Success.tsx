import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { ModalContentWrapper } from "@/shared/wrappers/modal-content-wrapper/ModalContentWrapper";
import { useAppSelector } from "@/views/store";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
} 

export const Success = ({isOpen, setIsOpen}: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  return (
    <ModalContentWrapper 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      title="добро пожаловать!" 
      buttonText="Хорошо" 
      onClick={() => setIsOpen(false)}
      paddingWrapper={isMobileDevice ? '4.8vw' : "25px 28.5px 22.6px"}
    >
      <div className="md:mb-[30px] mb-[6.94vw] flex flex-col items-center justify-center text-center md:gap-[25.5px] gap-[7.21vw]">
        <div className="md:w-[135px] w-95px md:h-[135px] h-95px rounded-full md:border-[2px] border-[1px] border-[#ECECEC] overflow-hidden">
          <ImageWithSkeleton
            src={"/images/home/modal/user.png"}
            alt="user-img"
            height={135}
            width={135}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:w-[360px] w-234px md:text-[18px] text-[3.21vw]">
          Ваша заявка находится на рассмотрении у модератора, как только она будет принята - мы отправим вам уведомление.
        </div>
      </div>
    </ModalContentWrapper>
  );
};