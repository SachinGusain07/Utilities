"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard } from "../../lib/utils"

const generateShortCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let code = ""
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export default function URLShortenerTool() {
  const [longUrl, setLongUrl] = useState("")
  const [shortCode, setShortCode] = useState("")
  const [customCode, setCustomCode] = useState("")
  const [urls, setUrls] = useState([])

  const handleGenerate = useCallback(() => {
    const code = customCode || generateShortCode()
    const shortUrl = `Utilities.app/${code}`
    setShortCode(code)
    setUrls([{ longUrl, shortUrl, code, created: new Date().toLocaleString() }, ...urls])
    setCustomCode("")
  }, [longUrl, customCode, urls])

  return (
    <ToolLayout title="URL Shortener" description="Create shortened URLs and manage them">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Long URL</label>
            <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="https://example.com/very/long/url"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Custom Code (Optional)</label>
            <input
              type="text"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value.slice(0, 6))}
              placeholder="Leave empty for random code"
              maxLength="6"
              className="input-field"
            />
          </div>

          <button onClick={handleGenerate} disabled={!longUrl} className="btn-primary w-full">
            Shorten URL
          </button>
        </div>

        {urls.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold">Recent URLs</h3>
            {urls.map((item, i) => (
              <div key={i} className="card p-4 space-y-2">
                <div className="text-sm text-muted-foreground">
                  <a
                    href={item.longUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent truncate block"
                  >
                    {item.longUrl}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <code className="bg-muted p-2 rounded text-sm">{item.shortUrl}</code>
                  <button onClick={() => copyToClipboard(item.shortUrl)} className="btn-secondary text-xs">
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
