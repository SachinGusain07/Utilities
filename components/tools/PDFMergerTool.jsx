"use client"

import { useState } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function PDFMergerTool() {
  const [files, setFiles] = useState([])

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files || [])
    const pdfFiles = selectedFiles.filter((f) => f.type === "application/pdf")
    setFiles([...files, ...pdfFiles])
  }

  return (
    <ToolLayout title="PDF Merger" description="Combine multiple PDF files into a single document">
      <div className="max-w-2xl mx-auto">
        <div className="card space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="pdf-merge-upload"
            />
            <label htmlFor="pdf-merge-upload" className="cursor-pointer">
              <div className="text-4xl mb-2">📑</div>
              <div className="font-medium">Click to upload PDFs</div>
              <div className="text-sm text-muted-foreground">Select multiple files</div>
            </label>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <div className="font-semibold">Selected Files ({files.length})</div>
              {files.map((file, i) => (
                <div key={i} className="card p-3 flex justify-between items-center">
                  <span className="text-sm">{file.name}</span>
                  <button
                    onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                    className="text-destructive text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">Coming Soon: Merge multiple PDFs into one</div>
        </div>
      </div>
    </ToolLayout>
  )
}
