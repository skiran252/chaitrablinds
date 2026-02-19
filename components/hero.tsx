'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Star, ArrowDown } from 'lucide-react'

const SLAT_COUNT = 10

export default function Hero() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    // Trigger blind-reveal after a short delay
    const timer = setTimeout(() => setRevealed(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Beautiful living room with custom blinds and curtains by Chaitra Blinds & Furnishings, Hyderabad"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      {/* Blind-reveal overlay — horizontal slats that slide away */}
      <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true">
        {Array.from({ length: SLAT_COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 bg-[oklch(0.20_0.01_250)]"
            style={{
              top: `${(i / SLAT_COUNT) * 100}%`,
              height: `${100 / SLAT_COUNT + 0.5}%`,
              transform: revealed ? `translateX(${i % 2 === 0 ? '105%' : '-105%'})` : 'translateX(0)',
              transition: `transform 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${i * 80}ms`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div
          className="max-w-2xl py-32 transition-all duration-1000"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '600ms',
          }}
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">5.0★ rated on Google Maps</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Crafted for
            <br />
            <span className="text-accent">every space</span>
            <br />
            you love
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Custom blinds, curtains, wallpapers & home décor — expertly measured and installed
            across Hyderabad. From windows to balconies and open areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/917013262800?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20site%20visit%20for%20blinds%20%26%20furnishings."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-base transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Book Free Visit
            </a>
            <a
              href="#products"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-base hover:bg-white/10 transition-all duration-300"
            >
              View Products
            </a>
          </div>

          {/* Quick review snippet */}
          <div
            className="mt-12 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-sm"
            style={{
              opacity: revealed ? 1 : 0,
              transition: 'opacity 0.8s ease',
              transitionDelay: '1.2s',
            }}
          >
            <p className="text-white/60 text-sm italic leading-relaxed">
              &ldquo;Best quality blinds in Hyderabad. Professional installation and
              very reasonable pricing.&rdquo;
            </p>
            <p className="text-accent text-xs font-semibold mt-2">— Priya R., Google Review</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
        style={{
          opacity: revealed ? 1 : 0,
          transition: 'opacity 1s ease',
          transitionDelay: '1.5s',
        }}
      >
        <a href="#services" className="text-white/50 hover:text-white/80 transition-colors" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
