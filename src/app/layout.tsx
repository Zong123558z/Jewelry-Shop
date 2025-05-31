'use client'
import { ScrollToTopButton } from '@/shared/scroll-to-top-button/ScrollToTopButton'
import { ProviderWrapper } from '@/shared/wrappers/provider-wrapper/ProviderWrapper'
import '@/views/style/global.scss'
import { Footer } from '@/widgets/footer/Footer'
import { Header } from '@/widgets/header/Header'
import { InitTg } from '@/widgets/initTg'

declare global {
  interface Window {
    Telegram: any
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <InitTg />
          <div>
            <Header />
            <div className="md:mt-[0px] mt-[-7px]">{children}</div>
          </div>
          <Footer />
          <ScrollToTopButton />
        </ProviderWrapper>
      </body>
    </html>
  )
}
