'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'How We Work' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'glass border-b border-border/50 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Chaitra Blinds & Furnishings"
              width={200}
              height={55}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917013262800"
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              +91 70132 62800
            </a>
            <a
              href="https://wa.me/917013262800?text=Hi%2C%20I%27m%20interested%20in%20your%20blinds%20%26%20furnishing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile: phone + menu */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+917013262800"
              className="flex items-center gap-1 text-sm font-semibold text-foreground/80"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">+91 70132 62800</span>
            </a>
            <button
              className="p-2 hover:bg-muted rounded-xl transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setIsOpen(false)} />
          <div
            className={`absolute right-0 top-0 h-full w-72 bg-background border-l border-border shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-3 rounded-lg hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/917013262800?text=Hi%2C%20I%27m%20interested%20in%20your%20blinds%20%26%20furnishing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold text-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+917013262800"
                className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                +91 70132 62800
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
