"use client"

import { useState } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function PDFSplitterTool() {
  const [file, setFile] = useState(null)

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    }
  }

  return (
    <ToolLayout title="PDF Splitter" description="Extract pages from PDF and split into separate files">
      <div className="max-w-md mx-auto">
        <div className="card space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <input type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" id="pdf-split-upload" />
            <label htmlFor="pdf-split-upload" className="cursor-pointer">
              <div className="text-4xl mb-2">✂️</div>
              <div className="font-medium">Click to upload PDF</div>
              <div className="text-sm text-muted-foreground">Max 50MB</div>
            </label>
          </div>

          {file && (
            <div className="card p-4 bg-accent/5 border-accent">
              <div className="text-sm">
                <div className="font-semibold">{file.name}</div>
                <div className="text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
              </div>
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">Coming Soon: Split PDF pages</div>
        </div>
      </div>
    </ToolLayout>
  )
}
