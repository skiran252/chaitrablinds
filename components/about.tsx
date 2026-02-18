'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background ornament */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10">
              <Image
                src="/images/hero.png"
                alt="Chaitra Blinds craftsmanship — premium blinds and furnishing installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Stats overlay card */}
            <div className="absolute -bottom-8 -right-4 sm:right-8 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-6">
                <CounterStat value={300} suffix="+" label="Happy Homes" visible={visible} />
                <CounterStat value={2018} suffix="" label="Est. Year" visible={visible} isYear />
                <CounterStat value={4.9} suffix="★" label="Google" visible={visible} isDecimal />
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Story</span>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-8 leading-tight">
              Handcrafted comfort for
              <span className="text-gradient"> every home</span>
            </h2>

            <div className="space-y-5 text-foreground/60 text-base leading-relaxed">
              <p>
                What started as a small blinds workshop in Hyderabad has grown into a trusted name in complete home furnishing solutions. Founded in 2018, <strong className="text-foreground">Chaitra Blinds & Furnishings</strong> was built on one simple belief — every space in your home deserves beauty and comfort.
              </p>
              <p>
                Today, we serve homes and offices across Hyderabad with made-to-measure blinds, curtains, wallpapers, mosquito mesh, invisible grills, and interior decor. Every product is custom-crafted, every installation handled by our trained team.
              </p>
            </div>

            {/* USPs */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Made to Measure', desc: 'Every product is custom-built to your exact dimensions — windows, balconies, or open spaces' },
                { title: 'Premium Materials', desc: 'High-quality fabrics and hardware across all products' },
                { title: 'No Middlemen', desc: 'Factory-direct sourcing keeps quality up and prices fair' },
                { title: 'Post-Install Support', desc: 'Free maintenance guidance and responsive after-sales care' },
              ].map((usp) => (
                <div key={usp.title} className="border-l-2 border-accent/40 pl-4 py-2">
                  <h4 className="font-semibold text-foreground text-sm mb-1">{usp.title}</h4>
                  <p className="text-foreground/50 text-xs leading-relaxed">{usp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CounterStat({
  value, suffix, label, visible, isYear = false, isDecimal = false,
}: {
  value: number; suffix: string; label: string; visible: boolean; isYear?: boolean; isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    const target = value
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isYear || isDecimal ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [visible, value, isYear, isDecimal])

  const display = isDecimal
    ? count.toFixed(1)
    : isYear
      ? count.toString()
      : count.toString()

  return (
    <div className="text-center">
      <div className="font-serif text-2xl font-bold text-primary">{display}{suffix}</div>
      <p className="text-xs text-foreground/50 mt-1">{label}</p>
    </div>
  )
}
