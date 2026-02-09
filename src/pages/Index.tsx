import { ParticleBackground } from '@/components/ParticleBackground';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border/50 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-rajdhani">
            © 2025 Gaurav Hote. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2 font-orbitron">
            [ SYSTEM VERSION 1.0 ]
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
