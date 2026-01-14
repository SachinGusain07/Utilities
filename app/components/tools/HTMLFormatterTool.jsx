"use client"

import { useState, useMemo } from "react"
import ToolLayout from "./ToolLayout"
import { copyToClipboard, downloadFile } from "../../../lib/utils"

export default function HTMLFormatterTool() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState("format")

  const output = useMemo(() => {
    if (!input.trim()) return ""

    if (mode === "format") {
      const formatted = input
      let indent = 0
      let result = ""

      formatted.split(/(<[^>]+>)/g).forEach((token) => {
        if (!token.trim()) return

        if (token.startsWith("</")) {
          indent = Math.max(0, indent - 1)
          result += "  ".repeat(indent) + token + "\n"
        } else if (token.startsWith("<") && token.endsWith("/>")) {
          result += "  ".repeat(indent) + token + "\n"
        } else if (token.startsWith("<")) {
          result += "  ".repeat(indent) + token + "\n"
          if (!token.includes("br") && !token.includes("img")) {
            indent++
          }
        } else if (token.trim()) {
          result += "  ".repeat(indent) + token.trim() + "\n"
        }
      })

      return result
    } else {
      return input.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim()
    }
  }, [input, mode])

  return (
    <ToolLayout title="HTML Formatter" description="Format, beautify, and minify HTML code">
      <div className="space-y-4 mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("format")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              mode === "format" ? "btn-primary" : "btn-secondary"
            }`}
          >
            Format
          </button>
          <button
            onClick={() => setMode("minify")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              mode === "minify" ? "btn-primary" : "btn-secondary"
            }`}
          >
            Minify
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Input HTML</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste HTML code..."
            className="textarea-field h-96 font-mono text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Output {mode === "format" ? "Formatted" : "Minified"}
          </label>
          <textarea value={output} readOnly className="textarea-field h-96 bg-muted/50 font-mono text-sm" />
        </div>
      </div>

      <div className="flex gap-3 mt-4 flex-wrap">
        <button onClick={() => copyToClipboard(output)} className="btn-primary flex-1 min-w-[150px]">
          Copy Output
        </button>
        <button
          onClick={() => downloadFile(output, "formatted.html", "text/html")}
          className="btn-secondary flex-1 min-w-[150px]"
        >
          Download
        </button>
      </div>
    </ToolLayout>
  )
}
