import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DotBackground from '@/components/DotBackground'
import ThemeProvider from '@/components/ThemeProvider'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A juicy portfolio',
  description: 'A portfolio to showcase the work of a juicy developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
