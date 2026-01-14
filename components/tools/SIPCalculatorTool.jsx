"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function SIPCalculatorTool() {
  const [monthlyAmount, setMonthlyAmount] = useState("10000")
  const [months, setMonths] = useState("60")
  const [annualRate, setAnnualRate] = useState("12")

  const results = useMemo(() => {
    const P = Number.parseFloat(monthlyAmount) || 0
    const n = Number.parseFloat(months) || 0
    const r = Number.parseFloat(annualRate) / 100 / 12 || 0

    if (r === 0) {
      return {
        invested: P * n,
        returns: 0,
        maturity: P * n,
      }
    }

    const maturity = P * (((1 + r) ** n - 1) / r) * (1 + r)
    const invested = P * n
    const returns = maturity - invested

    return { invested, returns, maturity }
  }, [monthlyAmount, months, annualRate])

  return (
    <ToolLayout title="SIP Calculator" description="Calculate returns on Systematic Investment Plans">
      <div className="max-w-md mx-auto">
        <div className="space-y-6">
          <div className="card space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Investment</label>
              <input
                type="number"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(e.target.value)}
                placeholder="Enter monthly amount"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Investment Duration (Months)</label>
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="Enter months"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Annual Return Rate (%)</label>
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                placeholder="Enter rate"
                className="input-field"
              />
            </div>
          </div>

          <div className="space-y-3">
            <ResultBox label="Total Invested" value={results.invested.toFixed(2)} />
            <ResultBox label="Estimated Returns" value={results.returns.toFixed(2)} highlight />
            <ResultBox label="Maturity Value" value={results.maturity.toFixed(2)} />
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
