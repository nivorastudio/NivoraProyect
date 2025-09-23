import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Testimonial } from '../types';
import { StarIcon, EmptyStarIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2 fade-in-up">
        <span className="text-gradient">{children}</span>
    </h2>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-6 sm:p-8 h-full flex flex-col text-center items-center justify-between backdrop-blur-sm">
        <div>
            <img loading="lazy" decoding="async" fetchpriority="auto" src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-slate-600 mx-auto" />
            <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    i < testimonial.stars 
                        ? <StarIcon key={`filled-${i}`} className="w-6 h-6" />
                        : <EmptyStarIcon key={`empty-${i}`} className="w-6 h-6" />
                ))}
            </div>
            <p className="text-lg text-slate-300 italic mb-6">"{testimonial.quote}"</p>
        </div>
        <div>
            <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
            <p className="text-md text-slate-400">{testimonial.title}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const testimonials = t.testimonials.items;
    // We duplicate the testimonials to create a seamless, infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="py-12 bg-slate-900/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t.testimonials.title}</SectionTitle>
                <p className="text-center text-slate-400 mb-8 md:mb-12 fade-in-up" style={{transitionDelay: '150ms'}}>{t.testimonials.subheading}</p>

                <div className="testimonial-scroller fade-in-up" style={{transitionDelay: '300ms'}}>
                    <div className="testimonial-track">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-slide">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;