'use client'

import { useRef, useEffect, useState } from 'react'
import { Phone, Palette, Ruler, Wrench } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Book a Free Visit',
    description: 'We come to your doorstep with 500+ fabric samples, color swatches, and expert advice.',
    detail: 'Same-day booking available',
    accent: 'from-accent to-accent/60',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Choose & Customize',
    description: 'Pick your style, material, and color. Every product is made-to-measure — never off-the-shelf.',
    detail: '500+ fabrics & styles',
    accent: 'from-primary to-primary/60',
  },
  {
    icon: Ruler,
    number: '03',
    title: 'Precision Measurement',
    description: 'Our technicians measure every opening — windows, balconies, doorways — to the millimeter.',
    detail: 'Perfect fit guaranteed',
    accent: 'from-secondary to-secondary/60',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Expert Installation',
    description: 'Trained professionals install everything with meticulous attention. Clean, quick, flawless.',
    detail: 'Done in 2-4 hours',
    accent: 'from-accent to-primary',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate through steps
  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [visible])

  return (
    <section ref={sectionRef} id="services" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background: faint blind-line pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-[2px] bg-foreground"
            style={{ marginTop: `${i * 5}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
            From your first call to<br />
            <span className="text-gradient">flawless finish</span>
          </h2>
          <p className="text-foreground/50 mt-4 text-lg max-w-md mx-auto">
            Four simple steps. No hidden costs, no surprises.
          </p>
        </div>

        {/* Interactive process display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Step selector */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index
              return (
                <button
                  key={step.number}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group relative overflow-hidden ${isActive
                      ? 'bg-card shadow-lg shadow-foreground/5 border border-border'
                      : 'hover:bg-muted/50 border border-transparent'
                    } ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.accent} rounded-l-2xl`} />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                        ? `bg-gradient-to-br ${step.accent} text-white`
                        : 'bg-muted text-foreground/40'
                      }`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold tracking-wider ${isActive ? 'text-accent' : 'text-foreground/30'}`}>
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className={`font-serif font-bold text-lg transition-colors ${isActive ? 'text-foreground' : 'text-foreground/60'}`}>
                        {step.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-24 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-foreground/50 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Visual highlight card */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative">
              {/* Big number background */}
              <div className="absolute -top-8 -right-4 font-serif text-[180px] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
                {steps[activeStep].number}
              </div>

              <div className={`bg-gradient-to-br ${steps[activeStep].accent} rounded-3xl p-10 sm:p-14 transition-all duration-500 relative overflow-hidden`}>
                {/* Decorative blind lines inside the card */}
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[1px] bg-white"
                      style={{ marginTop: `${12 + i * 10}%` }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                    {(() => {
                      const Icon = steps[activeStep].icon
                      return <Icon size={30} className="text-white" />
                    })()}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {steps[activeStep].description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">{steps[activeStep].detail}</span>
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-6">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === i ? 'w-8 bg-accent' : 'w-1.5 bg-foreground/15 hover:bg-foreground/30'
                      }`}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
