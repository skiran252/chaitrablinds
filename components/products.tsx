'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

const products = [
  {
    name: 'Blinds',
    tagline: 'Roller · Zebra · Venetian · Bamboo · PVC',
    image: '/images/blinds.png',
    badge: 'Most Popular',
    span: 'lg:row-span-2',
  },
  {
    name: 'Curtains',
    tagline: 'Blackout · Sheer · Ripple · Pleated',
    image: '/images/curtains.png',
    badge: null,
    span: '',
  },
  {
    name: 'Wallpapers',
    tagline: 'Textured · Floral · Custom Printed',
    image: '/images/wallpapers.png',
    badge: null,
    span: '',
  },
  {
    name: 'Mosquito Mesh',
    tagline: 'Pleated · Sliding · Retractable',
    image: '/images/mosquito-mesh.png',
    badge: null,
    span: '',
  },
  {
    name: 'Invisible Grills',
    tagline: 'Balcony · French Window · Child-Safe',
    image: '/images/invisible-grills.png',
    badge: null,
    span: '',
  },
  {
    name: 'Home Decor',
    tagline: 'Sofa Fabrics · Cushions · Accessories',
    image: '/images/home-decor.png',
    badge: null,
    span: '',
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
    <section ref={sectionRef} id="products" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Products</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
              Everything your<br />spaces need
            </h2>
          </div>
          <p className="text-foreground/50 max-w-md text-lg leading-relaxed">
            Six product lines, 500+ options, one team that does it all — blinds & curtains for windows, balconies & open areas, plus wallpapers, grills & decor.
          </p>
        </div>

        {/* Product Grid — asymmetric masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${product.span} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.name} by Chaitra Blinds`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-all duration-500 group-hover:from-foreground/90" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  {product.badge}
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-white/70 text-sm mb-4">{product.tagline}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Explore options</span>
                  <span>→</span>
                </div>
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
                Need something custom?
              </h3>
              <p className="text-primary-foreground/70 text-base">
                Custom sizes, colors, motorization — we build it exactly the way you want it.
              </p>
            </div>
            <a
              href="https://wa.me/917013262800?text=Hi%2C%20I%20need%20a%20custom%20quote%20for%20my%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
