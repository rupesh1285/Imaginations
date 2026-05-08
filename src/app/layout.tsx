import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Great_Vibes, Nunito, Miniver } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-great-vibes'
})

const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito'
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
        <body className={`${greatVibes.variable} ${nunito.variable} ${miniver.variable} font-nunito`} suppressHydrationWarning>

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}