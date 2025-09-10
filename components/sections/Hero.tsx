import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-blue-600 py-20">
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
          <div className="relative hidden lg:block">
            {/* Mobile App Preview */}
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                  <div className="text-xs font-semibold text-gray-900">9:41</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-900">100%</div>
                </div>
                
                {/* App Header */}
                <div className="px-6 py-4 bg-blue-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">VisitHome</h3>
                      <p className="text-blue-100 text-sm">Find Open Houses</p>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Search Bar */}
                <div className="px-6 py-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search by location..." 
                      className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      readOnly
                    />
                    <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Event Cards */}
                <div className="px-6 space-y-3 pb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">Modern Family Home</h4>
                        <p className="text-gray-600 text-xs">123 Oak Street, Downtown</p>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Today
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      2:00 PM - 4:00 PM
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">$850,000 • 3 bed, 2 bath</div>
                      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-lg">
                        Book
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">Luxury Condo</h4>
                        <p className="text-gray-600 text-xs">456 Pine Avenue, Uptown</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Tomorrow
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      1:00 PM - 3:00 PM
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">$1,200,000 • 2 bed, 2 bath</div>
                      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-lg">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Web App Preview - Floating Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-6 w-80 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dashboard</h3>
                  <p className="text-sm text-gray-600">Real Estate Professional</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Active Events</div>
                    <div className="text-xs text-gray-600">3 scheduled today</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">3</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Total Bookings</div>
                    <div className="text-xs text-gray-600">This month</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">24</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Lead Conversion</div>
                    <div className="text-xs text-gray-600">Last 30 days</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">68%</div>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                Create New Event
              </button>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="absolute top-20 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
