import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    title: "Post-Doctoral Research at ISI Kolkata",
    description: "Visiting Scientist at Applied Statistics Unit, Indian Statistical Institute, Kolkata under Prof. Subhamoy Maitra",
    year: "2020-2021",
    icon: Star,
    color: "primary"
  },
  {
    title: "20+ Research Publications",
    description: "Published in high-impact SCI/SCIE journals including IEEE Transactions, ACM Transactions, and Springer journals",
    year: "Ongoing",
    icon: Award,
    color: "accent"
  },
  {
    title: "Authored Book - CRC Press",
    description: "'Securing the Digital World: A Comprehensive Guide to Multimedia Security' published by Taylor and Francis",
    year: "2024",
    icon: Trophy,
    color: "primary"
  },
  {
    title: "International Conference Convener",
    description: "Convener of MICA 2023 - International Conference on Advanced Communications and Machine Intelligence",
    year: "2023",
    icon: Medal,
    color: "accent"
  },
  {
    title: "Guest Editor - IEEE COMSOC",
    description: "Guest Editor for IEEE COMSOC MMTC Communications - Frontiers Special Issue on IoT Applications",
    year: "2023",
    icon: Star,
    color: "primary"
  },
  {
    title: "International Expert Talks",
    description: "Delivered expert lectures at prestigious institutions including NTU Singapore, IIT Kharagpur, and NIT Agartala",
    year: "2021-2024",
    icon: Award,
    color: "accent"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative bg-secondary/30">
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
              Recognition & Accomplishments
            </motion.span>
            <h2 className="section-heading mt-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 card-hover group"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  achievement.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                    achievement.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AchievementsSection;