import React from 'react';
import { projects } from '../mock';
import { ExternalLink, Github, FileText, Lightbulb, Wrench, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Highlighted work demonstrating data engineering expertise and AI/ML capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600 flex flex-col"
            >
              <CardHeader>
                <div className="space-y-3">
                  <Badge variant="outline" className="w-fit text-blue-700 border-blue-600">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {project.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Lightbulb className="h-4 w-4 text-amber-600" />
                      <span className="text-sm uppercase tracking-wide">Problem</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Wrench className="h-4 w-4 text-blue-600" />
                      <span className="text-sm uppercase tracking-wide">Solution</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm uppercase tracking-wide">Impact</span>
                    </div>
                    <ul className="space-y-1.5">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                          <span className="text-slate-700 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <p className="text-slate-900 font-semibold text-sm uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-white border border-slate-200 text-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Publication Badge if exists */}
                  {project.publication && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-900">
                            {project.publication.title}
                          </p>
                          <p className="text-xs text-slate-600">
                            {project.publication.venue} • {project.publication.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-6 pt-6 border-t">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-slate-50"
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
                      className="flex-1 hover:bg-slate-50"
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
                      className="flex-1 hover:bg-slate-50"
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
