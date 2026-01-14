"use client"

import { memo, useEffect, useRef } from "react"
import ToolCard from "./ToolCard"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CategorySection = memo(function CategorySection({ id, title, tools }) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id={id} className="py-16 md:py-20" ref={sectionRef}>
      <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-balance">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={tool.id} ref={(el) => (cardsRef.current[index] = el)}>
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </section>
  )
})

export default CategorySection
