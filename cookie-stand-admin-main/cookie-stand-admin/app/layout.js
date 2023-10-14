import './globals.css'


import Ind from './pages/Index';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cookie Stand Admin',
  description: 'Generated by create next app',
}


export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>

       <Ind/>

      </body>
    </html>
  )
}