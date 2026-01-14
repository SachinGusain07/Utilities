"use client"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Utilities</h3>
            <p className="text-foreground/70">Your complete online toolkit for productivity.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#text-tools" className="hover:text-accent transition-colors">
                  Text Tools
                </a>
              </li>
              <li>
                <a href="#pdf-tools" className="hover:text-accent transition-colors">
                  PDF Tools
                </a>
              </li>
              <li>
                <a href="#image-tools" className="hover:text-accent transition-colors">
                  Image Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>Email: info@Utilities.app</li>
              <li>Twitter: @Utilitiesapp</li>
              <li>GitHub: Utilities</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; 2026 Utilities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
