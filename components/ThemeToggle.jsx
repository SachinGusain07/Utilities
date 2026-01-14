"use client"

import { useState, useEffect } from "react"
import { toggleTheme, getTheme } from "@/lib/theme"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  const handleToggle = () => {
    const newTheme = toggleTheme()
    setTheme(newTheme)
  }

  if (!theme) return null

  return (
    <button
      onClick={handleToggle}
      className="rounded-lg border border-border bg-muted p-2 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}
