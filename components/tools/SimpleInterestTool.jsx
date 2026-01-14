"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function SimpleInterestTool() {
  const [principal, setPrincipal] = useState("100000")
  const [rate, setRate] = useState("8")
  const [time, setTime] = useState("5")

  const results = useMemo(() => {
    const P = Number.parseFloat(principal) || 0
    const r = Number.parseFloat(rate) / 100 || 0
    const t = Number.parseFloat(time) || 0

    const interest = P * r * t
    const amount = P + interest

    return {
      principal: P,
      interest: interest.toFixed(2),
      amount: amount.toFixed(2),
    }
  }, [principal, rate, time])

  return (
    <ToolLayout title="Simple Interest Calculator" description="Calculate simple interest on loans and investments">
      <div className="max-w-md mx-auto">
        <div className="space-y-6">
          <div className="card space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Principal Amount (₹)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Time Period (Years)</label>
              <input
                type="number"
                step="0.5"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="space-y-3">
            <ResultBox label="Principal" value={results.principal.toFixed(2)} />
            <ResultBox label="Simple Interest" value={results.interest} highlight />
            <ResultBox label="Total Amount" value={results.amount} />
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}

function ResultBox({ label, value, highlight }) {
  return (
    <div className={`card p-4 ${highlight ? "border-accent" : ""}`}>
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">{label}</span>
        <span className={`text-2xl font-bold ${highlight ? "text-accent" : ""}`}>₹{value}</span>
      </div>
    </div>
  )
}
