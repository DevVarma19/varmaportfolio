import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo } from '../mock';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'View my repositories',
      href: personalInfo.github
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 grid-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to full-time Data Engineer opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, idx) => (
            <Card key={idx} className="hover:shadow-2xl transition-all border-slate-700 bg-slate-800/50 backdrop-blur-sm border-t-4 border-t-cyan-500 glow-on-hover">
              <CardContent className="p-6">
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white mb-1">
                      {method.label}
                    </p>
                    <p className="text-sm text-slate-400">{method.value}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
