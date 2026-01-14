import PDFMergerTool from "@/components/tools/PDFMergerTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "PDF Merger",
  "Merge multiple PDF files into one. Free online tool.",
  "pdf merger, combine pdf, merge pdf files, pdf combiner",
)

export default function PDFMergerPage() {
  return <PDFMergerTool />
}
