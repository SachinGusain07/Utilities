"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard } from "@/lib/utils"

// Simple hash implementations (for MD5 we'll use a basic approach)
async function generateHash(text, algorithm) {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest(algorithm, data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

export default function HashGeneratorTool() {
  const [input, setInput] = useState("")
  const [hashes, setHashes] = useState({})
  const [loading, setLoading] = useState(false)

  const handleGenerate = useCallback(async () => {
    if (!input) return
    setLoading(true)
    try {
      const results = {}
      results.sha1 = await generateHash(input, "SHA-1")
      results.sha256 = await generateHash(input, "SHA-256")
      results.sha512 = await generateHash(input, "SHA-512")
      setHashes(results)
    } catch (e) {
      console.error("Hash generation error:", e)
    } finally {
      setLoading(false)
    }
  }, [input])

  return (
    <ToolLayout title="Hash Generator" description="Generate cryptographic hashes from text">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Input Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash..."
            className="textarea-field h-32"
          />
        </div>

        <button onClick={handleGenerate} disabled={loading || !input} className="btn-primary w-full">
          {loading ? "Generating..." : "Generate Hashes"}
        </button>

        {Object.keys(hashes).length > 0 && (
          <div className="space-y-3">
            {Object.entries(hashes).map(([algorithm, hash]) => (
              <div key={algorithm} className="card">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1">{algorithm.toUpperCase()}</div>
                    <code className="text-xs font-mono break-all text-muted-foreground">{hash}</code>
                  </div>
                  <button onClick={() => copyToClipboard(hash)} className="btn-secondary text-xs">
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
