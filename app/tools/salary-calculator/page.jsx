import SalaryCalculatorTool from "@/components/tools/SalaryCalculatorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Salary Calculator",
  "Calculate take-home salary after taxes and deductions.",
  "salary calculator, tax calculator, payroll calculator",
)

export default function SalaryCalculatorPage() {
  return <SalaryCalculatorTool />
}
