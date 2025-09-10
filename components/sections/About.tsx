import Image from 'next/image'

export default function About() {
  const stats = [
    { number: '500+', label: 'Real Estate Professionals' },
    { number: '1000+', label: 'Open House Events' },
    { number: '50+', label: 'Cities Served' }
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About VisitHome
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              VisitHome was born from a simple observation: real estate professionals were spending 
              too much time on administrative tasks and not enough time connecting with potential buyers. 
              We set out to create a solution that would revolutionize the Open House experience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our platform combines the best of modern technology with deep understanding of real estate 
              workflows. We're not just another scheduling tool – we're a complete ecosystem designed 
              to maximize your success in property showings and lead generation.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Built for Real Estate</h4>
                  <p className="text-gray-600 text-sm">Designed specifically for real estate professionals and their unique needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">User-Centric Design</h4>
                  <p className="text-gray-600 text-sm">Intuitive interfaces for both professionals and buyers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Innovation</h4>
                  <p className="text-gray-600 text-sm">Regular updates based on user feedback and industry trends.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/VisitHome__03_Badge_Gradient.png"
              alt="VisitHome App"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
