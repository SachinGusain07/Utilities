"use client"

import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import ToolLayout from "@/components/ToolLayout"
import gsap from "gsap"

export default function WordCounterTool() {
  const [text, setText] = useState("")
  const statsRef = useRef(null)

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, "").length
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0
    const paragraphs = trimmed ? trimmed.split(/\n\n+/).filter(Boolean).length : 0
    const readingTime = Math.ceil(words / 200)

    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime }
  }, [text])

  useEffect(() => {
    gsap.from(statsRef.current?.querySelectorAll(".stat-item"), {
      opacity: 0,
      y: 10,
      stagger: 0.05,
      duration: 0.4,
    })
  }, [stats])

  const handleClear = useCallback(() => {
    setText("")
  }, [])

  const handlePaste = useCallback(async () => {
    try {
      const pastedText = await navigator.clipboard.readText()
      setText(pastedText)
    } catch (err) {
      console.error("Paste failed:", err)
    }
  }, [])

  return (
    <ToolLayout title="Word Counter" description="Analyze your text with detailed statistics">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="w-full h-96 p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
          <div className="flex gap-2 mt-4">
            <button onClick={handleClear} className="btn-secondary flex-1">
              Clear
            </button>
            <button onClick={handlePaste} className="btn-secondary flex-1">
              Paste
            </button>
            <button onClick={() => setText(text + "\n")} className="btn-secondary flex-1">
              + New Line
            </button>
          </div>
        </div>

        <div ref={statsRef} className="space-y-3">
          <StatBox label="Words" value={stats.words} />
          <StatBox label="Characters" value={stats.chars} />
          <StatBox label="Characters (no spaces)" value={stats.charsNoSpaces} />
          <StatBox label="Sentences" value={stats.sentences} />
          <StatBox label="Paragraphs" value={stats.paragraphs} />
          <StatBox label="Reading Time (min)" value={stats.readingTime} />
        </div>
      </div>
    </ToolLayout>
  )
}

function StatBox({ label, value }) {
  return (
    <div className="stat-item card text-center p-4">
      <div className="text-2xl font-bold text-accent">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
