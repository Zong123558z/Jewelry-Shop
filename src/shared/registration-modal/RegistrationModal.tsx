'use client'
import { useRegisterMutation } from '@/entities/auth/api/auth.api'
import { USER_STATUS } from '@/utils/const/consts'
import { RootState } from '@/views/store/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Error } from './ui/Error'
import { Registration } from './ui/Registration'
import { Success } from './ui/Success'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const RegistrationModal = (props: IProps) => {
  const [isSuccess, setIsSuccess] = useState(false)

  const [register, { data, error, isLoading }] = useRegisterMutation()
  const userStatus = useSelector((state: RootState) => state.user.status)

  const handleRegistration = (data: any) => {
    register(data)
  }

  if (userStatus === USER_STATUS.PENDING || data?.success) return <Success {...props} />

  if (userStatus === USER_STATUS.ERROR) return <Error {...props} />

  return (
    <>
      <Registration handleRegistration={handleRegistration} {...props} />
    </>
  )
}
