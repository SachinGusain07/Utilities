import ResumeKeywordCheckerTool from "@/components/tools/ResumeKeywordCheckerTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Resume Keyword Checker",
  "Check your resume for important keywords and ATS optimization.",
  "resume keywords, ats checker, resume optimization, ats keywords",
)

export default function ResumeKeywordCheckerPage() {
  return <ResumeKeywordCheckerTool />
}
