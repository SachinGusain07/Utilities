"use client"

import { useState, useMemo } from "react"
import ToolLayout from "./ToolLayout"
import { copyToClipboard, downloadFile } from "@/lib/utils"

export default function CSSMinifierTool() {
  const [input, setInput] = useState("")

  const minified = useMemo(() => {
    return input
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*([{}:;,])\s*/g, "$1")
      .trim()
  }, [input])

  const savings = useMemo(() => {
    if (input.length === 0) return 0
    return Math.round(((input.length - minified.length) / input.length) * 100)
  }, [input, minified])

  return (
    <ToolLayout title="CSS Minifier" description="Minify and compress CSS code">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Input CSS</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste CSS code..."
            className="textarea-field h-96 font-mono text-sm"
          />
          <div className="mt-2 text-sm text-foreground/70">Size: {(input.length / 1024).toFixed(2)} KB</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Minified CSS</label>
          <textarea value={minified} readOnly className="textarea-field h-96 bg-muted/50 font-mono text-sm" />
          <div className="mt-2 text-sm text-foreground/70">
            Size: {(minified.length / 1024).toFixed(2)} KB ({savings}% reduction)
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4 flex-wrap">
        <button onClick={() => copyToClipboard(minified)} className="btn-primary flex-1 min-w-[150px]">
          Copy Minified
        </button>
        <button
          onClick={() => downloadFile(minified, "style.css", "text/css")}
          className="btn-secondary flex-1 min-w-[150px]"
        >
          Download CSS
        </button>
      </div>
    </ToolLayout>
  )
}
