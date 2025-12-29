import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-28 pb-16">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with icon and title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-2"
        >
          {/* User shield icon placeholder */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
            <span className="text-2xl font-bold gradient-text">SD</span>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              About me,
            </h2>
            <div className="yellow-bar w-48 mt-2" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I was born in Tripura, a beautiful Northeastern region, as the 
              son of a school teacher. While I may see myself as a research 
              scholar, my students know me as a faculty member specializing in 
              <span className="text-accent font-medium"> Information Security</span>. I love teaching, writing research papers, 
              exploring the mysteries of secure communication, guiding young 
              minds, and developing innovative solutions for a safer digital world.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              Beyond academia, I enjoy reading world literature and writing for 
              Bengali newspapers. The hills and jungles have always fascinated 
              me. I spent nearly five years completing my Ph.D. at NEHU Shillong, 
              another hilly region that became a significant part of my journey. 
              Cricket has always been my passion, though I missed many important 
              things because of it. I also find deep meaning in Vedic spiritual science, 
              which helps me reflect on life and existence.
            </p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 border-l-4 border-accent italic"
            >
              <p className="text-lg text-foreground/90 font-playfair">
                '"As Swami Vivekananda said, 'Whatever you think, that you will be. 
                If you think yourself weak, weak you will be; 
                if you think yourself strong, you will be strong.'"
              </p>
            </motion.blockquote>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#education"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full flex items-center gap-2 amber-glow transition-all duration-300 hover:bg-primary/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Journey
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Slider Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card p-4 rounded-2xl overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic6.jpg"
                        alt="Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic4.jpg"
                        alt="Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic2.jpg"
                        alt="Image 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic3.jpg"
                        alt="Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                   <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic1.jpg"
                        alt="Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                   <CarouselItem>
                    <div className="aspect-[4/4] rounded-xl overflow-hidden">
                      <img
                        src="/pic5.jpg"
                        alt="Image 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 left-4 right-4 glass-card p-4 flex justify-around"
            >
              <div className="text-center">
                <span className="text-2xl font-playfair font-bold gradient-text">20+</span>
                <p className="text-xs text-muted-foreground">Publications</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-playfair font-bold gradient-text">5+</span>
                <p className="text-xs text-muted-foreground">Years Research</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-playfair font-bold gradient-text">ISI</span>
                <p className="text-xs text-muted-foreground">Post-Doc</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;