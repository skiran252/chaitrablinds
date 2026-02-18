import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
