import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'MediConnect: Healthcare Chatbot',
    tech: 'React, TypeScript, LLM, Pinecone Vector DB, OCR, FAISS',
    description: 'Build an intelligent chatbot platform where patients can upload health documents & doctors can interact with uploaded patient data.',
    highlights: [
      'Built a secure patient-doctor chatbot model with OCR based document processing, semantic search and encrypted storage.',
      'Integrated RAG pipeline with LLM to provide evidence-cited answers.',
      'Build a chatbot where  doctors can query entire patient history and interact with stored patient data.',
    ],
    gradient: 'from-primary to-secondary',
    github: 'https://github.com/GauravHote1107/MediConnect_AIML-Project', 
  },
  {
    title: 'Cost-Effective Scaling of Machine Learning Model using Serverless architecture',
    tech: 'AWS Lambda, AWS EC2',
    description: 'Compare AWS Lambda and EC2 performance for ML model deployment.',
    highlights: [
      'Engineered a serverless architecture using AWS Lambda that decreased model inference latency by 37% (from 450 ms to 280 ms) compared to traditional EC2 deployments.',
      'Demonstrated cost savings and scalability of serverless computing.',
      'Deployed AWS CloudWatch for continuous performance tracking and optimization.',
      'resulted in 10× improved response time.'
    ],
    gradient: 'from-secondary to-accent',
    github: '', // 🔗 Added GitHub link
  },
  {
    title: 'Holistic Sentiment Analysis Platform',
    tech: 'Python, HTML, CSS, JavaScript, MySQL, NLP, Web Scraping',
    description: '',
    highlights: [
      'Developed a flask based web application that performs sentiment analysis on product reviews from multiple e-commerce platforms.',
      'Implemented a review analysis using NLP (TextBlob, NLTK) and web scraping (Beautiful Soup) to process customer reviews.',
      'Added visualizations including word clouds and sentiment distribution charts to enhance user insights.',
    ],
    gradient: 'from-accent to-primary',
    github: 'https://github.com/GauravHote1107/WT_CP_G12', 
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 relative" id="projects">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-orbitron tracking-widest text-secondary">[ PROJECT DATABASE ]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-glow-secondary mb-4">FEATURED BUILDS</h2>
          <p className="text-xl text-muted-foreground">Innovative solutions that make an impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="gaming-border bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-rajdhani mb-4">
                  {project.tech}
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="gaming-border bg-primary/10 hover:bg-primary/20 text-primary border-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gaming-border"
                    onClick={() => window.open(project.github, '_blank')} // ✅ Open GitHub link
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
