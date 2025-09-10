export default function Features() {
  const realEstateFeatures = [
    {
      title: 'Event Creation & Management',
      description: 'Create professional Open House listings with photos, descriptions, and all essential details. Manage multiple events from one dashboard.',
      platform: 'Web App'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Handle both single and group appointments with customizable duration and participant limits. Set availability and manage bookings.',
      platform: 'Web App'
    },
    {
      title: 'Lead Management & CRM',
      description: 'Track potential buyers, manage leads, and follow up with automated workflows. Pre-qualify buyers with custom questionnaires.',
      platform: 'Web App'
    },
    {
      title: 'Analytics & Insights',
      description: 'Get detailed analytics on event performance, attendance rates, lead quality, and conversion metrics to optimize your strategy.',
      platform: 'Web App'
    }
  ]

  const buyerFeatures = [
    {
      title: 'Event Discovery',
      description: 'Browse nearby Open House events with detailed property information, photos, and agent details. Filter by location, date, and price.',
      platform: 'Mobile App'
    },
    {
      title: 'Easy Booking',
      description: 'Book appointments with just a few taps. Choose your preferred time slot and receive instant confirmation with calendar integration.',
      platform: 'Mobile App'
    },
    {
      title: 'Pre-qualification',
      description: 'Complete quick pre-qualification forms to help agents understand your needs and ensure you get the most relevant property information.',
      platform: 'Mobile App'
    },
    {
      title: 'Real-time Updates',
      description: 'Receive notifications about event changes, reminders, and new opportunities. Stay informed about your booked appointments.',
      platform: 'Mobile App'
    }
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Two Platforms, One Complete Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VisitHome provides specialized tools for both real estate professionals and potential buyers, 
            creating a seamless connection between property listings and interested buyers.
          </p>
        </div>

        {/* Real Estate Features */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">For Real Estate Professionals</h3>
            <p className="text-gray-600">Web Application - Complete event management and lead tracking</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realEstateFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {feature.platform}
                  </span>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buyer Features */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">For Potential Buyers</h3>
            <p className="text-gray-600">Mobile Application - Discover and book Open House events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyerFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {feature.platform}
                  </span>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
