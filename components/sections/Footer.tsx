import Link from 'next/link'

// Logo component with gradient background
function Logo({ className = "h-7" }) {
  return (
    <div className={`${className} w-32 logo-gradient rounded-lg flex items-center justify-center`}>
      <span className="text-white text-sm font-semibold visithome-font">visithome</span>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="w-full mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <Logo className="h-7"/>
          <span>© {currentYear} visithome – L'Open House Experience digitale</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#features" className="hover:text-white transition-colors">Funzioni</Link>
          <Link href="#buyers" className="hover:text-white transition-colors">Per chi cerca</Link>
          <Link href="#agents" className="hover:text-white transition-colors">Per agenzie</Link>
          <Link href="#about" className="hover:text-white transition-colors">Vision</Link>
        </div>
      </div>
    </footer>
  )
}
