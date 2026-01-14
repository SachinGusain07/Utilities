"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Zap } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export default function Hero() {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonsRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        statsRef.current?.querySelectorAll(".stat-item"),
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
        Your Complete <span className="gradient-text">Toolkit</span> for Online Productivity
      </h1>

      <p ref={descRef} className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
        20+ free, powerful online tools for text processing, image conversion, financial calculations, security
        encoding, and more. Designed for speed, accuracy, and ease of use. All tools work offline in your browser.
      </p>

      <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-20">
        <Link href="/#text-tools" className="btn-primary inline-flex items-center justify-center gap-2">
          Explore Tools <ArrowRight size={20} />
        </Link>
        <a href="#features" className="btn-secondary inline-flex items-center justify-center gap-2">
          <Zap size={20} /> See Features
        </a>
      </div>

      <div ref={statsRef} className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center max-w-3xl">
        <div className="stat-item">
          <div className="text-4xl font-bold gradient-text">20+</div>
          <div className="text-sm text-muted-foreground mt-2">Free Tools</div>
        </div>
        <div className="stat-item">
          <div className="text-4xl font-bold gradient-text">100%</div>
          <div className="text-sm text-muted-foreground mt-2">Private</div>
        </div>
        <div className="stat-item">
          <div className="text-4xl font-bold gradient-text">Instant</div>
          <div className="text-sm text-muted-foreground mt-2">Processing</div>
        </div>
      </div>
    </section>
  )
}
