export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'VisitHome transformed our outdated kitchen into a modern masterpiece. The team was professional and exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'The smart home installation was flawless. Our home is now more efficient and secure.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      content: 'As a designer myself, I was impressed by VisitHome\'s attention to detail and creative solutions.'
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's what our satisfied clients have to say about their experience with VisitHome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.content}"
              </blockquote>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
