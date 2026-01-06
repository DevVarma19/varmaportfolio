import React from 'react';
import { certifications } from '../mock';
import { Award, Cloud } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CertificationsSection = () => {
  const getIcon = (iconType) => {
    if (iconType === 'aws' || iconType === 'azure') {
      return <Cloud className="h-8 w-8 text-cyan-400" />;
    }
    return <Award className="h-8 w-8 text-cyan-400" />;
  };

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="hover:shadow-lg transition-all duration-300 border-slate-700 bg-slate-800/50 backdrop-blur-sm border-l-4 border-l-cyan-500 glow-on-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    {getIcon(cert.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-500">{cert.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
