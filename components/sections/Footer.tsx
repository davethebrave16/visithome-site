import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/VisitHome__03_Badge_Gradient.png"
                alt="VisitHome Logo"
                width={32}
                height={32}
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl font-bold">VisitHome</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for comprehensive home solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-gray-400 hover:text-white">Interior Design</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Home Renovation</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Maintenance</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">Smart Home</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
          © {currentYear} VisitHome. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
