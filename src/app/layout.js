import './globals.css'
import { Roboto } from 'next/font/google'
import Header from "../components/Header"
import Footer from "../components/Footer"

const roboto = Roboto({
  weight: '400',
  subsets: ['greek']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
