import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Poppins, Miniver } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const miniver = Miniver({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-miniver'
})

export const metadata = {
  title: "BlushieBewwry | Delivering Blessings",
  description: 'Bless your loved ones with Love ',
  icons: {
    icon: '/images/Logo-imagination.jpg', // This links your logo to the browser tab
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
  appearance={{
    variables: { 
      colorPrimary: '#de98b4' // Your Imaginations pink
    },
    layout: { 
      logoImageUrl: '/images/Logo-imagination.jpg' 
    }
  }}
>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* FontAwesome for your existing icons */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        </head>
        <body className={`${poppins.variable} ${miniver.variable} font-poppins`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}