import HTMLFormatterTool from "@/components/tools/HTMLFormatterTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "HTML Formatter - Format & Beautify HTML Code",
  "Format, beautify, and minify HTML code. Clean up messy HTML instantly.",
  "HTML formatter, HTML beautifier, code formatter",
)

export default function HTMLFormatterPage() {
  return <HTMLFormatterTool />
}
