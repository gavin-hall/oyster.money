'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation' // Step 1

export default function NavigationLinks() {
  const pathname = usePathname()

  const isActive = (href: string) => (pathname === href ? 'font-semibold text-white' : '')

  return (
    <nav className="ml-auto space-x-8 font-medium">
      <Link href="/" className={`animated_underline ${isActive('/')}`}>
        Features
      </Link>
      <Link href="/pricing" className={`animated_underline ${isActive('/pricing')}`}>
        Pricing
      </Link>
      <Link href="/support" className={`animated_underline ${isActive('/support')}`}>
        Support
      </Link>
    </nav>
  )
}
