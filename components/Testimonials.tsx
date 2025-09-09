import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Testimonial } from '../types';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2 fade-in-up">
        <span className="text-gradient">{children}</span>
    </h2>
);

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const testimonials = t.testimonials.items;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
            6000
        );
        return () => resetTimeout();
    }, [currentIndex, testimonials.length]);

    const handleNav = (direction: 'prev' | 'next') => {
        resetTimeout();
        if (direction === 'prev') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
    };

    const getCardStyle = (index: number) => {
        const offset = index - currentIndex;
        const total = testimonials.length;

        if (isMobile) {
            return {
                transform: `translateX(calc(-50% + ${-offset * 105}%))`,
                opacity: offset === 0 ? 1 : 0.5,
            };
        }

        // Normalize offset for 3D carousel on desktop
        let normalizedOffset = offset;
        if (offset > total / 2) {
            normalizedOffset = offset - total;
        } else if (offset < -total / 2) {
            normalizedOffset = offset + total;
        }

        const isVisible = Math.abs(normalizedOffset) <= 1;

        return {
            transform: `translateX(-50%) rotateY(${normalizedOffset * 25}deg) translateZ(${normalizedOffset === 0 ? '0px' : '-250px'}) scale(${normalizedOffset === 0 ? 1 : 0.8})`,
            opacity: isVisible ? (normalizedOffset === 0 ? 1 : 0.6) : 0,
            zIndex: total - Math.abs(normalizedOffset),
            pointerEvents: normalizedOffset === 0 ? 'auto' : 'none',
        } as React.CSSProperties;
    };

    return (
        <div className="py-12 bg-slate-900/40 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t.testimonials.title}</SectionTitle>
                <p className="text-center text-slate-400 mb-8 md:mb-12 fade-in-up" style={{transitionDelay: '150ms'}}>{t.testimonials.subheading}</p>

                <div className="testimonial-carousel fade-in-up" style={{transitionDelay: '300ms', minHeight: isMobile ? '460px' : '450px'}}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="carousel-item" style={getCardStyle(index)}>
                            <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-8 h-full flex flex-col text-center items-center justify-between backdrop-blur-sm">
                                <div>
                                    <img loading="lazy" decoding="async" src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-slate-600 mx-auto" />
                                    <div className="flex justify-center mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarIcon key={i} className={`w-6 h-6 ${i < testimonial.stars ? 'text-yellow-400' : 'text-slate-600'}`} />
                                        ))}
                                    </div>
                                    <p className="text-lg text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-md text-slate-400">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center items-center mt-8 space-x-12">
                     <button
                        onClick={() => handleNav('prev')}
                        aria-label="Previous testimonial"
                        className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <div className="flex space-x-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-indigo-500 w-6' : 'bg-slate-600 hover:bg-slate-500'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => handleNav('next')}
                        aria-label="Next testimonial"
                        className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;