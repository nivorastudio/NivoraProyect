import React from 'react';
import { SECTION_ICONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h2>
);

const SkillCard: React.FC<{ skill: Skill; delay: number }> = React.memo(({ skill, delay }) => (
    <div
        className="skill-card rounded-lg p-6 sm:p-8 text-center fade-in-up"
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="glow-effect" />
        <div className="card-content flex flex-col items-center">
            <div className="icon-container flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700">
                <skill.icon className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
            <p className="text-slate-400">{skill.description}</p>
        </div>
    </div>
));

const Skills: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const { t } = useLanguage();

    const skillsWithIcons: Skill[] = t.skills.items.map(skill => ({
        ...skill,
        icon: SECTION_ICONS[skill.id],
    }));

    return (
        <div className={compact ? "" : "py-12 bg-slate-900/40"}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!compact && <SectionTitle>{t.skills.title}</SectionTitle>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsWithIcons.map((skill, index) => (
                        <SkillCard key={skill.id} skill={skill} delay={index * 100} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
