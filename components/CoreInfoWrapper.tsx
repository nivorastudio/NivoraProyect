import React, { useState, useRef, useEffect } from 'react';
import Skills from './Skills';
import Approach from './Approach';
import TechShowcase from './TechShowcase';
import { useLanguage } from '../contexts/LanguageContext';

const CoreInfoWrapper: React.FC = () => {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('services');
    const tabsRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({});

    const tabsData = {
        en: [
            { id: 'services', label: 'Services' },
            { id: 'process', label: 'Process' },
            { id: 'tech', label: 'Technologies' },
        ],
        es: [
            { id: 'services', label: 'Servicios' },
            { id: 'process', label: 'Proceso' },
            { id: 'tech', label: 'Tecnologías' },
        ]
    };

    const currentTabs = tabsData[language];

    useEffect(() => {
        const updateIndicator = () => {
            const tabsNode = tabsRef.current;
            if (!tabsNode) return;

            const activeLink = tabsNode.querySelector<HTMLButtonElement>(`[data-tab-id="${activeTab}"]`);
            if (activeLink) {
                requestAnimationFrame(() => {
                    setIndicatorStyle({
                        width: `${activeLink.offsetWidth}px`,
                        left: `${activeLink.offsetLeft}px`,
                    });
                });
            }
        };

        updateIndicator();

        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeTab, language]);

    return (
        <>
            {/* Mobile Tabbed View */}
            <div className="md:hidden py-12 bg-slate-900/40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 fade-in-up">
                        {t.skills.title} <span className="text-gradient">.</span>
                    </h2>

                    <div className="mb-8 fade-in-up border-b border-slate-800" style={{ transitionDelay: '150ms' }}>
                        <nav ref={tabsRef} className="relative flex -mb-px" aria-label="Tabs" role="tablist">
                            {currentTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    data-tab-id={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 whitespace-nowrap py-4 px-2 text-center font-medium text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-indigo-500 ${
                                        activeTab === tab.id
                                            ? 'text-indigo-400'
                                            : 'text-slate-400 hover:text-white'
                                    }`}
                                    aria-selected={activeTab === tab.id}
                                    role="tab"
                                >
                                    {tab.label}
                                </button>
                            ))}
                            <span
                                className="absolute bottom-0 h-[2px] bg-indigo-500 rounded-t-full transition-all duration-300 ease-in-out"
                                style={indicatorStyle}
                            />
                        </nav>
                    </div>

                    <div className="fade-in-up" style={{ transitionDelay: '300ms' }}>
                        <div className={activeTab === 'services' ? 'block' : 'hidden'}>
                            <Skills compact />
                        </div>
                        <div className={activeTab === 'process' ? 'block' : 'hidden'}>
                            <Approach compact />
                        </div>
                        <div className={activeTab === 'tech' ? 'block' : 'hidden'}>
                            <TechShowcase compact />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Stacked View */}
            <div className="hidden md:block">
                <Skills />
                <Approach />
                <TechShowcase />
            </div>
        </>
    );
};

export default CoreInfoWrapper;