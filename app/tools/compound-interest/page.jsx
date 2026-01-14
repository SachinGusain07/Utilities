import CompoundInterestTool from "@/components/tools/CompoundInterestTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Compound Interest Calculator - Calculate Investment Returns",
  "Calculate compound interest on investments with flexible time periods and interest rates.",
  "compound interest calculator, investment returns, financial calculator",
)

export default function CompoundInterestPage() {
  return <CompoundInterestTool />
}
