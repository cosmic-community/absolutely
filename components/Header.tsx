'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <span className="text-lg font-bold tracking-tight text-gray-900">Absolutely</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/projects" className={linkClass('/projects')}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}