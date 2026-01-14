import QRCodeTool from "@/components/tools/QRCodeTool"
import { generateMetaTags } from "../../../lib/utils"

export const metadata = generateMetaTags(
  "QR Code Generator",
  "Generate QR codes from text or URLs instantly. Download as PNG.",
  "qr code generator, qr code maker, qr code creator",
)

export default function QRCodePage() {
  return <QRCodeTool />
}
