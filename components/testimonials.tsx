'use client'

import { useRef, useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Vamsi Krishna Dola',
    initial: 'V',
    gradient: 'from-primary to-accent',
    content:
      'I recently got curtains, blind doors, mesh, and bamboo blinds installed from Chaitra Blinds, and I\'m extremely satisfied. The quality of materials is excellent and the finishing looks premium. I would especially like to appreciate Mani for his support — he patiently helped me choose the right colors and designs.',
    rating: 5,
  },
  {
    name: 'Manasa R.',
    initial: 'M',
    gradient: 'from-accent to-secondary',
    content:
      'We had a great experience for our home in Narsingi. They provided customised roller blinds and zebra blinds, along with premium blackout curtains and sheer curtains. The measurements were accurate, the installation was clean and timely. 10/10 recommended!',
    rating: 5,
  },
  {
    name: 'Martin',
    initial: 'M',
    gradient: 'from-secondary to-primary',
    content:
      'I found the best window blinds and curtains near me! Affordable pricing with top quality! And their installation is neat and clean.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    initial: 'A',
    gradient: 'from-primary to-secondary',
    content:
      'On time delivery with complete professionalism guys! Everything was handled smoothly from consultation to final installation.',
    rating: 5,
  },
  {
    name: 'T. Anusha',
    initial: 'A',
    gradient: 'from-accent to-primary',
    content:
      'Looking very nice and installed neatly. Very happy with the quality and the team\'s work.',
    rating: 5,
  },
  {
    name: 'Hemakshi Rao',
    initial: 'H',
    gradient: 'from-secondary to-accent',
    content:
      'I found the best vendor for window blinds, curtains and customised wallpaper near me! Thank you Chaitra Blinds for the wonderful service.',
    rating: 5,
  },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId: number
    let scrollPos = 0
    const speed = 0.5

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += speed
        // Reset when halfway through (duplicate content)
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0
        }
        container.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Double the items for infinite scroll illusion
  const items = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Real Reviews</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
              Trusted by homeowners<br />
              <span className="text-gradient">across Hyderabad</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=chaitra+blinds+hyderabad+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
          >
            View all on Google →
          </a>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-4 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-[360px] sm:w-[420px] bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 group"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-foreground/70 leading-relaxed text-sm mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{testimonial.initial}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-foreground/40">Google Review</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
