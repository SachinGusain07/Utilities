import ImageConverterTool from "@/components/tools/ImageConverterTool"
import { generateMetaTags } from "@/lib/utils"

export const metadata = generateMetaTags(
  "Image Converter",
  "Convert images between JPG, PNG, and WebP formats.",
  "image converter, format converter, jpg to png, png to webp",
)

export default function ImageConverterPage() {
  return <ImageConverterTool />
}
