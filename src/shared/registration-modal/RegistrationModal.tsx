'use client'
import { useState } from 'react'
import { Error } from './ui/Error'
import { Registration } from './ui/Registration'
import { Success } from './ui/Success'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const RegistrationModal = (props: IProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleRegistration = (data: any) => {
    setIsError(true)
  }

  if (isSuccess) return <Success {...props} />

  if (isError) return <Error {...props} />

  return (
    <>
      <Registration handleRegistration={handleRegistration} {...props} />
    </>
  )
}
