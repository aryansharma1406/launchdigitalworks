import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Launch Digital Works</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Transforming digital presence for startups and ambitious brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Branding & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:launchdigitalworks@gmail.com" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  launchdigitalworks@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9879619815" className="text-muted-foreground hover:text-accent transition-colors font-light">
                  9879619815
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/launchdigitalworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors font-light"
                >
                  @launchdigitalworks
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground font-light">&copy; 2026 Launch Digital Works. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://www.instagram.com/launchdigitalworks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors font-light"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
