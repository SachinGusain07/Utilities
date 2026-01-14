"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("")
  const [flags, setFlags] = useState("g")
  const [testString, setTestString] = useState("")
  const [error, setError] = useState("")

  const results = useMemo(() => {
    setError("")
    try {
      const regex = new RegExp(pattern, flags)
      const matches = [...testString.matchAll(regex)]
      return matches
    } catch (e) {
      setError(e.message)
      return []
    }
  }, [pattern, flags, testString])

  const highlightedText = useMemo(() => {
    if (!pattern || error || results.length === 0) return testString

    try {
      const regex = new RegExp(pattern, flags.includes("g") ? flags : flags + "g")
      return testString.replace(regex, (match) => `__HIGHLIGHT__${match}__/HIGHLIGHT__`)
    } catch {
      return testString
    }
  }, [pattern, flags, testString, results, error])

  return (
    <ToolLayout title="Regex Tester" description="Test and debug regular expressions with live feedback">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium mb-2">Regular Expression</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter regex pattern..."
                className="input-field flex-1 font-mono"
              />
              <div className="flex gap-1 bg-muted p-2 rounded-lg">
                {["g", "i", "m"].map((flag) => (
                  <button
                    key={flag}
                    onClick={() => setFlags(flags.includes(flag) ? flags.replace(flag, "") : flags + flag)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      flags.includes(flag) ? "bg-accent text-accent-foreground" : "bg-background text-foreground"
                    }`}
                  >
                    {flag}
                  </button>
                ))}
              </div>
            </div>
            {error && <div className="text-destructive text-sm mt-1">{error}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Matches Found</label>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold text-accent">{results.length}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Test String</label>
            <textarea
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              placeholder="Enter text to test..."
              className="textarea-field h-64"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Matches</label>
            <div className="h-64 overflow-y-auto border border-border rounded-lg p-3 bg-muted">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((match, i) => (
                    <div key={i} className="p-2 bg-background rounded border border-accent/30 font-mono text-sm">
                      <div className="font-semibold">{match[0]}</div>
                      {match.length > 1 && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {match.slice(1).map((g, j) => (
                            <div key={j}>
                              Group {j + 1}: {g}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-muted-foreground text-sm">No matches found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
