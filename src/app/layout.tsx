import { ClerkProvider } from '@clerk/nextjs'
import { Great_Vibes, Nunito, Miniver } from 'next/font/google'
import './globals.css'
import ShinyHeartCursor from "@/components/ui/ShinyHeartCursor";
import PageTransition from "@/components/layout/PageTransition";

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const nunito = Nunito({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

const miniver = Miniver({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-miniver',
  display: 'swap',
})

export const metadata = {
  title: "BlushieBewwry | Delivering Blessings",
  description: 'Bless your loved ones with Love',
  icons: {
    icon: '/images/Logo-imagination.jpg',
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
        variables: { colorPrimary: '#de98b4' },
        layout: { logoImageUrl: '/images/Logo-imagination.jpg' }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${greatVibes.variable} ${nunito.variable} ${miniver.variable} font-nunito`} suppressHydrationWarning>
          <ShinyHeartCursor />
          <PageTransition>
            {children}
          </PageTransition>
        </body>
      </html>
    </ClerkProvider>
  )
}