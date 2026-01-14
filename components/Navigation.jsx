// "use client"

// import { useState, useMemo } from "react"
// import Link from "next/link"
// import { Menu, X, Moon, Sun } from "lucide-react"
// import Logo from "./Logo"
// import { useTheme } from "./theme-provider"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const { theme, toggleTheme } = useTheme()

//   const categories = useMemo(
//     () => [
//       { name: "Text Tools", href: "/#text-tools" },
//       { name: "Image Tools", href: "/#image-tools" },
//       { name: "Calculators", href: "/#calculators" },
//       { name: "Security", href: "/#security-tools" },
//     ],
//     [],
//   )

//   return (
//     <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
//       <div className="container-custom flex items-center justify-between py-4">
//         <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//           <Logo />
//         </Link>

//         <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } md:flex flex-col md:flex-row gap-4 absolute md:relative top-full md:top-0 left-0 md:left-auto right-0 md:right-auto w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 border-border p-4 md:p-0`}
//         >
//           {categories.map((cat) => (
//             <Link
//               key={cat.name}
//               href={cat.href}
//               className="text-sm font-medium hover:text-accent transition-colors"
//               onClick={() => setIsOpen(false)}
//             >
//               {cat.name}
//             </Link>
//           ))}
//         </div>

//         <button
//           onClick={toggleTheme}
//           className="rounded-lg border border-border bg-muted p-2 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
//           aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
//         >
//           {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//         </button>
//       </div>
//     </nav>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState("light")

  // 1. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2. Handle Theme Initialization (Prevents Hydration Mismatch)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // 3. Internal Toggle Function (Build-Safe)
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border-b border-border" 
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Utilities
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {/* Note: added "/" before # to make links work from sub-pages */}
          <Link href="/#text-tools" className="font-medium hover:text-blue-500 transition-colors">
            Text
          </Link>
          <Link href="/#pdf-tools" className="font-medium hover:text-blue-500 transition-colors">
            PDF
          </Link>
          <Link href="/#image-tools" className="font-medium hover:text-blue-500 transition-colors">
            Image
          </Link>
          <Link href="/#calculators" className="font-medium hover:text-blue-500 transition-colors">
            Calc
          </Link>
          <button 
            onClick={handleToggleTheme} 
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-500 transition-all"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex gap-4 items-center">
          <button onClick={handleToggleTheme} className="p-2 text-xl">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-2xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-slate-900">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/#text-tools" onClick={() => setIsOpen(false)}>Text Tools</Link>
            <Link href="/#pdf-tools" onClick={() => setIsOpen(false)}>PDF Tools</Link>
            <Link href="/#image-tools" onClick={() => setIsOpen(false)}>Image Tools</Link>
            <Link href="/#calculators" onClick={() => setIsOpen(false)}>Calculators</Link>
          </div>
        </div>
      )}
    </nav>
  )
}