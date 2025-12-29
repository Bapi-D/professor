import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Let's Connect</span>
            <h2 className="section-heading mt-4">Get In <span className="gradient-text">Touch</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
              <div className="glass-card p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="text-lg font-semibold text-foreground">Location</h3><p className="text-muted-foreground">IIIT Bhopal, Madhya Pradesh, India</p></div>
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Research Profiles</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Google Scholar', url: 'https://scholar.google.co.in/citations?user=rT50NMAAAAAJ&hl=en' },
                    { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Subhrajyoti-Deb' },
                    { name: 'ORCID', url: 'https://orcid.org/0000-0001-6939-0113' },
                  ].map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors">
                      <span className="text-foreground">{link.name}</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="glass-card p-8">
              <form className="space-y-6">
                <div><label className="block text-sm font-medium text-foreground mb-2">Name</label><input type="text" className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none text-foreground" placeholder="Your name" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Email</label><input type="email" className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none text-foreground" placeholder="your@email.com" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Message</label><textarea rows={4} className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none text-foreground resize-none" placeholder="Your message..." /></div>
                <button type="submit" className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 teal-glow hover:bg-primary/90 transition-all"><Send className="w-5 h-5" />Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
