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
            <div className="md:hidden">
                <div className="sticky top-[72px] z-20 bg-slate-900/80 backdrop-blur-lg">
                    <div className="container mx-auto px-2">
                        <nav ref={tabsRef} className="relative flex border-b border-slate-800" aria-label="Tabs">
                            {currentTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    data-tab-id={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 whitespace-nowrap py-4 px-1 font-medium text-sm transition-colors text-center focus:outline-none ${
                                        activeTab === tab.id
                                            ? 'text-indigo-400'
                                            : 'text-slate-400 hover:text-slate-300'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                             <span
                                className="absolute bottom-[-1px] h-0.5 bg-indigo-500 transition-all duration-300 ease-in-out"
                                style={indicatorStyle}
                            />
                        </nav>
                    </div>
                </div>
                
                <div className="py-12 bg-slate-900/40">
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