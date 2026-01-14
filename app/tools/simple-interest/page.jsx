import SimpleInterestTool from "@/components/tools/SimpleInterestTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Simple Interest Calculator - Calculate Interest Easily",
  "Calculate simple interest on loans and investments instantly.",
  "simple interest calculator, interest calculation, finance",
)

export default function SimpleInterestPage() {
  return <SimpleInterestTool />
}
