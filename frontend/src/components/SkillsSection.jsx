import React from 'react';
import { skills } from '../mock';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
