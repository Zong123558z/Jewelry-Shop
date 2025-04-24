'use client'
import { useState } from "react";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/views/store";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CreateOrderErrorModal = ({isOpen, setIsOpen}: IProps) => {
  const { isMobileDevice } = useAppSelector(state => state.main.settings)
  const router = useRouter()
  const [repeatRequestError, setRepeatRequestError] = useState(false)

  const handleRepeatRequest = () => {
    // повторный запрос на создание заказа
    setRepeatRequestError(true)
  }

  if(repeatRequestError) {
    return (
      <ModalContentWrapper 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        onClick={() => router.push('/support')}
        title="Связь с поддержкой"
        buttonText="Перейти"
        paddingWrapper={isMobileDevice ? "5.07vw 4.53vw": "27px 46px"}
        classNameButton={
          isMobileDevice 
            ? "!p-[2.7vw_0px] !w-252px m-[0px_auto]" 
            : "!p-[12.5px_0px] !w-[307px] m-[0px_auto]"
        }
      >
        <div className="flex items-center justify-center">
          <div className="md:w-[363px] w-234px md:mb-[28px] mb-[2.67vw] text-center">
            <p className="md:text-[16px] text-[3.21vw] font-normal">Вы будете перенаправлены в чат с сотрудником поддержки BRAUNS</p>
          </div>
        </div>
      </ModalContentWrapper>
    )
  }

  return (
    <ModalContentWrapper 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      onClick={handleRepeatRequest}
      title="Упс..."
      buttonText="Повторить попытку"
      paddingWrapper={isMobileDevice ? "5.07vw 4.53vw": "27px 46px"}
      classNameButton={
        isMobileDevice 
          ? "!p-[2.7vw_0px] !w-252px m-[0px_auto]" 
          : "!p-[12.5px_0px] !w-[307px] m-[0px_auto]"
      }
    >
      <div className="flex items-center justify-center">
        <div className="md:w-[363px] w-234px md:mb-[28px] mb-[2.67vw] text-center">
          <p className="md:text-[16px] text-[3.21vw] font-normal">Что-то пошло не так. Ваша оплата не прошла. Повторите попытку или обратитесь в поддержку.</p>
        </div>
      </div>
    </ModalContentWrapper>
  );
};