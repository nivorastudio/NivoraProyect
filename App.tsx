import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GridBackground from './components/AnimatedGradient';
import { useLanguage } from './contexts/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import AboutWrapper from './components/AboutWrapper';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebsiteAuditor from './components/WebsiteAuditor';
import CoreInfoWrapper from './components/CallToAction';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const { language } = useLanguage();

    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        services: useRef<HTMLDivElement>(null),
        testimonials: useRef<HTMLDivElement>(null),
        'website-audit': useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };
    
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, []);

    const animationObserverCallback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        });

        const animationObserver = new IntersectionObserver(animationObserverCallback, { threshold: 0.1 });

        const currentRefs = Object.values(sectionRefs).map(ref => ref.current).filter(Boolean);

        currentRefs.forEach(ref => {
            if (ref) {
                observer.observe(ref);
                const elementsToAnimate = ref.querySelectorAll('.fade-in-up');
                elementsToAnimate.forEach(el => animationObserver.observe(el));
            }
        });

        return () => {
            currentRefs.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                    const elementsToAnimate = ref.querySelectorAll('.fade-in-up');
                    elementsToAnimate.forEach(el => animationObserver.unobserve(el));
                }
            });
        };
    }, [sectionRefs, observerCallback, animationObserverCallback]);


    return (
        <div className="relative">
            <a href="#main-content" className="absolute left-4 -top-12 z-50 rounded-b-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition-transform duration-300 focus:top-0">
                {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
            </a>
            <GridBackground />
            <ScrollProgress />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header activeSection={activeSection} />
                <main id="main-content" className="flex-grow">
                    <section id="home" ref={sectionRefs.home}>
                        <Hero />
                    </section>
                    <section id="about" ref={sectionRefs.about}>
                        <AboutWrapper />
                    </section>
                    <section id="services" ref={sectionRefs.services}>
                        <CoreInfoWrapper />
                    </section>
                    <section id="testimonials" ref={sectionRefs.testimonials}>
                        <Testimonials />
                    </section>
                    <section id="website-audit" ref={sectionRefs['website-audit']}>
                        <WebsiteAuditor />
                    </section>
                    <section id="contact" ref={sectionRefs.contact}>
                        <Contact />
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;