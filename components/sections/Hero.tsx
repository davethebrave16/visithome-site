import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/VisitHome__03_Badge_Gradient.png"
            alt="VisitHome Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to VisitHome
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Your trusted partner for comprehensive home solutions. From design to maintenance, 
          we bring your vision to life.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#services"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Services
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
          >
            Get Free Quote
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-white text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-white text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-white text-sm">Years</div>
          </div>
        </div>
      </div>
    </section>
  )
}
