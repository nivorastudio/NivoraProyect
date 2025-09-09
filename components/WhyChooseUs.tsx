import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WhyChooseUsItem } from '../types';
import { CheckmarkIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h3>
);

const AdvantageCard: React.FC<{ item: WhyChooseUsItem; delay: number; compact: boolean }> = ({ item, delay, compact }) => (
    <div 
        className={`advantage-card flex items-start ${compact ? 'space-x-3 p-4' : 'space-x-4 p-6'} glass-card fade-in-up`}
        style={{ transitionDelay: `${delay}ms`}}
    >
        <div className="flex-shrink-0 mt-1">
            <div className="icon-pulse flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 transition-transform">
                <CheckmarkIcon className="w-5 h-5 text-indigo-400" />
            </div>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();
    const gap = compact ? 'gap-4' : 'gap-8';
    
    return (
        <div className={!compact ? "py-12 bg-transparent" : ""}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!compact && <SectionTitle>{t.whyChooseUs.title}</SectionTitle>}
                <div className={`grid grid-cols-1 ${gap} max-w-4xl mx-auto`}>
                    {t.whyChooseUs.items.map((item, index) => (
                        <AdvantageCard key={item.id} item={item} delay={index * 150} compact={compact} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;