import React, { useState, useRef, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import WhyChooseUs from './WhyChooseUs';
import { useLanguage } from '../contexts/LanguageContext';

const AboutWrapper: React.FC = () => {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');
    const tabsRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({});

    const tabsData = {
        en: [
            { id: 'about', label: 'About Us' },
            { id: 'experience', label: 'Our Edge' },
            { id: 'whyUs', label: 'Why Choose Us?' },
        ],
        es: [
            { id: 'about', label: 'Nosotros' },
            { id: 'experience', label: 'Nuestra Ventaja' },
            { id: 'whyUs', label: '¿Por Qué Elegirnos?' },
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
        
    }, [activeTab, language, t]);

    return (
        <>
            {/* Mobile Tabbed View */}
            <div className="md:hidden py-12 bg-slate-900/40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 fade-in-up">
                        {t.about.heading}
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
                        <div className={activeTab === 'about' ? 'block' : 'hidden'}>
                            <About compact />
                        </div>
                        <div className={activeTab === 'experience' ? 'block' : 'hidden'}>
                            <Experience compact />
                        </div>
                        <div className={activeTab === 'whyUs' ? 'block' : 'hidden'}>
                            <WhyChooseUs compact />
                        </div>
                    </div>
                </div>
            </div>


            {/* Desktop Stacked View */}
            <div className="hidden md:block">
                <About />
                <Experience />
                <WhyChooseUs />
            </div>
        </>
    );
};

export default AboutWrapper;