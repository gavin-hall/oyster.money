import './globals.css'
// import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import Header from '@/components/header' // Import the Header component

// const inter = Inter({ subsets: ['latin'] })
// ${inter.className} is placed on the body className when inter is in use

export const metadata = {
  title: 'Oyster',
  description: 'Effortless money management'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="text-[19px]">
      <body className={`min-h-screen bg-[#0F0F0F] font-primary antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-screen-xl px-4 py-10">
            <Header /> {/* Use the Header component */}
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
