import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ShoppingCart } from 'lucide-react';

const books = [
  {
    title: "Securing the Digital World: A Comprehensive Guide to Multimedia Security",
    authors: "Subhrajyoti Deb and Aditya Kumar Sahu",
    publisher: "CRC Press Taylor and Francis Group",
    isbn: "9781032663623",
    amazonLink: "https://www.amazon.in/Securing-Digital-World-Comprehensive-Multimedia-ebook/dp/B0DQXHDBRK/",
    description: "A comprehensive guide covering the latest techniques and methodologies in multimedia security, including image encryption, secure communication, and cryptographic protocols.",
  }
];

export function BooksSection() {
  return (
    <section id="books" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-widest uppercase"
            >
              Published Works
            </motion.span>
            <h2 className="section-heading mt-4">
              Authored <span className="gradient-text">Books</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Comprehensive guides and academic publications on information security and cryptography.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Book Cover */}
                  <div className="w-full md:w-48 flex-shrink-0">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden glass-card border border-primary/20">
                      <img
                        src="/book.jpg"
                        alt="Book Cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-playfair font-bold text-foreground leading-tight">
                      "{book.title}"
                    </h3>
                    
                    <p className="text-primary font-medium">
                      {book.authors}
                    </p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">Publisher:</span> {book.publisher}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">ISBN:</span> {book.isbn}
                      </p>
                    </div>

                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {book.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <motion.a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all duration-300 hover:bg-primary/90 amber-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Buy on Amazon
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BooksSection;