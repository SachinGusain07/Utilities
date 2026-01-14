"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "./ToolLayout"

export default function JSMinifierTool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)

  const minifyJS = useCallback((code) => {
    try {
      const minified = code
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s*([{}()[\];:,])\s*/g, "$1")
        .trim()
      return minified
    } catch {
      return "Error minifying code"
    }
  }, [])

  const stats = useMemo(() => {
    const inputSize = new Blob([input]).size
    const outputSize = new Blob([output]).size
    const reduction = inputSize > 0 ? Math.round(((inputSize - outputSize) / inputSize) * 100) : 0
    return { inputSize, outputSize, reduction }
  }, [input, output])

  const handleMinify = useCallback(() => {
    const minified = minifyJS(input)
    setOutput(minified)
  }, [input, minifyJS])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [output])

  return (
    <ToolLayout title="JavaScript Minifier" description="Compress and minify JavaScript code to reduce file size">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">JavaScript Code</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="textarea-field h-96"
            placeholder="Paste your JavaScript code here..."
          />
          <div className="mt-2 text-xs text-muted-foreground">Size: {stats.inputSize} bytes</div>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Minified Code</label>
          <textarea
            value={output}
            readOnly
            className="textarea-field h-96 bg-muted"
            placeholder="Minified code will appear here..."
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Size: {stats.outputSize} bytes</span>
            <span>Reduction: {stats.reduction}%</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={handleMinify} className="btn-primary">
          Minify JavaScript
        </button>
        {output && (
          <button onClick={handleCopy} className="btn-secondary">
            {copied ? "Copied!" : "Copy Output"}
          </button>
        )}
      </div>
    </ToolLayout>
  )
}
