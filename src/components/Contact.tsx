import { Mail, Phone, MapPin, Github, Linkedin, Code, FileText } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-secondary">[ ESTABLISH CONNECTION ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow-secondary mb-4">GET IN TOUCH</h2>
          <p className="text-xl text-muted-foreground">Let's collaborate and build something amazing together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-8 animate-slide-in-left">
            <h3 className="text-2xl font-orbitron font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <a
                href="mailto:gauravhote13@gmail.com"
                className="flex items-center gap-4 group hover:text-primary transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-rajdhani font-semibold">gauravhote13@gmail.com</div>
                </div>
              </a>

              <a
                href="tel: +918975067411"
                className="flex items-center gap-4 group hover:text-secondary transition-colors"
              >
                <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-rajdhani font-semibold">+91 8975067411</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-rajdhani font-semibold">Pune, Maharashtra - 411038</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-lg font-orbitron font-bold mb-4">Connect Online</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110 box-glow"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gauravhote1107/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-secondary/20 transition-all hover:scale-110 box-glow-secondary"
                >
                  <Linkedin className="h-6 w-6 text-secondary" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110"
                >
                  <FileText className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-accent/20 transition-all hover:scale-110"
                >
                  <Code className="h-6 w-6 text-accent" />
                </a>
              </div>
            </div>
          </div>

          <div className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl p-8 animate-slide-in-right">
            <h3 className="text-2xl font-orbitron font-bold mb-6">Quick Message</h3>
            <p className="text-foreground/80 mb-6">
              Looking for a passionate developer to join your team or collaborate on an exciting project?
              <br />
              Let's connect and create something extraordinary!
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Current Status</div>
                <div className="font-rajdhani font-semibold text-primary">
                  🟢 Available for opportunities
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Interests</div>
                <div className="font-rajdhani font-semibold">
                  Full-Stack Development • Data Science • AI/ML • Cloud Computing
                </div>
              </div>

              <Button
                className="w-full gaming-border bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-orbitron font-bold"
                size="lg"
                onClick={() => window.open('mailto:gauravhote13@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
