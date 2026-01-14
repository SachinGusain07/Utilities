import GSTCalculatorTool from "@/components/tools/GSTCalculatorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "GST Calculator",
  "Calculate GST for Indian businesses. Find net, gross, and GST amounts.",
  "gst calculator, gst computation, indian tax calculator",
)

export default function GSTCalculatorPage() {
  return <GSTCalculatorTool />
}
