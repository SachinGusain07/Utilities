"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { Download, Upload, X } from "lucide-react"

export default function ImageResizerTool() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(600)
  const [maintainAspect, setMaintainAspect] = useState(true)
  const [resizing, setResizing] = useState(false)
  const [resized, setResized] = useState(null)
  const [originalDimensions, setOriginalDimensions] = useState(null)

  const handleFileSelect = useCallback((e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)

      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target.result)

        const img = new window.Image()
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height })
          setWidth(img.width)
          setHeight(img.height)
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(selectedFile)
    }
  }, [])

  const handleWidthChange = useCallback(
    (newWidth) => {
      setWidth(newWidth)
      if (maintainAspect && originalDimensions) {
        const aspectRatio = originalDimensions.height / originalDimensions.width
        setHeight(Math.round(newWidth * aspectRatio))
      }
    },
    [maintainAspect, originalDimensions],
  )

  const handleHeightChange = useCallback(
    (newHeight) => {
      setHeight(newHeight)
      if (maintainAspect && originalDimensions) {
        const aspectRatio = originalDimensions.width / originalDimensions.height
        setWidth(Math.round(newHeight * aspectRatio))
      }
    },
    [maintainAspect, originalDimensions],
  )

  const handleResize = useCallback(async () => {
    if (!preview) return

    setResizing(true)
    try {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext("2d")
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          (blob) => {
            const url = URL.createObjectURL(blob)
            setResized({
              url,
              blob,
              size: (blob.size / 1024).toFixed(2),
              width,
              height,
            })
            setResizing(false)
          },
          "image/png",
          0.95,
        )
      }
      img.src = preview
    } catch (error) {
      console.error("[v0] Resize error:", error)
      setResizing(false)
    }
  }, [preview, width, height])

  const handleDownload = useCallback(() => {
    if (!resized) return

    const link = document.createElement("a")
    link.href = resized.url
    link.download = `resized-${width}x${height}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [resized, width, height])

  const handleReset = useCallback(() => {
    setFile(null)
    setPreview(null)
    setResized(null)
    setOriginalDimensions(null)
  }, [])

  return (
    <ToolLayout title="Image Resizer" description="Resize images to exact dimensions with preview">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="image-resize-upload"
              />
              <label htmlFor="image-resize-upload" className="cursor-pointer block">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <div className="font-medium">Click to upload image</div>
                <div className="text-sm text-muted-foreground">PNG, JPG, WebP</div>
              </label>
            </div>

            {/* Preview */}
            {preview && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Original Preview</label>
                <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-contain" />
                </div>
                {originalDimensions && (
                  <div className="text-xs text-muted-foreground">
                    {originalDimensions.width}x{originalDimensions.height}px ({(file.size / 1024).toFixed(2)} KB)
                  </div>
                )}
              </div>
            )}

            {/* File Info */}
            {file && (
              <div className="card p-4 bg-accent/5 border-accent">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold truncate">{file.name}</div>
                    <div className="text-muted-foreground text-xs">{file.type}</div>
                  </div>
                  <button onClick={handleReset} className="p-1 hover:bg-background rounded transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings Section */}
          <div className="space-y-4">
            <div className="card space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="maintain-aspect"
                  checked={maintainAspect}
                  onChange={(e) => setMaintainAspect(e.target.checked)}
                  className="cursor-pointer"
                />
                <label htmlFor="maintain-aspect" className="text-sm font-medium cursor-pointer">
                  Maintain Aspect Ratio
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Width (px)</label>
                <input
                  type="number"
                  min="1"
                  max="4000"
                  value={width}
                  onChange={(e) => handleWidthChange(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Height (px)</label>
                <input
                  type="number"
                  min="1"
                  max="4000"
                  value={height}
                  onChange={(e) => handleHeightChange(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Preset Sizes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Mobile", w: 375, h: 812 },
                    { label: "Tablet", w: 768, h: 1024 },
                    { label: "Desktop", w: 1920, h: 1080 },
                    { label: "Square", w: 1000, h: 1000 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setWidth(preset.w)
                        setHeight(preset.h)
                      }}
                      className="text-xs px-2 py-1 bg-muted hover:bg-accent hover:text-white rounded transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleResize}
                disabled={!file || resizing}
                className="w-full px-4 py-2 bg-accent hover:bg-accent/90 disabled:bg-muted disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {resizing ? "Resizing..." : "Resize Image"}
              </button>
            </div>

            {/* Resized Preview */}
            {resized && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Resized Preview</label>
                <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={resized.url || "/placeholder.svg"}
                    alt="Resized"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  {resized.width}x{resized.height}px ({resized.size} KB)
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resized Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
