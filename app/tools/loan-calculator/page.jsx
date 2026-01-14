import LoanCalculatorTool from "@/components/tools/LoanCalculatorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Loan Calculator",
  "Calculate loan EMI, interest, and amortization schedule.",
  "loan calculator, emi calculator, loan interest calculator",
)

export default function LoanCalculatorPage() {
  return <LoanCalculatorTool />
}
