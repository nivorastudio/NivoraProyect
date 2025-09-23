import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 fade-in-up">
        {children} <span className="text-gradient">.</span>
    </h2>
);

const ProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => (
    <div 
        className="group relative glass-card aspect-video fade-in-up"
        style={{ transitionDelay: `${delay}ms`}}
    >
        <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
            fetchpriority="auto"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
            <div>
                <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-slate-700/80 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="py-12 bg-slate-900/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t.projects.title}</SectionTitle>
                <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 fade-in-up" style={{ transitionDelay: '150ms' }}>
                    {t.projects.subheading}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => (
                        <ProjectCard key={project.id} project={project} delay={index * 150} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;