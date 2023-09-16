import { ThemeProvider } from '@/components/theme-provider'
import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets:['latin'],weight:['500']})

export const metadata: Metadata = {
  title: 'PORTFOLIO',
  description: 'Get to know me better! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en ">
      <body className={`${poppins.className} bg-primary-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
