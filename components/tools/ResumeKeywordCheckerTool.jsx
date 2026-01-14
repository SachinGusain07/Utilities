"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

const commonKeywords = [
  "Leadership",
  "Communication",
  "Project Management",
  "Problem Solving",
  "Teamwork",
  "Analytical",
  "Strategic Planning",
  "Data Analysis",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Database",
  "Cloud",
  "AWS",
  "DevOps",
]

export default function ResumeKeywordCheckerTool() {
  const [resume, setResume] = useState("")

  const results = useMemo(() => {
    const resumeLower = resume.toLowerCase()
    const found = []
    const missing = []

    commonKeywords.forEach((keyword) => {
      if (resumeLower.includes(keyword.toLowerCase())) {
        found.push(keyword)
      } else {
        missing.push(keyword)
      }
    })

    return { found, missing, score: ((found.length / commonKeywords.length) * 100).toFixed(1) }
  }, [resume])

  return (
    <ToolLayout title="Resume Keyword Checker" description="Optimize your resume for ATS and keyword matching">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium mb-2">Paste Your Resume</label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume content here..."
            className="textarea-field h-96"
          />
        </div>

        <div className="space-y-4">
          <div className="card">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">{results.score}%</div>
              <div className="text-sm text-muted-foreground mt-1">Keyword Match</div>
            </div>
          </div>

          <div className="card p-4">
            <div className="text-sm font-semibold mb-2 text-accent">Found Keywords ({results.found.length})</div>
            <div className="flex flex-wrap gap-1">
              {results.found.map((keyword) => (
                <span key={keyword} className="badge badge-primary text-xs">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-4">
            <div className="text-sm font-semibold mb-2 text-muted-foreground">
              Missing Keywords ({results.missing.length})
            </div>
            <div className="flex flex-wrap gap-1">
              {results.missing.map((keyword) => (
                <span key={keyword} className="badge badge-secondary text-xs">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
