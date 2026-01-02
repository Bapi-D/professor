import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { 
    name: 'Research', 
    href: '#research',
    submenu: [
      { name: 'Publications', href: '#publications' },
      { name: 'Conferences', href: '#conferences' },
    ]
  },
  { name: 'Books', href: '#books' },
  { 
    name: 'Invited Talk', 
    href: '#invited-talks',
    submenu: [
      { name: 'Guest', href: '#guest' },
      { name: 'Expert Talk', href: '#expert-talk' },
    ]
  },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="flex flex-col"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-xl md:text-2xl font-playfair font-bold text-foreground">
            Subhrajyoti Deb
          </span>
          <span className="text-xs md:text-sm text-muted-foreground">
            Assistant Professor at IIIT Bhopal
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 link-underline"
              >
                {item.name}
                {item.submenu && <ChevronDown className="w-3 h-3" />}
              </a>
              
              {/* Dropdown - with solid background */}
              {item.submenu && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl p-2 shadow-xl z-50"
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden lg:block px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full text-sm hover:bg-primary/90 transition-all duration-300 amber-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card mt-2 mx-4 rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 300);
                    }}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
                            setTimeout(() => {
                              const element = document.querySelector(subItem.href);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 300);
                          }}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full mt-4"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;