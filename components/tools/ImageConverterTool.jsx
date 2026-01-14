"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { Download, Upload, X } from "lucide-react"

export default function ImageConverterTool() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [targetFormat, setTargetFormat] = useState("png")
  const [quality, setQuality] = useState(80)
  const [converting, setConverting] = useState(false)
  const [converted, setConverted] = useState(null)

  const handleFileSelect = useCallback((e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)

      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target.result)
      }
      reader.readAsDataURL(selectedFile)
    }
  }, [])

  const handleConvert = useCallback(async () => {
    if (!file || !preview) return

    setConverting(true)
    try {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height

        const ctx = canvas.getContext("2d")
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)

        canvas.toBlob(
          (blob) => {
            const url = URL.createObjectURL(blob)
            setConverted({
              url,
              blob,
              size: (blob.size / 1024).toFixed(2),
              format: targetFormat,
            })
            setConverting(false)
          },
          `image/${targetFormat}`,
          quality / 100,
        )
      }
      img.src = preview
    } catch (error) {
      console.error("[v0] Conversion error:", error)
      setConverting(false)
    }
  }, [file, preview, targetFormat, quality])

  const handleDownload = useCallback(() => {
    if (!converted) return

    const link = document.createElement("a")
    link.href = converted.url
    link.download = `image.${converted.format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [converted])

  const handleReset = useCallback(() => {
    setFile(null)
    setPreview(null)
    setConverted(null)
  }, [])

  return (
    <ToolLayout title="Image Converter" description="Convert images between different formats with quality control">
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
                id="image-convert-upload"
              />
              <label htmlFor="image-convert-upload" className="cursor-pointer block">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <div className="font-medium">Click to upload image</div>
                <div className="text-sm text-muted-foreground">JPG, PNG, WebP, GIF</div>
              </label>
            </div>

            {/* Preview */}
            {preview && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Original Preview</label>
                <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-contain" />
                </div>
                <div className="text-xs text-muted-foreground">Size: {(file.size / 1024).toFixed(2)} KB</div>
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

          {/* Settings & Convert Section */}
          <div className="space-y-4">
            <div className="card space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Output Format</label>
                <select
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="png">PNG (Lossless)</option>
                  <option value="jpg">JPG (Compressed)</option>
                  <option value="webp">WebP (Modern)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quality: {quality}%</label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground mt-1">Higher quality = larger file size</div>
              </div>

              <button
                onClick={handleConvert}
                disabled={!file || converting}
                className="w-full px-4 py-2 bg-accent hover:bg-accent/90 disabled:bg-muted disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {converting ? "Converting..." : "Convert Image"}
              </button>
            </div>

            {/* Converted Preview */}
            {converted && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Converted Preview</label>
                <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={converted.url || "/placeholder.svg"}
                    alt="Converted"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  Size: {converted.size} KB ({Math.round((converted.size / (file.size / 1024)) * 100)}% original)
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Converted Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
