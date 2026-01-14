"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard, downloadFile } from "@/lib/utils"

const generateCoverLetter = (data) => {
  return `Dear Hiring Manager,

I am writing to express my strong interest in the ${data.position} position at ${data.company}. With my background in ${data.skills}, I am confident that I can make a significant contribution to your team.

In my current role, I have developed expertise in ${data.expertise}. I have successfully ${data.achievement}, which has resulted in ${data.result}. My skills align well with the requirements of this position, and I am excited about the opportunity to bring my experience to your organization.

I am particularly drawn to ${data.company} because of ${data.whyCompany}. I believe my background and enthusiasm make me an excellent fit for your team.

I would welcome the opportunity to discuss how my qualifications can contribute to your organization. Thank you for considering my application.

Sincerely,
${data.name}`
}

export default function CoverLetterGeneratorTool() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    skills: "",
    expertise: "",
    achievement: "",
    result: "",
    whyCompany: "",
  })
  const [letter, setLetter] = useState("")

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleGenerate = useCallback(() => {
    const generatedLetter = generateCoverLetter(formData)
    setLetter(generatedLetter)
  }, [formData])

  return (
    <ToolLayout title="Cover Letter Generator" description="Create professional cover letters in seconds">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                placeholder={`Enter your ${key}...`}
                className="input-field"
              />
            </div>
          ))}
        </div>

        <button onClick={handleGenerate} className="btn-primary w-full">
          Generate Cover Letter
        </button>

        {letter && (
          <div className="space-y-4">
            <textarea value={letter} readOnly className="textarea-field h-96 bg-muted cursor-not-allowed" />
            <div className="flex gap-2">
              <button onClick={() => copyToClipboard(letter)} className="btn-secondary flex-1">
                Copy
              </button>
              <button
                onClick={() => downloadFile(letter, "cover-letter.txt", "text/plain")}
                className="btn-secondary flex-1"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
