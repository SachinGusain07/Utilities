"use client"

import { useState, useEffect } from "react"
import Link from "next/link"


export default function Navigation({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-card shadow-lg border-b border-border" : "bg-background"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-accent">
          Utilities
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#text-tools" className="hover:text-accent transition-colors">
            Text
          </Link>
          <Link href="#pdf-tools" className="hover:text-accent transition-colors">
            PDF
          </Link>
          <Link href="#image-tools" className="hover:text-accent transition-colors">
            Image
          </Link>
          <Link href="#calculators" className="hover:text-accent transition-colors">
            Calc
          </Link>
          <button onClick={toggleTheme} className="btn-secondary px-4 py-2 rounded-lg">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="md:hidden flex gap-4 items-center">
          <button onClick={toggleTheme} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link href="#text-tools" onClick={() => setIsOpen(false)}>
              Text Tools
            </Link>
            <Link href="#pdf-tools" onClick={() => setIsOpen(false)}>
              PDF Tools
            </Link>
            <Link href="#image-tools" onClick={() => setIsOpen(false)}>
              Image Tools
            </Link>
            <Link href="#calculators" onClick={() => setIsOpen(false)}>
              Calculators
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
