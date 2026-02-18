'use client'

import { useState } from 'react'

const faqs = [
    {
        question: 'What types of blinds does Chaitra Blinds offer in Hyderabad?',
        answer:
            'We offer roller blinds, zebra blinds, wooden blinds, venetian blinds, blackout blinds, and motorized blinds. All our blinds are custom-made to your exact measurements and available in 200+ fabric options.',
    },
    {
        question: 'Do you provide free site visits and measurement?',
        answer:
            'Yes! We provide completely free site visits with fabric samples and color swatches. Our technicians measure every opening down to the millimeter to ensure a perfect fit.',
    },
    {
        question: 'What areas in Hyderabad do you serve?',
        answer:
            'We serve all areas across Hyderabad and Secunderabad including Banjara Hills, Jubilee Hills, Gachibowli, Hitech City, Kondapur, Madhapur, Kukatpally, Miyapur, ECIL, Uppal, Dilsukhnagar, LB Nagar, and more.',
    },
    {
        question: 'How long does installation take?',
        answer:
            'Product fabrication typically takes 5-7 working days after order confirmation. Installation itself is usually completed within 2-4 hours depending on the number of openings and product type.',
    },
    {
        question: 'Do you offer warranty on your products?',
        answer:
            'Yes, all our products come with a manufacturer warranty. We also provide free post-installation support and maintenance guidance to ensure your products last for years.',
    },
    {
        question: 'What is the price range for blinds and curtains?',
        answer:
            'Our blinds start from ₹150 per sq ft and curtains from ₹100 per sq ft depending on the fabric and style chosen. We offer options for every budget without compromising on quality. Contact us for a free quote.',
    },
    {
        question: 'Can I get blinds for balconies and open spaces?',
        answer:
            'Absolutely! We specialize in blinds for balconies, French windows, large openings, and outdoor spaces. We offer weather-resistant options like PVC and outdoor roller blinds that are perfect for these applications.',
    },
    {
        question: 'Do you install mosquito mesh and invisible grills?',
        answer:
            'Yes, we offer professional installation of mosquito mesh for doors and windows (sliding, pleated, and retractable options) and invisible safety grills for balconies and terraces — all custom-fitted to your space.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 sm:py-32 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                        Common Questions
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
                        Frequently Asked<br />
                        <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-foreground/50 mt-4 text-lg leading-relaxed max-w-xl mx-auto">
                        Everything you need to know about our products and services.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="font-semibold text-foreground text-base pr-4">
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-accent text-accent-foreground' : ''
                                            }`}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <p className="px-6 pb-5 text-foreground/60 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
