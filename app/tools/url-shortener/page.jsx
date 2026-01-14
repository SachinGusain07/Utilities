import URLShortenerTool from "@/components/tools/URLShortenerTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "URL Shortener",
  "Generate short URL aliases and track basic statistics.",
  "url shortener, link shortener, short url generator",
)

export default function URLShortenerPage() {
  return <URLShortenerTool />
}
