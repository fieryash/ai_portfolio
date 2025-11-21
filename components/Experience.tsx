import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative scroll-mt-28">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-white mr-4">Work History</h2>
          <div className="h-px bg-cyan-900 flex-grow"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon on Timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-cyan-600 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <h4 className="text-cyan-400 font-mono">{job.company}</h4>
                  </div>
                  <span className="text-sm text-slate-500 font-mono mt-2 sm:mt-0">{job.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {job.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-400 text-sm leading-relaxed flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">›</span>
                      <span>
                        {point.replace(/\*\*/g, '')} {/* Simple cleanup if markdown bold exists */}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;