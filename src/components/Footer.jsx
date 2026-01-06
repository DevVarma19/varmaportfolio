import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 gradient-text">{personalInfo.name}</h3>
            <p className="text-slate-400 text-sm">{personalInfo.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
