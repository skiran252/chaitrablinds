import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8 w-fit">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground/70">4.9★ on Google · 300+ Homes</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Beautiful Spaces{' '}
              <span className="text-gradient">Begin</span> with
              <br className="hidden sm:block" />
              {' '}the Right Touch
            </h1>

            <p className="text-lg text-foreground/60 mb-10 leading-relaxed max-w-lg">
              Custom blinds, curtains, wallpapers & furnishing solutions for every space — windows, balconies, open areas & more. Made-to-measure, all under one roof. Serving Hyderabad since&nbsp;2018.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917013262800?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20site%20visit%20for%20blinds%20%26%20furnishings."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary/85 text-primary-foreground px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-primary/15 transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 text-base"
              >
                Book Free Site Visit <ArrowRight size={18} />
              </a>
              <a
                href="#products"
                className="border-2 border-border text-foreground px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 font-semibold text-center text-base"
              >
                Explore Products
              </a>
            </div>

            {/* Inline trust stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/50">Free Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/50">Expert Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/50">Premium Materials</span>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative animate-slide-in-right delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10">
              <Image
                src="/images/hero.png"
                alt="Luxurious modern living room with premium roller blinds and warm golden sunlight"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Floating review snippet */}
            <div className="absolute -bottom-6 -left-6 sm:left-6 bg-card border border-border rounded-xl p-4 shadow-xl max-w-[260px] animate-float">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed italic">
                "The quality of materials is excellent and the finishing looks premium."
              </p>
              <p className="text-xs font-semibold text-foreground mt-1">— Vamsi Krishna D.</p>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Curved section separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-12 text-muted/50">
          <path d="M0 48h1440V24C1200 4 960 0 720 12 480 24 240 44 0 24v24z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
