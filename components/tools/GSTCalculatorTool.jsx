"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function GSTCalculatorTool() {
  const [amount, setAmount] = useState("")
  const [gstRate, setGstRate] = useState("18")
  const [mode, setMode] = useState("exclude")

  const results = useMemo(() => {
    const num = Number.parseFloat(amount) || 0
    const rate = Number.parseFloat(gstRate) || 0

    if (mode === "exclude") {
      const gstAmount = (num * rate) / 100
      const totalAmount = num + gstAmount
      return { baseAmount: num, gstAmount, totalAmount }
    } else {
      const baseAmount = num / (1 + rate / 100)
      const gstAmount = num - baseAmount
      return { baseAmount, gstAmount, totalAmount: num }
    }
  }, [amount, gstRate, mode])

  return (
    <ToolLayout title="GST Calculator" description="Calculate GST for Indian businesses">
      <div className="max-w-md mx-auto">
        <div className="space-y-6">
          <div className="card">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">GST Rate (%)</label>
                <select value={gstRate} onChange={(e) => setGstRate(e.target.value)} className="input-field">
                  <option value="0">0%</option>
                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18">18%</option>
                  <option value="28">28%</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setMode("exclude")}
                  className={`btn flex-1 ${mode === "exclude" ? "btn-primary" : "btn-secondary"}`}
                >
                  Exclude GST
                </button>
                <button
                  onClick={() => setMode("include")}
                  className={`btn flex-1 ${mode === "include" ? "btn-primary" : "btn-secondary"}`}
                >
                  Include GST
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <ResultBox label="Base Amount" value={results.baseAmount.toFixed(2)} />
            <ResultBox label="GST Amount" value={results.gstAmount.toFixed(2)} highlight />
            <ResultBox label="Total Amount" value={results.totalAmount.toFixed(2)} />
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
