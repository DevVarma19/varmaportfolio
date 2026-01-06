import React from 'react';
import { experience } from '../mock';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className={`border-slate-700 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm transition-all glow-on-hover ${
                exp.featured ? 'border-l-4 border-l-cyan-500' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-xl font-semibold gradient-text">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
