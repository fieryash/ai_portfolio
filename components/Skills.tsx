import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-900 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-white mr-4">Technical Arsenal</h2>
          <div className="h-px bg-cyan-900 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 font-mono">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;