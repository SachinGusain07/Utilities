import PDFCompressorTool from "@/components/tools/PDFCompressorTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "PDF Compressor",
  "Compress PDF files to reduce size. Free online tool.",
  "pdf compressor, pdf reducer, compress pdf, pdf optimizer",
)

export default function PDFCompressorPage() {
  return <PDFCompressorTool />
}
