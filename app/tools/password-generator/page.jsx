import PasswordGeneratorTool from "@/components/tools/PasswordGeneratorTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Password Generator",
  "Generate strong, random passwords with custom options.",
  "password generator, random password, secure password",
)

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorTool />
}
