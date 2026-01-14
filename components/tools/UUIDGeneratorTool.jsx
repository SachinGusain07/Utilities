"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "../../../lib/utils"

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default function UUIDGeneratorTool() {
  const [uuids, setUuids] = useState([generateUUID()])
  const [count, setCount] = useState(1)

  const handleGenerate = useCallback(() => {
    const newUuids = Array.from({ length: count }, () => generateUUID())
    setUuids(newUuids)
  }, [count])

  const handleCopyAll = useCallback(() => {
    copyToClipboard(uuids.join("\n"))
  }, [uuids])

  const handleDownloadAll = useCallback(() => {
    downloadFile(uuids.join("\n"), "uuids.txt", "text/plain")
  }, [uuids])

  return (
    <ToolLayout title="UUID Generator" description="Generate unique identifiers for your applications">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Generate Count</label>
            <input
              type="number"
              min="1"
              max="1000"
              value={count}
              onChange={(e) => setCount(Math.max(1, Number.parseInt(e.target.value)))}
              className="input-field"
            />
          </div>
          <button onClick={handleGenerate} className="btn-primary w-full">
            Generate UUIDs
          </button>
        </div>

        <div className="card">
          <label className="block text-sm font-medium mb-3">Generated UUIDs</label>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {uuids.map((uuid, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg font-mono text-sm">
                <span>{uuid}</span>
                <button onClick={() => copyToClipboard(uuid)} className="text-accent hover:underline text-xs">
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={handleCopyAll} className="btn-secondary flex-1">
            Copy All
          </button>
          <button onClick={handleDownloadAll} className="btn-secondary flex-1">
            Download
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
