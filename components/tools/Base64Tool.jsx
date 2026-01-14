"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard ,downloadFile} from "../../lib/utils"
// import { copyToClipboard, downloadFile } from "../../../lib/utils"

export default function Base64Tool() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState("encode")
  const [output, setOutput] = useState("")

  const result = useMemo(() => {
    try {
      if (mode === "encode") {
        return btoa(unescape(encodeURIComponent(input)))
      } else {
        return decodeURIComponent(escape(atob(input)))
      }
    } catch (e) {
      return "Error: Invalid input"
    }
  }, [input, mode])

  const handleProcess = useCallback(() => {
    setOutput(result)
  }, [result])

  return (
    <ToolLayout title="Base64 Encoder/Decoder" description="Convert between text and Base64 encoding">
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
            <label className="block text-sm font-medium mb-2">
              {mode === "encode" ? "Text Input" : "Base64 Input"}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
              className="textarea-field h-64"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              {mode === "encode" ? "Base64 Output" : "Text Output"}
            </label>
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
            onClick={() => downloadFile(output || result, `output.${mode === "encode" ? "b64" : "txt"}`, "text/plain")}
            className="btn-secondary flex-1"
          >
            Download
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
