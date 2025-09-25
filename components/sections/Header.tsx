'use client'

import { useState } from 'react'
import Link from 'next/link'

// Logo component with gradient background
function Logo({ className = "h-8" }) {
  return (
    <div className={`${className} w-48 logo-gradient rounded-lg flex items-center justify-center`}>
      <span className="text-white text-lg font-semibold visithome-font">visithome</span>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-[#003249]/70 border-b border-white/10">
      <div className="w-full mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Logo className="h-8"/>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <Link href="#features" className="hover:text-white transition-colors">Funzioni</Link>
            <Link href="#buyers" className="hover:text-white transition-colors">Per chi cerca</Link>
            <Link href="#agents" className="hover:text-white transition-colors">Per agenzie</Link>
            <Link href="#about" className="hover:text-white transition-colors">Vision</Link>
          </div>
          <div className="flex items-center gap-3">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#003249]/90 border-t border-white/10">
              <Link
                href="#features"
                className="block px-3 py-2 text-slate-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Funzioni
              </Link>
              <Link
                href="#buyers"
                className="block px-3 py-2 text-slate-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Per chi cerca
              </Link>
              <Link
                href="/agents"
                className="block px-3 py-2 text-slate-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Per agenzie
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-slate-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vision
              </Link>
              <div className="pt-4 space-y-2">
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
