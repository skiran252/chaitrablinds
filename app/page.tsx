import Header from '@/components/header'
import Hero from '@/components/hero'
import SlatDivider from '@/components/slat-divider'
import Services from '@/components/services'
import BeforeAfter from '@/components/before-after'
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
      <SlatDivider />
      <Services />
      <SlatDivider />
      <BeforeAfter />
      <SlatDivider />
      <Products />
      <SlatDivider />
      <About />
      <SlatDivider />
      <Testimonials />
      <SlatDivider />
      <FAQ />
      <SlatDivider />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
