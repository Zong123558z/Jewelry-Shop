'use client'
import { useAppSelector } from "@/views/store";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CreateOrderSuccessModal = ({isOpen, setIsOpen}: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)

  return (
    <ModalContentWrapper 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      onClick={() => setIsOpen(false)}
      title="Поздравляем!"
      buttonText="Хорошо"
      paddingWrapper={isMobileDevice ? "5.07vw 4.53vw": "27px 46px"}
      classNameButton={
        isMobileDevice 
          ? "!p-[2.7vw_0px] !w-252px m-[0px_auto]" 
          : "!p-[12.5px_0px] !w-[307px] m-[0px_auto]"
      }
    >
      <div className="flex items-center justify-center">
        <div className="md:w-[363px] w-234px md:mb-[28px] mb-[2.67vw] text-center">
          <p className="md:text-[16px] text-[3.21vw] font-normal">Ваш заказ успешно оформлен. Вы можете что-то сделать или следить за ним.</p>
        </div>
      </div>
    </ModalContentWrapper>
  );
};