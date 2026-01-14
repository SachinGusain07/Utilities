import HashGeneratorTool from "@/components/tools/HashGeneratorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Hash Generator",
  "Generate MD5, SHA1, SHA256, and SHA512 hashes instantly.",
  "hash generator, md5 generator, sha256 generator",
)

export default function HashGeneratorPage() {
  return <HashGeneratorTool />
}
