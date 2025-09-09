import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
    activeSection: string;
}

const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    } as T;
};

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-1 bg-slate-800/80 p-1 rounded-full">
            <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                aria-pressed={language === 'en'}
            >
                EN
            </button>
            <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${language === 'es' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                 aria-pressed={language === 'es'}
            >
                ES
            </button>
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();
    const navRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    // Effect for scrolled appearance and hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            setIsScrolled(currentScrollY > 50);

            // Hide on scroll down, show on scroll up. The threshold prevents hiding on small jitters.
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) { 
                setIsHeaderVisible(false);
            } else { 
                setIsHeaderVisible(true);
            }
            
            lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
        };
        
        const throttledHandleScroll = throttle(handleScroll, 100);

        if (!mobileMenuOpen) {
            window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        }

        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [mobileMenuOpen]);

    useEffect(() => {
        const activeLink = navRef.current?.querySelector(`[data-section="${activeSection}"]`);
        if (activeLink instanceof HTMLElement) {
            setIndicatorStyle({
                width: activeLink.offsetWidth,
                left: activeLink.offsetLeft,
            });
        }
    }, [activeSection, t.navLinks]); // Rerun when language changes links

    // Effect to control body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Force header to be visible when menu is open, in case it was hidden by scroll
            setIsHeaderVisible(true); 
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup function to restore scroll on component unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-6xl transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                <div className="container mx-auto px-2 sm:px-4">
                    <div className={`rounded-full shadow-lg p-2 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg' : 'bg-transparent'}`}>
                        <a href="#home" className="text-xl font-bold text-white pl-4 pr-2 flex-shrink-0">
                            Nivora<span className="text-indigo-400">Proyect</span>
                        </a>
                        
                        {/* Desktop Navigation */}
                        <nav ref={navRef} className="hidden md:flex items-center justify-center relative bg-slate-800/50 rounded-full">
                            <span 
                                className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full transition-all duration-300 ease-in-out"
                                style={indicatorStyle}
                            />
                            <div className="relative flex items-center p-1">
                                {t.navLinks.map(link => (
                                    <a 
                                        key={link.href} 
                                        href={link.href}
                                        data-section={link.href.substring(1)}
                                        className={`text-base font-medium transition-colors duration-300 px-4 py-2 rounded-full whitespace-nowrap ${activeSection === link.href.substring(1) ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </nav>

                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none p-2" aria-label="Open menu">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer & Overlay */}
            <div 
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Overlay */}
                <div 
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute inset-0 bg-black/60"
                    aria-hidden="true"
                />

                {/* Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-slate-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobile-menu-title"
                >
                    <div className="flex items-center justify-between p-4 border-b border-slate-800">
                        <h2 id="mobile-menu-title" className="text-lg font-bold text-white">Navigation</h2>
                        <button 
                            onClick={() => setMobileMenuOpen(false)} 
                            className="text-slate-400 hover:text-white p-2 rounded-full -mr-2"
                            aria-label="Close menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex-grow p-4 flex flex-col">
                        <div className="flex-grow space-y-2">
                            {t.navLinks.map(link => (
                                <a 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-left text-lg font-medium transition-colors duration-300 p-3 rounded-md ${activeSection === link.href.substring(1) ? 'text-white bg-indigo-600' : 'text-slate-300 hover:bg-slate-800'}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-center">
                            <LanguageSwitcher />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;