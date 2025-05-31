'use client'
import { store } from '@/views/store'
import { persistor } from '@/views/store/store'
import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { IsMobileDeviceWrapper } from '../is-mobile-device-wrapper/IsMobileDeviceWrapper'

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const preventPinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const preventGesture = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener('touchmove', preventPinchZoom, { passive: false })
    document.addEventListener('gesturestart', preventGesture, { passive: false })

    return () => {
      document.removeEventListener('touchmove', preventPinchZoom)
      document.removeEventListener('gesturestart', preventGesture)
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <IsMobileDeviceWrapper>{children}</IsMobileDeviceWrapper>
        </PersistGate>
      </Provider>
    </>
  )
}
