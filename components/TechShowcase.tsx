import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TechShowcaseItem } from '../types';
import { AIIcon, ReactIcon, NodeJSIcon, CloudIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h2>
);

const componentMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    ai: AIIcon,
    react: ReactIcon,
    node: NodeJSIcon,
    cloud: CloudIcon,
};

const TechCard: React.FC<{ item: TechShowcaseItem; delay: number }> = React.memo(({ item, delay }) => {
    const Icon = componentMap[item.id];

    return (
        <div className="tech-card h-56 sm:h-64 w-full fade-in-up" style={{ transitionDelay: `${delay}ms` }}>
            <div className="tech-card-inner">
                {/* Front of the card */}
                <div className="tech-card-front bg-slate-800/50 border border-slate-700">
                    <Icon className="w-16 h-16 text-indigo-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                {/* Back of the card */}
                <div className="tech-card-back bg-indigo-600/20 border border-indigo-500/50">
                    <p className="text-slate-300">{item.description}</p>
                </div>
            </div>
        </div>
    );
});


const TechShowcase: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();

    const techItems: TechShowcaseItem[] = t.techShowcase.items.map(item => ({
        ...item,
        icon: componentMap[item.id],
    }));

    return (
        <div className={compact ? "" : "py-12 bg-transparent"}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!compact && (
                    <>
                        <SectionTitle>{t.techShowcase.title}</SectionTitle>
                        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 fade-in-up" style={{ transitionDelay: '150ms' }}>
                            {t.techShowcase.subheading}
                        </p>
                    </>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {techItems.map((item, index) => (
                        <TechCard key={item.id} item={item} delay={index * 150} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechShowcase;
