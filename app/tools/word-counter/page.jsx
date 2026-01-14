import WordCounterTool from "@/components/tools/WordCounterTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Word Counter - Count Words, Characters & Statistics",
  "Real-time word counter tool. Count words, characters, sentences, paragraphs, and get detailed text statistics instantly.",
  "word counter, character counter, text analysis",
)

export default function WordCounterPage() {
  return <WordCounterTool />
}
