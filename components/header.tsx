import Link from 'next/link'
import Image from 'next/image'
// import NavigationLinks from '@/components/header-nav' // or the correct path to your NavigationLinks component

const Header = () => {
  return (
    <header className="z-10 relative">
      <div className="flex items-center justify-between">
        <div className="relative w-20 h-10 md:w-24 md:h-12 ">
          {/* The Image component fills the parent div and resizes accordingly */}
          <Image src="/logo-text.svg" fill className="object-contain" alt="Oyster" />
        </div>
        {/* <NavigationLinks /> */}
        <div className="">Launching soon</div>
      </div>
    </header>
  )
}

export default Header
