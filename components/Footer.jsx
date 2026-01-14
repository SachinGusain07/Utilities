import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-foreground">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#text-tools" className="hover:text-accent transition-colors">
                  Text Tools
                </a>
              </li>
              <li>
                <a href="/#image-tools" className="hover:text-accent transition-colors">
                  Image Tools
                </a>
              </li>
              <li>
                <a href="/#calculators" className="hover:text-accent transition-colors">
                  Calculators
                </a>
              </li>
              <li>
                <a href="/#security-tools" className="hover:text-accent transition-colors">
                  Security Tools
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-accent transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/Utilities"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/Utilities"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Utilities" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground mb-6">
            <p>&copy; {currentYear} Utilities. All rights reserved. Free online tools for productivity.</p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Utilities",
                url: "https://utilities-vnhk.vercel.app",
                logo: "https://utilities-vnhk.vercel.app/logo.png",
                description: "Free online tools for text processing, image conversion, calculations, and security",
                sameAs: [
                  "https://twitter.com/Utilities",
                  "https://linkedin.com/company/Utilities",
                  "https://github.com/Utilities",
                ],
              }),
            }}
          />
        </div>
      </div>
    </footer>
  )
}
