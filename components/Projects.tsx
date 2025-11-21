import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className="h-px bg-cyan-900 flex-grow"></div>
          <h2 className="text-3xl font-bold text-white ml-4">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full -mr-12 -mt-12 blur-xl group-hover:bg-cyan-500/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-cyan-600 font-mono text-xs mb-4 uppercase tracking-wide">{project.tech}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;