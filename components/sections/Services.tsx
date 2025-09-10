export default function Services() {
  const services = [
    {
      title: 'Interior Design',
      description: 'Transform your living spaces with our expert interior design services.',
      price: 'Starting at $2,500'
    },
    {
      title: 'Home Renovation',
      description: 'Complete home makeovers with our renovation services.',
      price: 'Starting at $15,000'
    },
    {
      title: 'Maintenance Services',
      description: 'Keep your home in perfect condition with our maintenance services.',
      price: 'Starting at $150/month'
    },
    {
      title: 'Smart Home Solutions',
      description: 'Modernize your home with cutting-edge smart technology.',
      price: 'Starting at $3,000'
    },
    {
      title: 'Landscaping & Outdoor',
      description: 'Create stunning outdoor spaces that complement your home.',
      price: 'Starting at $5,000'
    },
    {
      title: 'Consultation Services',
      description: 'Get expert advice on your home projects.',
      price: 'Starting at $200/hour'
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive home solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-blue-600 font-semibold mb-4">
                {service.price}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
