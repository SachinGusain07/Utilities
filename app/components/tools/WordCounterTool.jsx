"use client"

import { useState, useMemo } from "react"
import ToolLayout from "./ToolLayout"
import { copyToClipboard, downloadFile } from "../../../lib/utils"

export default function WordCounterTool() {
  const [text, setText] = useState("")

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, "").length
    const lines = text ? text.split("\n").length : 0
    const sentences = text ? (text.match(/[.!?]+/g) || []).length : 0
    const paragraphs = text ? text.split(/\n\n+/).filter(Boolean).length : 0
    const readingTime = Math.ceil(words / 200)

    return { words, chars, charsNoSpaces, lines, sentences, paragraphs, readingTime }
  }, [text])

  return (
    <ToolLayout title="Word Counter" description="Count words, characters, sentences and get detailed text statistics">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            className="textarea-field h-80"
          />
          <div className="flex gap-3 mt-4 flex-wrap">
            <button onClick={() => setText("")} className="btn-secondary flex-1 min-w-[100px]">
              Clear
            </button>
            <button onClick={() => copyToClipboard(text)} className="btn-primary flex-1 min-w-[100px]">
              Copy
            </button>
            <button onClick={() => downloadFile(text, "text.txt")} className="btn-secondary flex-1 min-w-[100px]">
              Download
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.words}</div>
            <div className="text-sm text-foreground/70">Words</div>
          </div>
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.chars}</div>
            <div className="text-sm text-foreground/70">Characters</div>
          </div>
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.charsNoSpaces}</div>
            <div className="text-sm text-foreground/70">Chars (no spaces)</div>
          </div>
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.sentences}</div>
            <div className="text-sm text-foreground/70">Sentences</div>
          </div>
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.paragraphs}</div>
            <div className="text-sm text-foreground/70">Paragraphs</div>
          </div>
          <div className="card-tool">
            <div className="text-3xl font-bold text-accent">{stats.readingTime} min</div>
            <div className="text-sm text-foreground/70">Reading Time</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
