import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import StyledComponentsRegistry from "../lib/AntdRegistry"
export const metadata = {
  title: 'Resume',
  description: 'Resume App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
