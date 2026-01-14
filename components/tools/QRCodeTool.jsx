"use client"

import { useState, useCallback, useRef } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function QRCodeTool() {
  const [input, setInput] = useState("")
  const canvasRef = useRef(null)
  const [qrSize, setQrSize] = useState(300)

  // Simple QR Code generator using QR Server API
  const qrUrl = input
    ? `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(input)}`
    : ""

  const handleDownload = useCallback(() => {
    if (!qrUrl) return
    const a = document.createElement("a")
    a.href = qrUrl
    a.download = "qrcode.png"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [qrUrl])

  return (
    <ToolLayout title="QR Code Generator" description="Create scannable QR codes for URLs and text">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Text or URL</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text or URL to generate QR code..."
              className="textarea-field h-48"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              QR Size: {qrSize}x{qrSize}px
            </label>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={qrSize}
              onChange={(e) => setQrSize(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <button onClick={handleDownload} disabled={!input} className="btn-primary w-full">
            Download QR Code
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="card p-8">
            {input ? (
              <img
                src={qrUrl || "/placeholder.svg"}
                alt="Generated QR Code"
                width={qrSize}
                height={qrSize}
                ref={canvasRef}
                className="rounded-lg"
              />
            ) : (
              <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Enter text to generate QR code
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
