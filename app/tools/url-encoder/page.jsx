import URLEncoderTool from "@/components/tools/URLEncoderTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "URL Encoder/Decoder",
  "Encode and decode URLs instantly. Prepare URLs for safe transmission.",
  "url encoder, url decoder, url converter",
)

export default function URLEncoderPage() {
  return <URLEncoderTool />
}
