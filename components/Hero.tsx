import React, { useState, useEffect, useCallback } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Typewriter: React.FC<{ phrases: string[]; className: string }> = ({ phrases, className }) => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;

    const tick = useCallback(() => {
        const currentPhrase = phrases[phraseIndex];
        const updatedText = isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === currentPhrase) {
            // Pause at the end of the phrase
            setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
    }, [text, isDeleting, phraseIndex, phrases]);

    useEffect(() => {
        const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, text]); // 'text' dependency ensures this runs for each character change

    return (
        <p className={className}>
            {text}
            <span className="cursor-blink">|</span>
        </p>
    );
};

const AnimatedOrb: React.FC = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="hero-orb absolute w-full h-full">
            <div 
                className="orb-ring absolute inset-0 border border-indigo-500/30 rounded-full"
                style={{ transform: 'rotateY(70deg) rotateX(10deg) scale(1)' }}
            />
            <div 
                className="orb-ring absolute inset-0 border border-purple-500/30 rounded-full"
                style={{ transform: 'rotateY(-60deg) rotateX(45deg) scale(0.85)' }}
            />
            <div 
                className="orb-ring absolute inset-0 border border-indigo-500/20 rounded-full"
                style={{ transform: 'rotateZ(30deg) rotateX(-50deg) scale(0.7)' }}
            />
            <div 
                className="orb-ring absolute inset-0 border border-purple-500/30 rounded-full"
                style={{ transform: 'rotateY(10deg) rotateX(80deg) rotateZ(-25deg) scale(0.95)' }}
            />
        </div>
        <div className="orb-core relative w-[60%] h-[60%] bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-2xl shadow-indigo-500/50 flex items-center justify-center">
            <div className="w-full h-full bg-slate-900/50 rounded-full backdrop-blur-sm"></div>
        </div>
    </div>
);


const Hero: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <div className="min-h-screen flex items-center bg-transparent pt-28 pb-12 md:pt-0 md:pb-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-center">
                    <div className="text-center md:text-left relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight fade-in-up">
                           <span className="text-gradient">{t.hero.greeting}</span>
                        </h1>
                        <Typewriter 
                             phrases={t.hero.intro}
                             className="mt-6 text-lg text-slate-400 max-w-xl mx-auto md:mx-0 fade-in-up min-h-[5rem]"
                        />
                        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 fade-in-up" style={{ transitionDelay: '600ms' }}>
                            <a href="#contact" className="btn btn-primary">
                                {t.hero.cta1}
                            </a>
                            <a href="#services" className="btn btn-secondary">
                                {t.hero.cta2}
                            </a>
                        </div>
                        <div className="mt-8 flex justify-center md:justify-start space-x-4 fade-in-up" style={{ transitionDelay: '450ms' }}>
                            {SOCIAL_LINKS.map(social => (
                                <a 
                                    key={social.name} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 social-icon"
                                    aria-label={t.socials[social.id]}
                                >
                                    <social.icon className="w-8 h-8" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center fade-in-up hero-orb-container w-full max-w-[300px] h-auto aspect-square sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto opacity-60 md:opacity-70 -mt-8 sm:-mt-16 md:mt-0">
                        <AnimatedOrb />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;