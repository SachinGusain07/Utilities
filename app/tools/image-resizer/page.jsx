import ImageResizerTool from "@/components/tools/ImageResizerTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "Image Resizer",
  "Resize images to any dimension. Fast and free online.",
  "image resizer, image resize, photo resizer, image scaler",
)

export default function ImageResizerPage() {
  return <ImageResizerTool />
}
