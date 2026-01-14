import RegexTesterTool from "@/components/tools/RegexTesterTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Regex Tester",
  "Test and debug regular expressions instantly with visual feedback.",
  "regex tester, regex debugger, regular expression tester",
)

export default function RegexTesterPage() {
  return <RegexTesterTool />
}
