import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductFeatures from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProductFeatures />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
