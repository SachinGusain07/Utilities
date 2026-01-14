"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add("animate-fade-in-up")
    }
  }, [])

  return (
    <section className="py-16 md:py-24 text-center">
      <div ref={headingRef} className="space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
          Your All-in-One Toolkit
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          40+ free, powerful online tools for text processing, PDF editing, image conversion, calculations, and more.
          Fast, secure, and optimized for productivity.
        </p>
      </div>
    </section>
  )
}
