import React from 'react';
import { SECTION_ICONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ExperienceItem } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h3>
);

const ExperienceCard: React.FC<{ item: ExperienceItem; delay: number; reverse: boolean; compact: boolean }> = React.memo(({ item, delay, reverse, compact }) => (
    <div 
        className={`experience-card glass-card ${compact ? 'p-4' : 'p-8'} flex flex-col md:flex-row items-center gap-6 transform transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/60 fade-in-up ${reverse ? 'md:flex-row-reverse' : ''}`}
        style={{ transitionDelay: `${delay}ms`}}
    >
        <div className="card-shine" />
        <div className="flex-shrink-0 z-10">
            <item.icon className="w-14 h-14" />
        </div>
        <div className={`z-10 text-center md:text-left ${reverse ? 'md:text-right' : ''}`}>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
        </div>
    </div>
));

const Experience: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();

    const experienceItems: ExperienceItem[] = t.experience.items.map(item => ({
        ...item,
        icon: SECTION_ICONS[item.id] || (() => null),
    }));

    const gap = compact ? 'gap-4' : 'gap-8';

    return (
        <div className={!compact ? "py-12 bg-transparent" : ""}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!compact && <SectionTitle>{t.experience.title}</SectionTitle>}
                <div className={`grid grid-cols-1 ${gap} max-w-4xl mx-auto`}>
                    {experienceItems.map((item, index) => (
                        <ExperienceCard key={item.id} item={item} delay={index * 150} reverse={false} compact={compact} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;