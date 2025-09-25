import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ProductFeatures from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

export default function Home() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      <Hero />
      <Features />
      <ProductFeatures />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
