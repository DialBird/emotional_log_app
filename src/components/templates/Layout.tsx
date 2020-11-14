import { Footer } from '@components/organisms/Footer'
import { Header } from '@components/organisms/Header'
import clsx from 'clsx'
import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx('container', 'bg-teal-100', 'mx-auto')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
