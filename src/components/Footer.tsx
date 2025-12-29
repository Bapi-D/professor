import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-playfair font-bold text-foreground">
              Dr. Subhrajyoti Deb
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {['Home', 'About', 'Research', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Research Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { name: 'Scholar', url: 'https://scholar.google.co.in/citations?user=rT50NMAAAAAJ&hl=en' },
              { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Subhrajyoti-Deb' },
              { name: 'ORCID', url: 'https://orcid.org/0000-0001-6939-0113' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors group"
                aria-label={link.name}
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
