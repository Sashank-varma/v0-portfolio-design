import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Sashank Varma Sagiraju | AI Automation & Workflow Operations Specialist',
  description: 'Portfolio of Sashank Varma Sagiraju - AI Automation Engineer specializing in workflow systems, cloud platforms, API integrations, and generative AI solutions.',
  keywords: ['AI Automation', 'Workflow Operations', 'n8n', 'Make.ai', 'AWS', 'MERN Stack', 'Generative AI', 'API Integrations'],
  authors: [{ name: 'Sashank Varma Sagiraju' }],
  openGraph: {
    title: 'Sashank Varma Sagiraju | AI Automation Specialist',
    description: 'Building intelligent automation systems and AI-powered workflows',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
