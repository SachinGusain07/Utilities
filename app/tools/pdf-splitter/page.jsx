import PDFSplitterTool from "@/components/tools/PDFSplitterTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "PDF Splitter",
  "Split PDF files into individual pages. Free online tool.",
  "pdf splitter, split pdf, pdf page splitter, extract pdf pages",
)

export default function PDFSplitterPage() {
  return <PDFSplitterTool />
}
