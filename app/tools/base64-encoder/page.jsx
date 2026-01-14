import Base64Tool from "@/components/tools/Base64Tool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Base64 Encoder/Decoder",
  "Encode and decode Base64 text instantly. Convert text to Base64 and vice versa.",
  "base64 encoder, base64 decoder, base64 converter",
)

export default function Base64Page() {
  return <Base64Tool />
}
