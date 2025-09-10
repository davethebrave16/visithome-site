export default function ProductFeatures() {
  const features = [
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
      title: 'Appointment Scheduling',
      description: 'Flexible scheduling system supporting both individual and group appointments with custom time slots.',
      icon: '📅'
    },
    {
      title: 'Buyer Portal',
      description: 'Dedicated interface for potential buyers to browse events, book appointments, and complete pre-qualification.',
      icon: '👥'
    },
    {
      title: 'Lead Management',
      description: 'Track and manage leads with built-in CRM features and automated follow-up capabilities.',
      icon: '🎯'
    },
    {
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works perfectly on all devices for both professionals and buyers.',
      icon: '📱'
    }
  ]

  return (
    <section id="product" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Open House Management Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From event creation to lead conversion, VisitHome provides everything you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Open House Process?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join the waitlist and be among the first to experience the future of real estate events.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
