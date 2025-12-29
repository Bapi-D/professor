import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    role: 'Assistant Professor',
    organization: 'IIIT Bhopal',
    location: 'Bhopal, India',
    period: 'Current',
    description: 'Teaching and research in Information Security, guiding research scholars.',
    current: true,
  },
  {
    role: 'Post-Doctoral Visiting Scientist',
    organization: 'Indian Statistical Institute',
    location: 'Kolkata, India',
    period: 'Oct 2020 - July 2021',
    description: 'Research in Applied Statistics and Cryptography under Prof. Subhamoy Maitra.',
    current: false,
  },
];

const achievements = [
  'Published 20+ research papers in prestigious SCI/Scopus indexed journals',
  'Post-doctoral research at the prestigious Indian Statistical Institute',
  'Specialized in Cryptography, Stream Ciphers, and Image Encryption',
  'Invited speaker at multiple national and international conferences',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Professional Journey</span>
            <h2 className="section-heading mt-4"><span className="gradient-text">Experience</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <motion.div key={exp.role} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className={`glass-card p-6 card-hover ${exp.current ? 'border-l-4 border-primary' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${exp.current ? 'bg-primary/10' : 'bg-secondary'}`}>
                      <Briefcase className={`w-5 h-5 ${exp.current ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                        {exp.current && <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">Current</span>}
                      </div>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm pt-2">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} id="achievements">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-8">Key Achievements</h3>
              <div className="glass-card p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <ul className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 border border-primary/20">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </span>
                      <p className="text-foreground/90 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;
