"use client"

import { useTheme } from "./theme-provider"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AdSense from "@/components/AdSense"

export default function ToolLayout({ title, description, children }) {
  useTheme()

  return (
    <>
      <Navigation />
      <main className="container-custom py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
        <AdSense />
      </main>
      <Footer />
    </>
  )
}
