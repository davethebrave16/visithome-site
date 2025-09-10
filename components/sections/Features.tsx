export default function Features() {
  const features = [
    {
      title: 'Event Creation',
      description: 'Create professional Open House listings with photos, descriptions, and all essential details in minutes.'
    },
    {
      title: 'Appointment Management',
      description: 'Handle both single and group appointments with customizable duration and participant limits.'
    },
    {
      title: 'Pre-qualification Forms',
      description: 'Screen potential buyers with custom questionnaires to ensure quality leads.'
    },
    {
      title: 'Dual Interface',
      description: 'Separate dashboards for real estate professionals and buyers for optimal user experience.'
    },
    {
      title: 'Calendar Integration',
      description: 'Sync with your existing calendar tools and manage multiple events effortlessly.'
    },
    {
      title: 'Analytics & Insights',
      description: 'Track event performance, attendance rates, and lead quality with detailed analytics.'
    }
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Real Estate Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and optimize your Open House events in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
