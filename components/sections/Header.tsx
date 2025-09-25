'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// Logo component with gradient background
function Logo({ className = "h-8" }) {
  return (
        <div className={`${className} w-48 logo-gradient rounded-lg flex items-center justify-center`}>
          <span className="text-white text-lg font-semibold visithome-font">VisitHome</span>
        </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="fixed md:sticky top-0 left-0 right-0 z-50 backdrop-blur bg-[#003249]/70 border-b border-white/10" ref={menuRef}>
      <div className="w-full mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Logo className="h-8"/>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <Link href="/#features" className="hover:text-white transition-colors">Funzioni</Link>
            <Link href="/#buyers" className="hover:text-white transition-colors">Per chi cerca</Link>
            <Link href="/#agents" className="hover:text-white transition-colors">Per agenzie</Link>
            <Link href="/#about" className="hover:text-white transition-colors">Vision</Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/agents" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-5 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors">Per le Agenzie</Link>
            <Link href="/download" className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-5 py-3 text-sm font-semibold shadow-lg transition-colors">Scarica l'app</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-4 pb-6 space-y-1 bg-[#003249]/95 border-t border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <Link
                  href="/#features"
                  className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Funzioni
                </Link>
                <Link
                  href="/#buyers"
                  className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Per chi cerca
                </Link>
                <Link
                  href="/#agents"
                  className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Per agenzie
                </Link>
                <Link
                  href="/#about"
                  className="block px-4 py-3 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vision
                </Link>
              </div>
              <div className="pt-4 space-y-3 border-t border-white/10">
                <Link
                  href="/agents"
                  className="block w-full text-center bg-white/90 hover:bg-white text-[#003249] px-6 py-3 rounded-2xl font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Per le Agenzie
                </Link>
                <Link
                  href="/download"
                  className="block w-full text-center bg-[#007EA7] hover:bg-[#003249] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Scarica l'app
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
