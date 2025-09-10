import Image from 'next/image'

export default function About() {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' }
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
              Founded with a passion for creating beautiful, functional homes, VisitHome has been 
              transforming living spaces for over 5 years. Our team of skilled professionals 
              combines creativity with technical expertise to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe that every home tells a story, and we're here to help you write yours. 
              From initial concept to final touches, we work closely with you to bring your 
              vision to life.
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

            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <Image
              src="/VisitHome__03_Badge_Gradient.png"
              alt="VisitHome Team"
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
