import { motion } from 'framer-motion';
import { Mic, Users, Calendar, MapPin } from 'lucide-react';

const guestEditorials = [
  {
    title: "IEEE COMSOC MMTC Communications - Frontiers",
    date: "Feb 2023",
    description: "SPECIAL ISSUE ON Recent advances in the Internet of Things (IoTs) and its applications.",
    collaborators: "With Guest Editors Sheng-Lung Peng, Ramasamy V and Valentina E. Balas",
    type: "Guest Editorial"
  },
  {
    title: "International Conference on Advanced Communications and Machine Intelligence (MICA 2023)",
    date: "1-2 November 2023",
    description: "Convener of the international conference jointly organized by ICFAI University Tripura and NIT Warangal.",
    type: "Conference Convener"
  }
];

const expertTalks = [
  {
    title: "Cryptography & Security",
    venue: "Division of Mathematical Sciences, School of Physical & Mathematical Sciences, Nanyang Technological University",
    date: "20-10-2024 to 25-10-2024",
    type: "Invited Talk"
  },
  {
    title: "Revealing the Education of Cybersecurity: The Skill of Ethical Hacking within IoT Context",
    venue: "IIT Kharagpur - CE&T course 'Hands-on Introduction to IoT with Machine Learning'",
    date: "28-12-2023",
    type: "Expert Lecture"
  },
  {
    title: "Unveiling Cybersecurity Learning: The Art of Hacking",
    venue: "UGC Short Term Course in 'Cyber Security', Department of IT, NEHU Shillong, India",
    date: "05-12-2023",
    type: "Expert Lecture"
  },
  {
    title: "Visual Cryptography and its Analysis",
    venue: "AICTE STTP phase 2 on 'Machine Learning and Computer Vision', Department of CSE, TIT Agartala, Tripura",
    date: "25-03-2022",
    type: "Expert Lecture"
  },
  {
    title: "Multimedia Data Encryption",
    venue: "AICTE ATAL workshop on 'Cyber Security and Cryptography', Department of CSE, NIT Agartala, Tripura",
    date: "27-07-2021",
    type: "Expert Lecture"
  },
  {
    title: "Research Paper Writing & Presentation through Overleaf",
    venue: "Department of CSE, National Institute of Technical Teachers Training & Research, Sector-26, Chandigarh",
    date: "18-02-2021",
    type: "Expert Lecture"
  }
];

export function InvitedTalksSection() {
  return (
    <section id="invited-talks" className="py-24 relative">
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
              Speaking Engagements
            </motion.span>
            <h2 className="section-heading mt-4">
              Invited <span className="gradient-text">Talks</span>
            </h2>
          </div>

          {/* Guest Editorial Section */}
          <div id="guest" className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Guest Editorial / Conference
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {guestEditorials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 card-hover"
                >
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                    {item.type}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  {item.collaborators && (
                    <p className="text-primary text-sm mb-2">
                      {item.collaborators}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expert Talk Section */}
          <div id="expert-talk">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-accent/10 rounded-xl">
                <Mic className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Expert Talks
              </h3>
            </motion.div>

            <div className="space-y-4">
              {expertTalks.map((talk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {talk.type}
                      </span>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        "{talk.title}"
                      </h4>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{talk.venue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default InvitedTalksSection;