import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/VisitHome__03_Badge_Gradient.png"
                alt="VisitHome Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The Future of Open House Events
            </h1>
            
            {/* Subheading */}
            <p className="text-xl mb-8 leading-relaxed">
              VisitHome connects real estate professionals with potential buyers through our 
              dual-platform system. Create and manage Open House events with our web app, 
              while buyers discover and book appointments through our mobile app.
            </p>
            
            {/* Platform Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  For Real Estate Professionals
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Create professional event listings</li>
                  <li>• Manage appointments and leads</li>
                  <li>• Get detailed analytics and insights</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  For Potential Buyers
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Discover nearby Open House events</li>
                  <li>• Book appointments easily</li>
                  <li>• Complete pre-qualification forms</li>
                </ul>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#features"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-center"
              >
                Explore Features
              </Link>
              <Link
                href="#download"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 text-center"
              >
                Download App
              </Link>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3"></div>
                  <div>
                    <div className="h-3 bg-gray-300 rounded w-24 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Open House Event</div>
                <div className="text-lg font-semibold text-gray-900">123 Main Street</div>
                <div className="text-sm text-gray-500">Saturday, 2:00 PM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
