'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'

const menuItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' }
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-zinc-400 z-10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              DAAB Perícias
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
