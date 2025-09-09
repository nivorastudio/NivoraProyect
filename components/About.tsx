import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WorldIcon } from './Icons';
import AIBrainAnimation from './AIBrainAnimation';

const TechStack: React.FC<{ stack: string[] }> = ({ stack }) => (
    <div className="flex flex-wrap gap-2 justify-center">
        {stack.map(tech => (
            <span key={tech} className="bg-slate-700/50 text-slate-300 font-medium px-3 py-1 rounded-md text-xs">
                {tech}
            </span>
        ))}
    </div>
);


const About: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();
    const techStack = ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "MongoDB"];

    const cardPadding = compact ? 'p-4' : 'p-8';
    const gap = compact ? 'gap-4' : 'gap-8';
    const gridMarginTop = compact ? 'mt-6' : 'mt-16';

    return (
        <div className={!compact ? "py-12 bg-slate-900/40" : ""}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto fade-in-up">
                    {!compact && (
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            {t.about.heading} <span className="text-gradient">.</span>
                        </h2>
                    )}
                    <p className="text-slate-400">
                       {t.about.p1}
                    </p>
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gap} ${gridMarginTop}`}>
                    {/* AI Partnership Card */}
                    <div className={`glass-card ${cardPadding} md:col-span-2 lg:col-span-1 fade-in-up flex flex-col`} style={{transitionDelay: '150ms'}}>
                        <AIBrainAnimation compact={compact} />
                        <div className="flex-grow flex flex-col">
                            <h4 className="text-xl font-bold text-white mb-2">{t.about.educationTitle}</h4>
                            <p className="text-slate-400 flex-grow">{t.about.educationText}</p>
                        </div>
                    </div>

                    {/* Tech Stack & Communication Cards */}
                    <div className={`flex flex-col ${gap} md:col-span-2`}>
                        <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
                            {/* Tech Stack */}
                             <div className={`glass-card ${cardPadding} fade-in-up`} style={{transitionDelay: '300ms'}}>
                                <h4 className="text-xl font-bold text-white mb-4">{t.about.techStackTitle}</h4>
                                <p className="text-slate-400 mb-6">{t.about.techStackText}</p>
                                <TechStack stack={techStack} />
                            </div>
                           {/* Timezone */}
                            <div className={`glass-card ${cardPadding} flex flex-col justify-center items-center text-center fade-in-up`} style={{transitionDelay: '450ms'}}>
                                <WorldIcon className={`mb-3 text-indigo-400 ${compact ? 'w-20 h-20' : 'w-24 h-24'}`} />
                                <h4 className="text-xl font-bold text-white leading-tight">{t.about.timezoneTitle}</h4>
                            </div>
                        </div>
                        {/* Freelance Work Card */}
                        <div className={`glass-card ${cardPadding} fade-in-up`} style={{transitionDelay: '600ms'}}>
                            <h4 className="text-xl font-bold text-white mb-2">{t.about.freelanceTitle}</h4>
                            <p className="text-slate-400">{t.about.freelanceText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;