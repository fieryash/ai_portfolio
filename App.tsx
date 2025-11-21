import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ChatBot from './components/ChatBot';
import { CONTACT_INFO, EDUCATION, PUBLICATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        
        {/* Education & Publications (Simplified Section) */}
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-white">{EDUCATION.school}</h4>
                            <span className="text-cyan-500 font-mono text-sm">{EDUCATION.gpa} GPA</span>
                        </div>
                        <p className="text-slate-400 mb-2">{EDUCATION.degree}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{EDUCATION.period}</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Publications</h3>
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                        {PUBLICATIONS.map((pub, idx) => (
                             <div key={idx}>
                                <p className="text-slate-300 italic">"{pub.title}"</p>
                                <p className="text-cyan-500 text-sm mt-2">- {pub.publisher}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-black py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{CONTACT_INFO.name}</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">Email</a>
            <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={`https://${CONTACT_INFO.github}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Built with React, Tailwind & Gemini API.
          </p>
        </div>
      </footer>
      
      <ChatBot />
    </div>
  );
};

export default App;