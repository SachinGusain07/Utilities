import InterviewGeneratorTool from "@/components/tools/InterviewGeneratorTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Interview Question Generator",
  "Generate practice interview questions for your role and prepare better.",
  "interview questions, job interview, interview preparation",
)

export default function InterviewGeneratorPage() {
  return <InterviewGeneratorTool />
}
