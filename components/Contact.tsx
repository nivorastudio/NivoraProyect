import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactInfo } from '../types';
import { CheckmarkIcon } from './Icons';

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const ContactModule: React.FC<{ card: ContactInfo }> = ({ card }) => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    let mailtoUrl = card.url;
    // Construct a proper mailto link using encodeURIComponent for cross-client compatibility
    if (card.url.startsWith('mailto:')) {
        const params: string[] = [];
        if (card.subject) {
            params.push(`subject=${encodeURIComponent(card.subject)}`);
        }
        if (card.body) {
            params.push(`body=${encodeURIComponent(card.body)}`);
        }
        const queryString = params.join('&');
        if (queryString) {
            mailtoUrl += `?${queryString}`;
        }
    }

    const emailAddress = card.id === 'gmail' && card.url.startsWith('mailto:') 
        ? card.url.replace('mailto:', '') 
        : null;

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!emailAddress) return;
        navigator.clipboard.writeText(emailAddress).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="contact-card group rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-4xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white">{t.contact.card_heading}</h3>
                    </div>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-6">
                        {card.description}
                    </p>
                    {emailAddress && (
                        <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-3 flex items-center justify-between text-left gap-3">
                            <div className="min-w-0 flex-1">
                                <code className="text-indigo-300 text-sm break-words font-mono select-all">{emailAddress}</code>
                            </div>
                            <button 
                                onClick={handleCopy}
                                className="relative p-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-all flex-shrink-0 w-10 h-10 flex items-center justify-center"
                                aria-label={copied ? "Email copied" : "Copy email address"}
                            >
                                <span className={`absolute transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                                    <CheckIcon className="w-5 h-5 text-green-400" />
                                </span>
                               <span className={`absolute transition-opacity duration-300 ${copied ? 'opacity-0' : 'opacity-100'}`}>
                                     <CopyIcon className="w-5 h-5" />
                               </span>
                            </button>
                        </div>
                    )}
                     <a 
                        href={mailtoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-6 w-full sm:w-auto"
                     >
                        {card.title}
                    </a>
                </div>
                {/* Right Column */}
                <div className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-5">
                        <div>
                            <h4 className="text-xl font-bold text-white">{t.contact.expect_heading}</h4>
                        </div>
                    </div>
                    <ul className="space-y-3">
                        {t.contact.expect_items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-400">
                                <CheckmarkIcon className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const { t } = useLanguage();
    
    const contactCards: ContactInfo[] = t.contact.cards;

    return (
        <div className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 
                    className="contact-title text-4xl sm:text-5xl font-extrabold text-white max-w-4xl mx-auto leading-tight fade-in-up"
                    dangerouslySetInnerHTML={{ __html: t.contact.title }}
                />
                <p className="text-slate-400 max-w-2xl mx-auto mt-6 mb-12 fade-in-up" style={{ transitionDelay: '150ms' }}>
                    {t.contact.subheading}
                </p>
                <div className="fade-in-up flex justify-center" style={{ transitionDelay: '300ms' }}>
                    {contactCards.map(card => (
                        <ContactModule key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;