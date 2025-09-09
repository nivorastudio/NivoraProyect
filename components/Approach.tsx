import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ApproachPhase } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h2>
);

const PhaseCard: React.FC<{ phase: ApproachPhase; index: number; delay: number }> = React.memo(({ phase, index, delay }) => (
    <div 
        className="approach-card group rounded-xl flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-slate-900/40 hover:bg-slate-800/60 hover:-translate-y-2 fade-in-up" 
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="phase-number">0{index + 1}</div>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{phase.title}</h3>
            <p className="text-slate-400">{phase.description}</p>
        </div>
    </div>
));

const Approach: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();
    const phases = t.approach.items;

    return (
        <div className={compact ? "" : "py-12 bg-slate-900/40"}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!compact && <SectionTitle>{t.approach.title}</SectionTitle>}
                <div className="approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <PhaseCard key={phase.id} phase={phase} index={index} delay={index * 150} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Approach;
