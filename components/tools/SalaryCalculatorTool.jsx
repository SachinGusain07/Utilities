"use client"

import { useState, useMemo } from "react"
import ToolLayout from "@/components/ToolLayout"

export default function SalaryCalculatorTool() {
  const [basicSalary, setBasicSalary] = useState("500000")
  const [hra, setHra] = useState("100000")
  const [da, setDa] = useState("50000")
  const [taxRate, setTaxRate] = useState("20")
  const [deductions, setDeductions] = useState("0")

  const results = useMemo(() => {
    const basic = Number.parseFloat(basicSalary) || 0
    const hraAmount = Number.parseFloat(hra) || 0
    const daAmount = Number.parseFloat(da) || 0
    const tax = Number.parseFloat(taxRate) || 0
    const ded = Number.parseFloat(deductions) || 0

    const grossSalary = basic + hraAmount + daAmount
    const taxAmount = (grossSalary * tax) / 100
    const netSalary = grossSalary - taxAmount - ded

    return {
      grossSalary,
      taxAmount,
      totalDeductions: taxAmount + ded,
      netSalary,
      monthlyNet: netSalary / 12,
    }
  }, [basicSalary, hra, da, taxRate, deductions])

  return (
    <ToolLayout title="Salary Calculator" description="Calculate gross, net, and take-home salary">
      <div className="max-w-md mx-auto space-y-6">
        <div className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Basic Salary (Annual)</label>
            <input
              type="number"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">HRA (Annual)</label>
            <input type="number" value={hra} onChange={(e) => setHra(e.target.value)} className="input-field" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">DA (Annual)</label>
            <input type="number" value={da} onChange={(e) => setDa(e.target.value)} className="input-field" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tax Rate (%)</label>
            <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="input-field" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Other Deductions</label>
            <input
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="space-y-3">
          <ResultBox label="Gross Salary (Annual)" value={results.grossSalary.toFixed(2)} />
          <ResultBox label="Total Deductions" value={results.totalDeductions.toFixed(2)} highlight />
          <ResultBox label="Net Salary (Annual)" value={results.netSalary.toFixed(2)} />
          <ResultBox label="Monthly Net Salary" value={results.monthlyNet.toFixed(2)} />
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
        <span className={`text-xl font-bold ${highlight ? "text-accent" : ""}`}>₹{value}</span>
      </div>
    </div>
  )
}
