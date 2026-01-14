"use client"

import { useTheme } from "next-themes" // Change this import
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AdSense from "@/components/AdSense"

export default function ToolLayout({ title, description, children }) {
  // Now this hook will work because of the provider in layout.jsx
  const { theme, setTheme } = useTheme() 

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg opacity-70">{description}</p>
        </div>
        
        <div className="bg-card border rounded-xl p-6 shadow-sm">
          {children}
        </div>

        <AdSense />
      </main>
      <Footer />
    </div>
  )
}