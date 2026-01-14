"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function CategorySection({ id, title, tools }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".tool-card")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-fade-in-up")
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className="py-12 md:py-16 space-y-8" ref={sectionRef}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.id}>
            <div className="tool-card card-tool cursor-pointer group opacity-0">
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{tool.title}</h3>
              <p className="text-foreground/70 mb-4 text-sm">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
