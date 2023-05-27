import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const  metadata = {
  title: 'Dennis Njoroge Muhia',
  description: 'Dennis Njoroge Muhia portfolio and curriculumn vitae ie CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
     <NavBar/>
        {children}</body>
    </html>
  )
}
