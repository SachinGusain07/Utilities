"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import Logo from "./Logo"
import { useTheme } from "./theme-provider"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const categories = useMemo(
    () => [
      { name: "Text Tools", href: "/#text-tools" },
      { name: "Image Tools", href: "/#image-tools" },
      { name: "Calculators", href: "/#calculators" },
      { name: "Security", href: "/#security-tools" },
    ],
    [],
  )

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 absolute md:relative top-full md:top-0 left-0 md:left-auto right-0 md:right-auto w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 border-border p-4 md:p-0`}
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-lg border border-border bg-muted p-2 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}
