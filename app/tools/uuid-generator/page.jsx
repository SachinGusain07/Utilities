import UUIDGeneratorTool from "@/components/tools/UUIDGeneratorTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "UUID Generator",
  "Generate unique UUID (v4) identifiers instantly. Perfect for databases and APIs.",
  "uuid generator, guid generator, unique id generator",
)

export default function UUIDGeneratorPage() {
  return <UUIDGeneratorTool />
}
