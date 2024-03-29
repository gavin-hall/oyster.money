import './globals.css'
import { Analytics } from '@/components/analytics'
import Header from '@/components/header' // Import the Header component

export const metadata = {
  title: 'Oyster',
  description: 'Effortless money management'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="text-[17px]">
      <body className={`min-h-screen bg-darkest text-[#939393] font-primary antialiased `}>
        <div className="mx-auto max-w-screen-xl px-4 py-10">
          <Header />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
