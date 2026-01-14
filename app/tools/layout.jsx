import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ToolsLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="container-custom py-8 md:py-12 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
