import SIPCalculatorTool from "@/components/tools/SIPCalculatorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "SIP Calculator",
  "Calculate SIP returns on mutual fund investments.",
  "sip calculator, mutual fund calculator, investment calculator",
)

export default function SIPCalculatorPage() {
  return <SIPCalculatorTool />
}
