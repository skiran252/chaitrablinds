'use client'

import { useRef, useEffect, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Book a Free Visit',
    description: 'We come to your doorstep with fabric samples, color swatches, and expert advice tailored to your space.',
    accent: 'from-primary/20 to-accent/10',
  },
  {
    number: '02',
    title: 'Choose & Customize',
    description: 'Pick from 500+ materials, colors and styles. Every product is made-to-measure, never off-the-shelf.',
    accent: 'from-accent/20 to-secondary/10',
  },
  {
    number: '03',
    title: 'Precision Measurement',
    description: 'Our technicians measure every opening — windows, balconies, doorways — down to the millimeter. Perfect fit, guaranteed.',
    accent: 'from-secondary/20 to-primary/10',
  },
  {
    number: '04',
    title: 'Expert Installation',
    description: 'Trained professionals install everything with meticulous attention to detail. Clean, quick, flawless.',
    accent: 'from-primary/20 to-secondary/10',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">The Process</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
            From your first call to
            <br />
            <span className="text-gradient">flawless finish</span>
          </h2>
          <p className="text-foreground/50 mt-4 text-lg leading-relaxed">
            Four simple steps. No hidden costs, no surprises.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-border to-border/30 z-0" />
              )}

              <div className="relative p-8 rounded-2xl hover:bg-card hover:shadow-lg hover:shadow-foreground/5 transition-all duration-500 border border-transparent hover:border-border">
                {/* Step number */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="font-serif text-2xl font-bold text-primary">{step.number}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/50 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
