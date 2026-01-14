"use client"

import { useRef } from "react"

import { useEffect } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import CategorySection from "@/components/CategorySection"
import Footer from "@/components/Footer"
import AdSense from "@/components/AdSense"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tools = {
  text: [
    {
      id: "word-counter",
      title: "Word Counter",
      description: "Count words, characters, sentences in real-time",
      href: "/tools/word-counter",
      tags: ["Text", "Analytics"],
    },
    {
      id: "html-formatter",
      title: "HTML Formatter",
      description: "Format and beautify HTML code",
      href: "/tools/html-formatter",
      tags: ["Code", "Format"],
    },
    {
      id: "css-minifier",
      title: "CSS Minifier",
      description: "Minify and compress CSS code",
      href: "/tools/css-minifier",
      tags: ["Code", "Minify"],
    },
    {
      id: "js-minifier",
      title: "JavaScript Minifier",
      description: "Minify JavaScript for optimization",
      href: "/tools/js-minifier",
      tags: ["Code", "Minify"],
    },
  ],
  image: [
    {
      id: "image-resizer",
      title: "Image Resizer",
      description: "Resize images to any dimension",
      href: "/tools/image-resizer",
      tags: ["Image", "Resize"],
    },
    {
      id: "image-converter",
      title: "Image Converter",
      description: "Convert JPG, PNG, WebP formats",
      href: "/tools/image-converter",
      tags: ["Image", "Convert"],
    },
  ],
  calc: [
    {
      id: "gst-calculator",
      title: "GST Calculator",
      description: "Calculate GST for Indian businesses",
      href: "/tools/gst-calculator",
      tags: ["Calculator", "Finance"],
    },
    {
      id: "sip-calculator",
      title: "SIP Calculator",
      description: "Calculate SIP returns on mutual funds",
      href: "/tools/sip-calculator",
      tags: ["Calculator", "Investment"],
    },
    {
      id: "loan-calculator",
      title: "Loan Calculator",
      description: "Calculate loan EMI and interest",
      href: "/tools/loan-calculator",
      tags: ["Calculator", "Loan"],
    },
    {
      id: "salary-calculator",
      title: "Salary Calculator",
      description: "Calculate gross and net salary",
      href: "/tools/salary-calculator",
      tags: ["Calculator", "Salary"],
    },
    {
      id: "compound-interest",
      title: "Compound Interest",
      description: "Calculate compound interest returns",
      href: "/tools/compound-interest",
      tags: ["Calculator", "Finance"],
    },
    {
      id: "simple-interest",
      title: "Simple Interest",
      description: "Calculate simple interest easily",
      href: "/tools/simple-interest",
      tags: ["Calculator", "Finance"],
    },
  ],
  security: [
    {
      id: "base64-encoder",
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64",
      href: "/tools/base64-encoder",
      tags: ["Encoding", "Security"],
    },
    {
      id: "url-encoder",
      title: "URL Encoder/Decoder",
      description: "Encode and decode URLs",
      href: "/tools/url-encoder",
      tags: ["Encoding", "URL"],
    },
    {
      id: "regex-tester",
      title: "Regex Tester",
      description: "Test and debug regular expressions",
      href: "/tools/regex-tester",
      tags: ["Utility", "Debug"],
    },
    {
      id: "qr-code",
      title: "QR Code Generator",
      description: "Generate QR codes from text/URLs",
      href: "/tools/qr-code",
      tags: ["QR", "Generate"],
    },
    {
      id: "uuid-generator",
      title: "UUID Generator",
      description: "Generate unique UUIDs",
      href: "/tools/uuid-generator",
      tags: ["Security", "Generate"],
    },
    {
      id: "hash-generator",
      title: "Hash Generator",
      description: "Generate MD5 and SHA hashes",
      href: "/tools/hash-generator",
      tags: ["Security", "Hash"],
    },
    {
      id: "password-generator",
      title: "Password Generator",
      description: "Generate strong secure passwords",
      href: "/tools/password-generator",
      tags: ["Security", "Password"],
    },
  ],
}

const sectionRefs = {
  text: null,
  image: null,
  calc: null,
  security: null,
}

export default function Home() {
  const containerRef = null
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const calcRef = useRef(null)
  const securityRef = useRef(null)

  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll("[data-animate-section]")

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Navigation />
      <main ref={containerRef} className="container-custom py-8 md:py-16">
        <Hero />

        <div data-animate-section ref={textRef}>
          <CategorySection id="text-tools" title="Text Tools" tools={tools.text} />
        </div>
        <AdSense />

        <div data-animate-section ref={imageRef}>
          <CategorySection id="image-tools" title="Image Tools" tools={tools.image} />
        </div>
        <AdSense />

        <div data-animate-section ref={calcRef}>
          <CategorySection id="calculators" title="Calculators" tools={tools.calc} />
        </div>
        <AdSense />

        <div data-animate-section ref={securityRef}>
          <CategorySection id="security-tools" title="Security & Encoding" tools={tools.security} />
        </div>
        <AdSense />
      </main>
      <Footer />
    </>
  )
}
