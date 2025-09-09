import React, { useState, ComponentType, SVGProps } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { UsersIcon, GemIcon, MegaphoneIcon, SparkleIcon } from './Icons';
import { AIIdea } from '../types';

const iconMap: { [key: string]: ComponentType<SVGProps<SVGSVGElement>> } = {
    default: GemIcon,
    target: UsersIcon,
    proposition: GemIcon,
    value: GemIcon,
    marketing: MegaphoneIcon,
    action: MegaphoneIcon,
};

const getIconForTitle = (title: string): ComponentType<SVGProps<SVGSVGElement>> => {
    const lowerCaseTitle = title.toLowerCase();
    if (lowerCaseTitle.includes('audience') || lowerCaseTitle.includes('público')) return iconMap.target;
    if (lowerCaseTitle.includes('proposition') || lowerCaseTitle.includes('propuesta') || lowerCaseTitle.includes('valor')) return iconMap.value;
    if (lowerCaseTitle.includes('marketing') || lowerCaseTitle.includes('acción')) return iconMap.marketing;
    return iconMap.default;
};


const SkeletonCard: React.FC = () => (
    <div className="glass-card p-6 w-full animate-pulse h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-slate-700 rounded-lg"></div>
            <div className="h-6 bg-slate-700 rounded-md w-3/4"></div>
        </div>
        <div className="h-4 bg-slate-700 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-slate-700 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-slate-700 rounded-md w-5/6"></div>
    </div>
);

const ResultCard: React.FC<{ idea: AIIdea }> = ({ idea }) => {
    const Icon = getIconForTitle(idea.title);
    return (
        <div className="glass-card p-6 flex flex-col h-full text-left">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/50 border border-indigo-700/60 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gradient">{idea.title}</h3>
            </div>
            <p className="text-slate-400 flex-grow">{idea.content}</p>
        </div>
    );
};


const ResultsDisplay: React.FC<{ ideas: AIIdea[] }> = ({ ideas }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="fade-in-up">
            {/* Mobile Carousel */}
            <div className="md:hidden">
                <div className="relative overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    >
                        {ideas.map((idea, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-2">
                                <ResultCard idea={idea} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {ideas.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-indigo-500 w-6' : 'bg-slate-600 hover:bg-slate-500'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                {ideas.map((idea, index) => (
                    <ResultCard key={index} idea={idea} />
                ))}
            </div>
        </div>
    );
};


const AIIdeaLab: React.FC = () => {
    const { t } = useLanguage();
    const [userInput, setUserInput] = useState('');
    const [ideas, setIdeas] = useState<AIIdea[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || showComingSoon) return;

        setShowComingSoon(true);
        setTimeout(() => {
            setShowComingSoon(false);
        }, 4000); // Hide after 4 seconds
    };
    
    return (
        <div className="py-12 bg-slate-900/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 fade-in-up">
                    {t.aiIdeaLab.title} <span className="text-gradient">.</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8 fade-in-up" style={{ transitionDelay: '150ms' }}>
                    {t.aiIdeaLab.subheading}
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12 fade-in-up" style={{ transitionDelay: '300ms' }}>
                    <div className="relative">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder={t.aiIdeaLab.placeholder}
                            className="w-full pl-4 pr-36 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300"
                            aria-label="Your business idea"
                            disabled={showComingSoon}
                        />
                        <button 
                            type="submit"
                            className="btn btn-primary absolute right-2 top-1/2 -translate-y-1/2 !py-2.5 !px-6"
                            disabled={!userInput.trim() || showComingSoon}
                        >
                            {t.aiIdeaLab.button}
                        </button>
                    </div>
                </form>

                <div className="max-w-6xl mx-auto min-h-[90px]">
                    {showComingSoon && (
                        <div 
                           className="fade-in-up is-visible inline-flex items-center gap-4 bg-purple-900/50 border border-purple-700 text-purple-300 px-6 py-3 rounded-lg max-w-md mx-auto"
                           role="alert"
                        >
                            <SparkleIcon className="w-6 h-6 flex-shrink-0" />
                            <div className="text-left">
                                <p className="font-bold">{t.aiIdeaLab.comingSoonTitle}</p>
                                <p className="text-sm">{t.aiIdeaLab.comingSoonText}</p>
                            </div>
                        </div>
                    )}

                    {isLoading && (
                        <>
                            {/* Mobile Skeleton */}
                            <div className="md:hidden max-w-sm mx-auto">
                                <SkeletonCard />
                            </div>
                            {/* Desktop Skeleton */}
                            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                                <SkeletonCard />
                                <SkeletonCard />
                                <SkeletonCard />
                            </div>
                        </>
                    )}
                    {error && (
                         <div className="text-red-400 bg-red-900/50 border border-red-800 rounded-lg p-4 max-w-md mx-auto">
                            {error}
                        </div>
                    )}
                    {ideas.length > 0 && (
                        <ResultsDisplay ideas={ideas} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIIdeaLab;