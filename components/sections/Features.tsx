export default function Features() {
  const features = [
    {
      title: 'Home Design',
      description: 'Transform your space with innovative design solutions tailored to your lifestyle.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project meets our high standards with comprehensive quality checks.'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect your time with efficient project management and on-time completion.'
    },
    {
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience to every project.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Get exceptional value with transparent pricing and no hidden costs.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address any concerns you may have.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose VisitHome?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional home solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
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
