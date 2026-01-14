"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "../../../lib/utils"

export default function URLEncoderTool() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState("encode")
  const [output, setOutput] = useState("")

  const result = useMemo(() => {
    try {
      if (mode === "encode") {
        return encodeURIComponent(input)
      } else {
        return decodeURIComponent(input)
      }
    } catch (e) {
      return "Error: Invalid input"
    }
  }, [input, mode])

  const handleProcess = useCallback(() => {
    setOutput(result)
  }, [result])

  return (
    <ToolLayout title="URL Encoder/Decoder" description="Safely encode and decode URLs">
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("encode")}
            className={`btn ${mode === "encode" ? "btn-primary" : "btn-secondary"}`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`btn ${mode === "decode" ? "btn-primary" : "btn-secondary"}`}
          >
            Decode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Input</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste URL or text here..."
              className="textarea-field h-64"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Output</label>
            <textarea value={output || result} readOnly className="textarea-field h-64 bg-muted cursor-not-allowed" />
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={handleProcess} className="btn-primary flex-1">
            {mode === "encode" ? "Encode" : "Decode"}
          </button>
          <button onClick={() => copyToClipboard(output || result)} className="btn-secondary flex-1">
            Copy
          </button>
          <button
            onClick={() => downloadFile(output || result, "output.txt", "text/plain")}
            className="btn-secondary flex-1"
          >
            Download
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
