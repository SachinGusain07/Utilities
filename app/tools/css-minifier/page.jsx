import CSSMinifierTool from "@/components/tools/CSSMinifierTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "CSS Minifier - Minify & Compress CSS",
  "Minify CSS to reduce file size and improve performance.",
  "CSS minifier, CSS compressor, minify CSS",
)

export default function CSSMinifierPage() {
  return <CSSMinifierTool />
}
