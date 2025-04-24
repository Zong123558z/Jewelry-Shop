import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string
  company: string
  inn: string
  phone: string
}

interface IProps {
  handleRegistration: (data: any) => void
} 

export const useRegistrationModal = ({ handleRegistration }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [valuePhone, setValuePhone] = useState('')
  const [errorPhone, setErrorPhone] = useState<string | null>(null)

  const phoneValidate = () => {
    if(valuePhone === '') {
      setErrorPhone('обязательно')
      return false
    }
    if(valuePhone.includes('_')) {
      setErrorPhone('Неверный номер')
      return false
    }

    return true
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if(phoneValidate()) {
      handleRegistration({...data, phone: valuePhone})
    }
  }

  const handleClick = () => {
    phoneValidate()
    handleSubmit(onSubmit)()
  }

  return { handleClick, onSubmit, handleSubmit, register, setValuePhone, setErrorPhone, errorPhone, errors }
};