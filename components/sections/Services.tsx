export default function ProductFeatures() {
  const webAppFeatures = [
    {
      title: 'Professional Dashboard',
      description: 'Complete control over your Open House events with an intuitive interface designed for real estate professionals.',
      icon: '📊'
    },
    {
      title: 'Event Builder',
      description: 'Create stunning event listings with photos, descriptions, and all the details buyers need to know.',
      icon: '🏠'
    },
    {
      title: 'Lead Management',
      description: 'Track and manage leads with built-in CRM features and automated follow-up capabilities.',
      icon: '🎯'
    }
  ]

  const mobileAppFeatures = [
    {
      title: 'Event Discovery',
      description: 'Browse and search for Open House events near you with detailed property information and photos.',
      icon: '🔍'
    },
    {
      title: 'Easy Booking',
      description: 'Book appointments with just a few taps and receive instant confirmation with calendar integration.',
      icon: '📅'
    },
    {
      title: 'Real-time Updates',
      description: 'Get notifications about event changes, reminders, and new opportunities that match your criteria.',
      icon: '🔔'
    }
  ]

  return (
    <section id="product" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Open House Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dual-platform system creates a seamless connection between real estate professionals 
            and potential buyers, streamlining the entire Open House process.
          </p>
        </div>

        {/* Web App Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Application</h3>
            <p className="text-gray-600">For Real Estate Professionals - Create, manage, and optimize your events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webAppFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile Application</h3>
            <p className="text-gray-600">For Potential Buyers - Discover and book Open House events on the go</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileAppFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Estate Professionals</h4>
              <p className="text-gray-600">Create and publish Open House events using our web application with detailed property information and scheduling options.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Potential Buyers</h4>
              <p className="text-gray-600">Discover nearby events through our mobile app, view property details, and book appointments that fit their schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Seamless Connection</h4>
              <p className="text-gray-600">Both parties stay connected through real-time updates, automated confirmations, and integrated communication tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
