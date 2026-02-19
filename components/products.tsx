'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const products = [
  {
    name: 'Blinds',
    tagline: 'Roller · Zebra · Wood · Venetian',
    image: '/images/blinds.png',
    badge: 'Most Popular',
  },
  {
    name: 'Curtains',
    tagline: 'Sheer · Blackout · Double-Layer',
    image: '/images/curtains.png',
    badge: null,
  },
  {
    name: 'Wallpapers',
    tagline: '3D · Textured · Custom Prints',
    image: '/images/wallpapers.png',
    badge: null,
  },
  {
    name: 'Mosquito Mesh',
    tagline: 'Pleated · Sliding · Retractable',
    image: '/images/mosquito-mesh.png',
    badge: null,
  },
  {
    name: 'Invisible Grills',
    tagline: 'Balcony · French Window · Child-Safe',
    image: '/images/invisible-grills.png',
    badge: 'Safety First',
  },
  {
    name: 'Home Decor',
    tagline: 'Sofa Fabrics · Cushions · Accessories',
    image: '/images/home-decor.png',
    badge: null,
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="products" className="py-24 sm:py-32 bg-muted/30 fabric-texture relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Products</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
              Everything your<br />spaces need
            </h2>
          </div>
          <p className="text-foreground/50 max-w-md text-lg leading-relaxed">
            Six product lines, 500+ options, one team that does it all — for windows, balconies, open areas & more.
          </p>
        </div>

        {/* Window-frame product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Window frame container */}
              <div className="window-frame group overflow-hidden bg-muted/50">
                {/* Product image inside the "window" */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} by Chaitra Blinds — premium ${product.name.toLowerCase()} for your space`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-accent text-accent-foreground px-5 py-2 rounded-lg font-semibold text-sm shadow-lg">
                      Explore →
                    </span>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-7 right-2 z-10 bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-md">
                      {product.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Product info below the window frame */}
              <div className="mt-4 px-1">
                <h3 className="font-serif text-xl font-bold text-foreground">{product.name}</h3>
                <p className="text-foreground/50 text-sm mt-1">{product.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          <div className="relative px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
                Need help choosing?
              </h3>
              <p className="text-primary-foreground/70 text-base max-w-lg">
                We bring 500+ fabric samples to your doorstep. Free consultation, free measurement.
              </p>
            </div>
            <a
              href="https://wa.me/917013262800?text=Hi%2C%20I%20need%20a%20custom%20quote%20for%20my%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
