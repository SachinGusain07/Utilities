"use client"

import { useState, useCallback } from "react"
import ToolLayout from "@/components/ToolLayout"

const questionsByRole = {
  "Software Engineer": [
    "Explain the difference between frontend and backend development.",
    "What is a REST API and how does it work?",
    "Describe the concept of object-oriented programming.",
    "What is the difference between SQL and NoSQL databases?",
    "Explain the concept of version control and Git.",
    "What are microservices and their advantages?",
    "Describe your experience with cloud platforms.",
  ],
  "Data Analyst": [
    "How do you approach data cleaning?",
    "Explain the difference between descriptive and predictive analytics.",
    "What tools are you proficient with?",
    "How do you handle missing data?",
    "Describe your experience with data visualization.",
    "What is the importance of data quality?",
  ],
  "Project Manager": [
    "Describe your leadership style.",
    "How do you manage project risks?",
    "Explain the different project management methodologies.",
    "How do you communicate with stakeholders?",
    "Tell us about a difficult project you managed.",
  ],
  "Product Manager": [
    "How do you define product success?",
    "Describe your experience with market research.",
    "How do you prioritize features?",
    "Explain your approach to user research.",
    "How do you handle competing priorities?",
  ],
}

export default function InterviewGeneratorTool() {
  const [role, setRole] = useState("Software Engineer")
  const [experience, setExperience] = useState("5")
  const [questions, setQuestions] = useState(questionsByRole["Software Engineer"])
  const [selectedQuestions, setSelectedQuestions] = useState([])

  const handleRoleChange = useCallback((newRole) => {
    setRole(newRole)
    setQuestions(questionsByRole[newRole] || [])
  }, [])

  const handleToggleQuestion = useCallback((question) => {
    setSelectedQuestions((prev) => (prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]))
  }, [])

  return (
    <ToolLayout title="Interview Question Generator" description="Prepare for interviews with role-specific questions">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Job Role</label>
            <select value={role} onChange={(e) => handleRoleChange(e.target.value)} className="input-field">
              {Object.keys(questionsByRole).map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Years of Experience</label>
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="space-y-3">
          {questions.map((question, i) => (
            <div
              key={i}
              className="card p-4 cursor-pointer hover:border-accent transition-colors"
              onClick={() => handleToggleQuestion(question)}
            >
              <div className="flex gap-3 items-start">
                <input
                  type="checkbox"
                  checked={selectedQuestions.includes(question)}
                  onChange={() => {}}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-medium">{question}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedQuestions.length > 0 && (
          <div className="card p-4 bg-accent/5 border-accent">
            <div className="text-sm font-semibold mb-3">Selected Questions ({selectedQuestions.length})</div>
            <div className="space-y-2 text-sm">
              {selectedQuestions.map((q, i) => (
                <div key={i} className="flex gap-2">
                  <span className="font-semibold">{i + 1}.</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
