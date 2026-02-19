'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with the form data pre-filled
    const text = `Hi, I'm ${formData.name}.%0A%0A${formData.message}%0A%0APhone: ${formData.phone}`
    window.open(`https://wa.me/917013262800?text=${encodeURIComponent(text.replace(/%0A/g, '\n'))}`, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call / WhatsApp',
      content: '+91 70132 62800',
      href: 'tel:+917013262800',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'chaitrablinds@gmail.com',
      href: 'mailto:chaitrablinds@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Alkapur Township, Manikonda, Hyderabad',
      href: 'https://maps.app.goo.gl/tAnYU3EDyWibjTfr6',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Open Daily: 9 AM – 10 PM',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden" itemScope itemType="https://schema.org/HomeAndConstructionBusiness">
      <meta itemProp="name" content="Chaitra Blinds & Furnishings" />
      <meta itemProp="telephone" content="+917013262800" />
      <meta itemProp="email" content="chaitrablinds@gmail.com" />
      {/* Background ornament */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
            Let&apos;s transform
            <span className="text-gradient"> your space</span>
          </h2>
          <p className="text-foreground/50 mt-4 text-lg leading-relaxed">
            Book a free site visit or just say hello. We respond within 2 hours on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact info + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon
              const className = "flex items-start gap-4 p-4 rounded-xl hover:bg-card hover:shadow-sm transition-all duration-300 group cursor-pointer"
              const content = (
                <>
                  <div className="w-11 h-11 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.content}</p>
                  </div>
                </>
              )
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={item.title} className={className}>
                  {content}
                </div>
              )
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917013262800?text=Hi%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 mt-4"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* Social links */}
            <div className="pt-4 border-t border-border/50">
              <h3 className="font-semibold text-foreground text-sm mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/chaitrabambooblinds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-all text-foreground/60"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a
                  href="https://www.instagram.com/chaitra_blinds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-all text-foreground/60"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a
                  href="https://www.youtube.com/@Chaitrablinds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-all text-foreground/60"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            {/* Google Maps embed — local SEO signal */}
            <div className="mt-4 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.3767438!3d17.3931404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95e7f751bc2b%3A0x5688c35495b91f57!2sChaitra%20Blinds%20Home%20Furnishing!5e0!3m2!1sen!2sin!4v1708300000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chaitra Blinds & Furnishings location - Hyderabad, Telangana"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Request a Free Quote</h3>
              <p className="text-foreground/50 text-sm mb-8">Fill in the basics — we&apos;ll get back to you within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-foreground/70 mb-2 uppercase tracking-wide">
                    Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-sm appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Blinds (Roller, Zebra, Venetian, Bamboo)">Blinds</option>
                    <option value="Curtains (Blackout, Sheer, Ripple)">Curtains</option>
                    <option value="Wallpapers">Wallpapers</option>
                    <option value="Mosquito Mesh Doors">Mosquito Mesh</option>
                    <option value="Invisible Grills">Invisible Grills</option>
                    <option value="Home Decor & Furnishings">Home Decor</option>
                    <option value="Multiple products / Full home">Full Home Package</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/85 text-primary-foreground py-4 rounded-xl hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-foreground/40 text-center">
                  Opens WhatsApp with your details pre-filled. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
