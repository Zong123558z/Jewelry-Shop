'use client'

import { useLoginByInitDataMutation } from '@/entities/auth/api/auth.api'
import { ACCESS_TOKEN, FAKE_INIT_DATA, REFRESH_TOKEN } from '@/utils/const/consts'
import { setStatus } from '@/views/store/user.slice'
import { init, isTMA, retrieveLaunchParams, retrieveRawInitData } from '@telegram-apps/sdk'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const InitTg: FC = () => {
  const router = useRouter()
  const [login, { data, isLoading, error }] = useLoginByInitDataMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    async function initTg() {
      if (process.env.NODE_ENV === 'development') {
        const res = await login({ init_data: FAKE_INIT_DATA }).unwrap()
        localStorage.setItem(ACCESS_TOKEN, res.user.accessToken)
        localStorage.setItem(REFRESH_TOKEN, res.user.refreshToken)
        dispatch(setStatus(res.user.status))
      }
      if (await isTMA()) {
        init()

        const lp = retrieveLaunchParams()

        const isMobile = ['android', 'ios'].includes(lp.tgWebAppPlatform)
        const initData = retrieveRawInitData()
        
        const res = await login({ init_data: initData! }).unwrap()
        localStorage.setItem(ACCESS_TOKEN, res.user.accessToken)
        localStorage.setItem(REFRESH_TOKEN, res.user.refreshToken)
        dispatch(setStatus(res.user.status))

        if (lp.tgWebAppStartParam) {
          router.push(lp.tgWebAppStartParam.replace('_', '/'))
        }
      }
    }
    initTg()
  }, [])
  return <></>
}
