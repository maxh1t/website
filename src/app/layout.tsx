import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Maksim Riazantsev',
  description: 'Maksim Riazantsev Website',
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
