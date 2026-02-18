import Link from 'next/link'
import Image from 'next/image'

const productLinks = [
  { label: 'Roller Blinds', href: '#products' },
  { label: 'Zebra Blinds', href: '#products' },
  { label: 'Curtains', href: '#products' },
  { label: 'Wallpapers', href: '#products' },
  { label: 'Mosquito Mesh', href: '#products' },
  { label: 'Invisible Grills', href: '#products' },
]

const quickLinks = [
  { label: 'How We Work', href: '#services' },
  { label: 'Our Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground relative overflow-hidden">
      {/* Decorative gradient strip at top */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src="/images/logo.png"
                alt="Chaitra Blinds & Furnishings"
                width={180}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Custom blinds, curtains & furnishing solutions for windows, balconies, open spaces & more — bringing comfort and elegance to every home in Hyderabad.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/chaitrabambooblinds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" fillOpacity={0.6}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/chaitra_blinds/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" fillOpacity={0.6}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://www.youtube.com/@Chaitrablinds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" fillOpacity={0.6}><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+917013262800" className="text-accent hover:text-accent/80 transition-colors">
                  +91 70132 62800
                </a>
              </li>
              <li>
                <a href="mailto:chaitrablinds@gmail.com" className="text-white/40 hover:text-accent transition-colors break-all">
                  chaitrablinds@gmail.com
                </a>
              </li>
              <li className="text-white/40">
                Hyderabad, Telangana
              </li>
              <li className="text-white/40">
                Mon – Sat: 9 AM – 7 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2026 Chaitra Blinds & Furnishings. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-white/30 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
