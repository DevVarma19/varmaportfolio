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
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            I'm currently open to full-time Data Engineer opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Centered Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all border-t-4 border-t-blue-600">
              <CardContent className="p-6">
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-4 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <div className="p-4 bg-blue-50 rounded-lg text-blue-600">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900 mb-1">
                      {method.label}
                    </p>
                    <p className="text-sm text-slate-600">{method.value}</p>
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
