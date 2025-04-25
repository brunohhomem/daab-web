import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { Menu } from '@/components/Menu'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'DAAB Perícias',
  description: 'Equipe de peritos e assistentes técnicos a sua disposição'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 text-zinc-950 relative flex flex-col min-h-screen`}
      >
        <Menu />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
