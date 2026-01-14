"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "@/lib/utils"

const formatHTML = (html) => {
  let formatted = ""
  let indent = 0

  html = html.replace(/>\s+</g, "><")

  for (let i = 0; i < html.length; i++) {
    const char = html[i]

    if (char === "<") {
      if (html.substring(i, i + 2) === "</") {
        indent--
      }
      formatted += "\n" + "  ".repeat(Math.max(0, indent)) + char
    } else if (char === ">") {
      formatted += char
      if (!html.substring(i - 5, i).includes("/")) {
        if (
          !["br", "hr", "img", "input", "meta", "link"].some((tag) => html.substring(i - 20, i).includes(`<${tag}`))
        ) {
          if (!html.substring(i, i + 2).startsWith("</")) {
            indent++
          }
        }
      }
    } else if (char !== "\n") {
      formatted += char
    }
  }

  return formatted.trim()
}

const minifyHTML = (html) => {
  return html.replace(/\n/g, "").replace(/\s+/g, " ").replace(/>\s+</g, "><").trim()
}

export default function HTMLFormatterTool() {
  const [html, setHtml] = useState("")
  const [formatted, setFormatted] = useState("")
  const [mode, setMode] = useState("format")

  const result = useMemo(() => {
    if (!html) return ""
    return mode === "format" ? formatHTML(html) : minifyHTML(html)
  }, [html, mode])

  const handleFormat = useCallback(() => {
    setFormatted(result)
  }, [result])

  return (
    <ToolLayout title="HTML Formatter" description="Format, beautify, or minify HTML code">
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("format")}
            className={`btn ${mode === "format" ? "btn-primary" : "btn-secondary"}`}
          >
            Format
          </button>
          <button
            onClick={() => setMode("minify")}
            className={`btn ${mode === "minify" ? "btn-primary" : "btn-secondary"}`}
          >
            Minify
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Input</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="Paste your HTML here..."
              className="w-full h-96 p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent font-mono text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Output</label>
            <textarea
              value={formatted || result}
              readOnly
              className="w-full h-96 p-3 border border-border rounded-lg bg-muted cursor-not-allowed font-mono text-sm resize-none"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={handleFormat} className="btn-primary flex-1">
            Process
          </button>
          <button onClick={() => copyToClipboard(formatted || result)} className="btn-secondary flex-1">
            Copy
          </button>
          <button
            onClick={() => downloadFile(formatted || result, "formatted.html", "text/html")}
            className="btn-secondary flex-1"
          >
            Download
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
