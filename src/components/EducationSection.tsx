import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, User } from 'lucide-react';

const educationData = [
  {
    institution: 'Indian Statistical Institute',
    location: 'Kolkata, India',
    degree: 'Post-Doctoral Visiting Scientist',
    department: 'Applied Statistics Unit',
    period: 'Oct 2020 - July 2021',
    supervisor: 'Prof. Subhamoy Maitra',
    color: 'from-primary/10 to-primary/5',
    accentColor: 'bg-primary',
  },
  {
    institution: 'North-Eastern Hill University',
    location: 'Shillong, India',
    degree: 'Ph.D.',
    department: 'Design and Analysis of Lightweight Stream Ciphers',
    period: 'Thesis Submitted - Sep 2020',
    supervisor: 'Prof. B Bhuyan',
    note: 'A Central University',
    color: 'from-accent/10 to-accent/5',
    accentColor: 'bg-accent',
  },
  {
    institution: 'National Institute of Technology Agartala',
    location: 'Jirania, India',
    degree: 'M.Tech.',
    department: 'Computer Science & Engineering',
    period: 'May 2015',
    supervisor: 'Dr. Nirmalya Kar',
    color: 'from-primary/10 to-accent/5',
    accentColor: 'bg-primary',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
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
              Academic Journey
            </motion.span>
            <h2 className="section-heading mt-4">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 ${edu.accentColor} rounded-full shadow-lg`} />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pl-0'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass-card p-6 card-hover bg-gradient-to-br ${edu.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${edu.accentColor}/10 rounded-xl shrink-0`}>
                        <GraduationCap className={`w-6 h-6 ${edu.accentColor === 'bg-primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-playfair font-bold text-foreground">
                            {edu.institution}
                          </h3>
                          {edu.note && (
                            <span className="text-xs text-accent font-medium">({edu.note})</span>
                          )}
                        </div>
                        
                        <p className={`text-lg font-semibold ${edu.accentColor === 'bg-primary' ? 'text-primary' : 'text-accent'}`}>{edu.degree}</p>
                        <p className="text-muted-foreground italic">{edu.department}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-accent" />
                            {edu.period}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm pt-2 border-t border-border/50">
                          <User className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Supervisor:</span>
                          <span className="text-foreground font-medium">{edu.supervisor}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;
