import { Github, Linkedin, Mail, Code, FileText } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-left">
          <div className="inline-block">
            <div className="text-sm font-orbitron tracking-widest text-primary mb-4 animate-pulse-glow">
              {/* [ SYSTEM ONLINE ] */}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-glow mb-6">
            GAURAV
            <span className="block text-primary mt-2">HOTE</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-semibold text-muted-foreground">
            <span className="text-secondary text-glow-secondary">SOFTWARE DEVELOPER</span>
            <span className="mx-4 text-primary">|</span>
            <span className="text-accent text-glow-accent">AI / ML INNOVATOR</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer and AI/ML Enthusiast creating intelligent, scalable, next-generation applications with React, Node.js, and AI technologies.
            <br />
            <span className="text-primary font-semibold">210+ LeetCode problems solved</span> •
            <span className="text-secondary font-semibold"> National Level Project Competition</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="gaming-border bg-accent hover:bg-accent/90 text-accent-foreground font-orbitron font-bold group"
              onClick={() => window.open('https://drive.google.com/drive/folders/17Y2HbLHoe2mDo-uhOkxY7NQAIPGFMAmL?usp=drive_link', '_blank')}
            >
              <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              RESUME
            </Button>

            <Button
              size="lg"
              className="gaming-border bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="mr-2 h-5 w-5 group-hover:animate-glitch" />
              VIEW PROJECTS
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gaming-border border-secondary text-secondary hover:bg-secondary/10 font-orbitron font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              CONTACT
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/GauravHote1107"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravhote1107/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-secondary/20 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
            >
              <Linkedin className="h-6 w-6 text-secondary" />
            </a>
            <a
              href="mailto:gauravhote13@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-accent/20 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,110,0.5)]"
            >
              <Mail className="h-6 w-6 text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
