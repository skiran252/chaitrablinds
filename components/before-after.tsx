'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export default function BeforeAfter() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        setPosition((x / rect.width) * 100)
    }, [])

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        setIsDragging(true)
        updatePosition(e.clientX)
            ; (e.target as HTMLElement).setPointerCapture(e.pointerId)
    }, [updatePosition])

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging) return
        updatePosition(e.clientX)
    }, [isDragging, updatePosition])

    const handlePointerUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    const beforeImage = '/images/before.png'
    const afterImage = '/images/after.png'

    return (
        <section className="py-24 sm:py-32 bg-background fabric-texture">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                        See The Difference
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 leading-tight">
                        Before & after<br />
                        <span className="text-gradient">our magic</span>
                    </h2>
                    <p className="text-foreground/50 mt-4 text-lg max-w-xl mx-auto">
                        Drag the slider to see how our custom blinds transform a space.
                    </p>
                </div>

                {/* Before/After Slider */}
                <div
                    ref={containerRef}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ touchAction: 'none', aspectRatio: '16/9' }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    role="slider"
                    aria-label="Before and after comparison slider"
                    aria-valuenow={Math.round(position)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    {/* AFTER — original image (full, vibrant, warm) */}
                    <Image
                        src={afterImage}
                        alt="Room after Chaitra Blinds installation — warm, elegant, and well-appointed"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />

                    {/* "AFTER" label */}
                    <div className="absolute top-4 right-4 z-10 bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                        After
                    </div>

                    {/* BEFORE — same image but desaturated, high-contrast, cool-toned (harsh sunlight look) */}
                    <div
                        className="absolute inset-0 z-[1] overflow-hidden"
                        style={{ width: `${position}%` }}
                    >
                        <div className="relative w-full h-full" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}>
                            <Image
                                src={beforeImage}
                                alt="Room before blinds installation — bare windows without any treatment"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                            {/* No overlay needed — real before photo */}
                        </div>

                        {/* "BEFORE" label */}
                        <div className="absolute top-4 left-4 z-10 bg-foreground/80 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                            Before
                        </div>
                    </div>

                    {/* Drag handle */}
                    <div
                        className="absolute top-0 bottom-0 z-[2] pointer-events-none"
                        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="w-[3px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto">
                            <MoveHorizontal size={20} className="text-foreground/70" />
                        </div>
                    </div>
                </div>

                {/* Hint text */}
                <p className="text-center text-foreground/30 text-sm mt-4">
                    ← Drag to compare →
                </p>
            </div>
        </section>
    )
}
