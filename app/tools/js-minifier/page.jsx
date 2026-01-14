import JSMinifierTool from "@/components/tools/JSMinifierTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "JavaScript Minifier - Minify & Compress JS",
  "Minify JavaScript to reduce file size and improve performance.",
  "JavaScript minifier, JS minifier, minify JavaScript",
)

export default function JSMinifierPage() {
  return <JSMinifierTool />
}
