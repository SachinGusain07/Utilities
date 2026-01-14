"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "@/lib/utils"

const markdownToHTML = (markdown) => {
  let html = markdown

  html = html
    .replace(/^### (.*?)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*?)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*?)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2">$1</a>')
    .replace(/^- (.*?)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")

  return `<p>${html}</p>`.replace(/<p><\/p>/g, "")
}

export default function MarkdownToHTMLTool() {
  const [markdown, setMarkdown] = useState("")
  const [html, setHtml] = useState("")

  const result = useMemo(() => markdownToHTML(markdown), [markdown])

  const handleConvert = useCallback(() => {
    setHtml(result)
  }, [result])

  return (
    <ToolLayout title="Markdown to HTML" description="Convert Markdown syntax to HTML code instantly">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Markdown Input</label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="# Heading&#10;## Subheading&#10;**Bold** and *italic*"
            className="w-full h-96 p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent font-mono text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">HTML Output</label>
          <textarea
            value={html || result}
            readOnly
            className="w-full h-96 p-3 border border-border rounded-lg bg-muted cursor-not-allowed font-mono text-sm resize-none"
          />
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button onClick={handleConvert} className="btn-primary flex-1">
          Convert
        </button>
        <button onClick={() => copyToClipboard(html || result)} className="btn-secondary flex-1">
          Copy
        </button>
        <button
          onClick={() => downloadFile(html || result, "output.html", "text/html")}
          className="btn-secondary flex-1"
        >
          Download
        </button>
      </div>
    </ToolLayout>
  )
}
