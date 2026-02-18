'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/917013262800?text=Hi%2C%20I%27m%20interested%20in%20your%20blinds%20%26%20furnishing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={26} className="text-white" />
            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </a>
    )
}
