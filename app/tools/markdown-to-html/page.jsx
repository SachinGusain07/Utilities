import MarkdownToHTMLTool from "@/components/tools/MarkdownToHTMLTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Markdown to HTML",
  "Convert Markdown to HTML instantly. Supports all Markdown syntax.",
  "markdown converter, markdown to html, html converter",
)

export default function MarkdownToHTMLPage() {
  return <MarkdownToHTMLTool />
}
