import React from 'react';
import { experience } from '../mock';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className={`border-l-4 hover:shadow-lg transition-all ${
                exp.featured ? 'border-l-blue-600 bg-blue-50/30' : 'border-l-slate-300'
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      <h3 className="text-2xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-xl font-semibold text-blue-600">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
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
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">
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
