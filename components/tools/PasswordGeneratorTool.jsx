"use client"

import { useState, useCallback, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"
import { copyToClipboard } from "../../lib/utils"

const generatePassword = (options) => {
  let chars = ""
  if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz"
  if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (options.numbers) chars += "0123456789"
  if (options.symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"

  let password = ""
  for (let i = 0; i < options.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

const calculateStrength = (password) => {
  let strength = 0
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^a-zA-Z0-9]/.test(password)) strength++
  return strength
}

export default function PasswordGeneratorTool() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  })

  const strength = useMemo(() => calculateStrength(password), [password])

  const handleGenerate = useCallback(() => {
    const newPassword = generatePassword({ ...options, length })
    setPassword(newPassword)
  }, [length, options])

  const strengthLabel = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"][strength] || "Very Weak"
  const strengthColor =
    ["text-destructive", "text-orange-500", "text-yellow-500", "text-blue-500", "text-accent", "text-green-500"][
      strength
    ] || "text-destructive"

  return (
    <ToolLayout title="Password Generator" description="Create strong, secure passwords with customizable options">
      <div className="max-w-md mx-auto space-y-6">
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Length: {length}</label>
            <input
              type="range"
              min="4"
              max="128"
              value={length}
              onChange={(e) => setLength(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            {Object.entries(options).map(([key, value]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
              </label>
            ))}
          </div>
        </div>

        <button onClick={handleGenerate} className="btn-primary w-full">
          Generate Password
        </button>

        {password && (
          <div className="card space-y-3">
            <div className="bg-muted p-4 rounded-lg font-mono text-center break-all">{password}</div>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-semibold ${strengthColor}`}>Strength: {strengthLabel}</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    strength < 2 ? "bg-destructive" : strength < 4 ? "bg-yellow-500" : "bg-accent"
                  }`}
                  style={{ width: `${(strength / 6) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => copyToClipboard(password)} className="btn-secondary flex-1">
                Copy
              </button>
              <button onClick={handleGenerate} className="btn-secondary flex-1">
                Regenerate
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
