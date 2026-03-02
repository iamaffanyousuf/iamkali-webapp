import { motion } from "motion/react";
import { Terminal, Code, Database, Network, Shield, Cpu } from "lucide-react";
import { Link } from "react-router";
import { tutorials } from "../data/tutorials";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  icon: string;
  articles: number;
  difficulty: string;
  slug: string;
}

interface TutorialsSectionProps {
  tutorials: Tutorial[];
}

const iconMap = {
  terminal: Terminal,
  code: Code,
  database: Database,
  network: Network,
  shield: Shield,
  cpu: Cpu,
};

export function TutorialsSection({ tutorials: mockTutorials }: TutorialsSectionProps) {
  // Map to actual tutorials data for linking
  const displayTutorials = tutorials.slice(0, mockTutorials.length);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-chart-4/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono neon-purple">
              &gt; TUTORIALS_DATABASE
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-chart-4/50"></div>
          </div>
          <p className="text-center font-mono text-chart-4/70">
            [SYSTEM: Browse comprehensive learning resources]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTutorials.map((tutorial, index) => {
            const IconComponent = iconMap[tutorial.icon as keyof typeof iconMap] || Terminal;
            
            return (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-card border-2 border-chart-4/30 p-6 neon-border-purple hover:border-chart-4/60 transition-all cursor-pointer group"
              >
                <Link to={`/tutorials/${tutorial.slug}`} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 border-2 border-primary/50 group-hover:border-primary transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border ${
                      tutorial.difficulty === 'BEGINNER' 
                        ? 'border-primary/50 text-primary/70'
                        : tutorial.difficulty === 'INTERMEDIATE'
                        ? 'border-chart-3 text-chart-3'
                        : 'border-destructive text-destructive'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-mono text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    $ {tutorial.title}
                  </h3>

                  <p className="font-mono text-sm text-primary/60 mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                    <span className="font-mono text-xs text-primary/50">
                      {tutorial.articles} articles
                    </span>
                    <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">
                      ACCESS &gt;
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}