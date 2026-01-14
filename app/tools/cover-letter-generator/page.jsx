import CoverLetterGeneratorTool from "@/components/tools/CoverLetterGeneratorTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Cover Letter Generator",
  "Generate professional cover letters with AI assistance.",
  "cover letter generator, cover letter template, job application",
)

export default function CoverLetterGeneratorPage() {
  return <CoverLetterGeneratorTool />
}
