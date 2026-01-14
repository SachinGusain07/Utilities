"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function LoanCalculatorTool() {
  const [principal, setPrincipal] = useState("500000")
  const [rate, setRate] = useState("8")
  const [months, setMonths] = useState("120")

  const results = useMemo(() => {
    const P = Number.parseFloat(principal) || 0
    const r = Number.parseFloat(rate) / 100 / 12 || 0
    const n = Number.parseFloat(months) || 0

    if (r === 0) {
      const emi = n > 0 ? P / n : 0
      return {
        emi,
        totalAmount: P + emi * n,
        totalInterest: emi * n,
      }
    }

    const emi = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1)
    const totalAmount = emi * n
    const totalInterest = totalAmount - P

    return { emi, totalAmount, totalInterest }
  }, [principal, rate, months])

  return (
    <ToolLayout title="Loan Calculator" description="Calculate loan EMI and total interest">
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
              <label className="block text-sm font-medium mb-2">Loan Duration (Months)</label>
              <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="input-field" />
            </div>
          </div>

          <div className="space-y-3">
            <ResultBox label="Monthly EMI" value={results.emi.toFixed(2)} />
            <ResultBox label="Total Interest" value={results.totalInterest.toFixed(2)} highlight />
            <ResultBox label="Total Amount Payable" value={results.totalAmount.toFixed(2)} />
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
