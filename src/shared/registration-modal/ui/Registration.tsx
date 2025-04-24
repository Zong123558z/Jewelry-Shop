'use client'
import { ModalContentWrapper } from "../../wrappers/modal-content-wrapper/ModalContentWrapper";
import { InputPhone } from "../../input-phone/InputPhone";
import { useRegistrationModal } from "./../hooks/useRegistrationModal";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleRegistration: (data: any) => void
} 

export const Registration = ({isOpen, setIsOpen, handleRegistration}: IProps) => {
  const { 
    errors,
    errorPhone, 
    handleClick, 
    handleSubmit, 
    onSubmit, 
    register, 
    setErrorPhone, 
    setValuePhone, 
  } = useRegistrationModal({handleRegistration})

  return (
    <ModalContentWrapper isOpen={isOpen} setIsOpen={setIsOpen} title="Регистрирация" buttonText="Продолжить" onClick={handleClick}>
      <div className="md:mb-[25.5px] mb-[6.14vw]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:mb-[25px] mb-[3vw] flex items-center justify-between relative md:p-[0px_0px_17.5px_8px] p-[0vw_0vw_3vw_2.94vw] border-b-[1px] border-[#ECECEC]">
            <input 
              placeholder="Имя" 
              className="md:text-[18px] text-[3.73vw] font-normal focus:outline-none md:w-[277px] w-175px placeholder:text-gray"
              {...register("name", {
                required: {
                  value: true,
                  message: 'обязательно'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Недопустимые символы'
                }
              })}
            />
            <div className="absolute right-0">
              <p className="text-[#FF7676] md:text-[16px] text-[2.67vw] text-nowrap">{errors.name?.message}</p>
            </div>
          </div>

          <div className="md:mb-[25px] mb-[3vw] flex items-center justify-between relative md:p-[0px_0px_17.5px_8px] p-[0vw_0vw_3vw_2.94vw] border-b-[1px] border-[#ECECEC]">
            <input 
              placeholder="Компания" 
              className="md:text-[18px] text-[3.73vw] font-normal focus:outline-none md:w-[277px] w-175px placeholder:text-gray"
              {...register("company", {
                required: {
                  value: true,
                  message: 'обязательно'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Недопустимые символы'
                }
              })}
            />
            <div className="absolute right-0">
              <p className="text-[#FF7676] md:text-[16px] text-[2.67vw] text-nowrap">{errors.company?.message}</p>
            </div>
          </div>

          <div className="md:mb-[25px] mb-[3vw] flex items-center justify-between relative md:p-[0px_0px_17.5px_8px] p-[0vw_0vw_3vw_2.94vw] border-b-[1px] border-[#ECECEC]">
            <input 
              placeholder="ИНН"
              className="md:text-[18px] text-[3.73vw] font-normal focus:outline-none md:w-[277px] w-175px placeholder:text-gray"
              {...register("inn", {
                required: {
                  value: true,
                  message: 'обязательно'
                },
                pattern: {
                  value: /^\d{10}$|^\d{12}$/,
                  message: 'Неверный ИНН'
                }
              })}
            />
            <div className="absolute right-0">
              <p className="text-[#FF7676] md:text-[16px] text-[2.67vw] text-nowrap">{errors.inn?.message}</p>
            </div>
          </div>

          <div className="flex items-center justify-between relative md:p-[0px_0px_17.5px_8px] p-[0vw_0vw_4.27vw_2.94vw]">
            <InputPhone setValuePhone={setValuePhone} setError={setErrorPhone} />
            <div className="absolute right-0">
              <p className="text-[#FF7676] md:text-[16px] text-[2.67vw] text-nowrap">{errorPhone}</p>
            </div>
          </div>
        </form>
      </div>
    </ModalContentWrapper>
  );
};