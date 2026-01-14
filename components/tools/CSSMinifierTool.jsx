"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "@/lib/utils"

const minifyCSS = (css) => {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,:])\s*/g, "$1")
    .trim()
}

export default function CSSMinifierTool() {
  const [css, setCss] = useState("")
  const [minified, setMinified] = useState("")

  const result = useMemo(() => minifyCSS(css), [css])
  const savings = useMemo(() => {
    if (!css) return 0
    return (((css.length - result.length) / css.length) * 100).toFixed(2)
  }, [css, result])

  const handleMinify = useCallback(() => {
    setMinified(result)
  }, [result])

  return (
    <ToolLayout title="CSS Minifier" description="Reduce CSS file size by removing unnecessary characters">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Original CSS</label>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            placeholder="Paste your CSS here..."
            className="textarea-field h-96"
          />
          <div className="mt-2 text-sm text-muted-foreground">Size: {css.length} bytes</div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Minified CSS</label>
          <textarea value={minified || result} readOnly className="textarea-field h-96 bg-muted cursor-not-allowed" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>Size: {(minified || result).length} bytes</span>
            <span className="text-accent font-semibold">Saved: {savings}%</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button onClick={handleMinify} className="btn-primary flex-1">
          Minify
        </button>
        <button onClick={() => copyToClipboard(minified || result)} className="btn-secondary flex-1">
          Copy
        </button>
        <button
          onClick={() => downloadFile(minified || result, "minified.css", "text/css")}
          className="btn-secondary flex-1"
        >
          Download
        </button>
      </div>
    </ToolLayout>
  )
}
