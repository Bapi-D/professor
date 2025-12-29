import { motion } from 'framer-motion';
import { ExternalLink, FileText, Award, Mic } from 'lucide-react';

const publications = [
  {
    title: 'Enhancing Image Security via Block Cyclic Construction and DNA Based LFSR',
    journal: 'IEEE Transactions on Consumer Electronics',
    year: '2024',
    impact: 'IF: 4.3',
    type: 'SCI',
    authors: 'Subhrajyoti Deb, Abhilash Das, Bhaskar Biswas, Joy Lal Sarkar, et al.',
  },
  {
    title: 'Event-Triggered Sliding Mode Controller for Cognitive Internet of Things',
    journal: 'IEEE Transactions on Network and Service Management',
    year: '2024',
    impact: 'IF: 4.7',
    type: 'SCI',
    authors: 'Abhijt Biswas, Subhrajyoti Deb, Nirmalya Kar, et al.',
  },
  {
    title: 'An applied Image Cryptosystem on Moore\'s Automaton operating on δ(qk)/F2',
    journal: 'ACM Transactions on Multimedia Computing, Communications, and Applications',
    year: '2023',
    impact: 'IF: 5.1',
    type: 'SCI',
    authors: 'Subhrajyoti Deb, Abhilash Das and Nirmalya Kar',
  },
  {
    title: 'A Novel Hybrid Authentication Protocol utilizing Lattice-based Cryptography for IoT devices',
    journal: 'Digital Communications and Networks',
    year: '2023',
    impact: 'IF: 7.9',
    type: 'SCI',
    authors: 'Kumar Sekhar Roy, Subhrajyoti Deb, and Hemanta Kumar Kalita',
  },
  {
    title: 'Chaos-based medical image encryption scheme using special nonlinear filtering function based LFSR',
    journal: 'Multimedia Tools and Applications',
    year: '2021',
    impact: 'IF: 2.7',
    type: 'SCI',
    authors: 'Subhrajyoti Deb, and Bubu Bhuyan',
  },
  {
    title: 'Design of Key-dependent Bijective S-Boxes for Color image Cryptosystem',
    journal: 'Optik',
    year: '2022',
    impact: 'IF: 3.1',
    type: 'SCI',
    authors: 'Subhrajyoti Deb, and Pratap Behera',
  },
];

const conferences = [
  {
    title: 'SAHA: An SDN Enabled Fog Architecture for Healthcare Applications',
    venue: '25th International Conference on Distributed Computing and Networking',
    year: '2024',
    publisher: 'ACM',
    authors: 'Joy Lal Sarkar, Sheng-Lung Peng, Subhrajyoti Deb, et al.',
  },
  {
    title: 'A Fast and Secure Image Cryptosystem Based on New Row Column Index Manipulator',
    venue: 'International Conference on Cryptology & Network Security with Machine Learning',
    year: '2023',
    publisher: 'Springer LNNS',
    authors: 'Durgabati Podder, and Subhrajyoti Deb',
  },
  {
    title: 'Design of a new Folding XOR algorithm based chaotic image cryptosystem',
    venue: '12th International Conference on Computing, Communication and Sensor Network',
    year: '2023',
    publisher: 'Springer LNEE',
    authors: 'Durgabati Podder, Khondekar Lutful Hassan, Kumar Sekhar Roy, and Subhrajyoti Deb',
  },
  {
    title: 'Advanced Image Encryption Scheme Using Snow Stream Cipher',
    venue: 'Emerging Trends in Electrical, Communications, and Information Technologies',
    year: '2020',
    publisher: 'Springer LNEE',
    authors: 'Subhrajyoti Deb, Bhaskar Biswas, and Bubu Bhuyan',
  },
];

const researchLinks = [
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.co.in/citations?user=rT50NMAAAAAJ&hl=en',
    icon: '📚',
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Subhrajyoti-Deb',
    icon: '🔬',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0001-6939-0113',
    icon: '🆔',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-32 relative">
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
              Academic Contributions
            </motion.span>
            <h2 className="section-heading mt-4">
              Research & <span className="gradient-text">Publications</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Over 20 publications in prestigious SCI/Scopus indexed journals, focusing on 
              cryptography, image security, and lightweight cipher design.
            </p>
          </div>

          {/* Research Profile Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {researchLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-4 flex items-center gap-3 card-hover border border-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="font-medium text-foreground">{link.name}</span>
                <ExternalLink className="w-4 h-4 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 mb-12 text-center bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border border-primary/20"
          >
            <p className="text-lg text-foreground">
              <span className="text-primary font-semibold">To know more about my research achievements,</span>{' '}
              check the links above for my complete publication list and citation metrics.
            </p>
          </motion.div>

          {/* Publications Section */}
          <div id="publications" className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">Journal Publications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground leading-snug line-clamp-2">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-primary font-medium">{pub.journal}</p>
                      <p className="text-xs text-muted-foreground">{pub.authors}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20">
                          {pub.year}
                        </span>
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium border border-accent/20">
                          {pub.type}
                        </span>
                        <span className="px-2 py-1 bg-secondary text-foreground text-xs rounded-full border border-border">
                          {pub.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conferences Section */}
          <div id="conferences">
            <div className="flex items-center gap-3 mb-8">
              <Mic className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">Conference Papers</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {conferences.map((conf, index) => (
                <motion.div
                  key={conf.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 card-hover border-l-4 border-accent"
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground leading-snug">
                      {conf.title}
                    </h4>
                    <p className="text-sm text-accent font-medium">{conf.venue}</p>
                    <p className="text-xs text-muted-foreground">{conf.authors}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium border border-accent/20">
                        {conf.year}
                      </span>
                      <span className="px-2 py-1 bg-secondary text-foreground text-xs rounded-full border border-border">
                        {conf.publisher}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Publications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://scholar.google.co.in/citations?user=rT50NMAAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full teal-glow hover:bg-primary/90 transition-all duration-300"
            >
              <Award className="w-5 h-5" />
              View All 20+ Publications
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResearchSection;
