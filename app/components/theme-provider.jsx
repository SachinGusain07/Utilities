"use client"

import { useEffect, useState } from "react"

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("toolnest-theme") || "light"
    setTheme(savedTheme)

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("toolnest-theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return <>{children(theme, toggleTheme)}</>
}
