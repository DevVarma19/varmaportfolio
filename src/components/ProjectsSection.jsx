import React from 'react';
import { projects } from '../mock';
import { ExternalLink, Github, FileText, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 grid-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Highlighted work demonstrating data engineering expertise and AI/ML capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-2xl transition-all duration-300 border-slate-700 bg-slate-800/50 backdrop-blur-sm flex flex-col glow-on-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 animated-border"></div>
              <CardHeader>
                <div className="space-y-3">
                  <Badge variant="outline" className="w-fit text-cyan-400 border-cyan-500/50 bg-cyan-500/10">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-white">
                    {project.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <Lightbulb className="h-4 w-4 text-amber-400" />
                      <span className="text-sm uppercase tracking-wide">Problem</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <Wrench className="h-4 w-4 text-blue-400" />
                      <span className="text-sm uppercase tracking-wide">Solution</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm uppercase tracking-wide">Impact</span>
                    </div>
                    <ul className="space-y-1.5">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-slate-300 font-semibold text-sm uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-900/50 border border-slate-700 text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.publication && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <a
                            href={project.links.publication}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200 block"
                          >
                            {project.publication.title}
                          </a>
                          <p className="text-xs text-slate-400">
                            {project.publication.venue} • {project.publication.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-slate-700">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.links.publication && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                      onClick={() => window.open(project.links.publication, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
