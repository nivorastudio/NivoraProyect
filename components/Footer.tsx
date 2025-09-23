import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const copyrightText = t.footer.copyright.replace('{year}', currentYear.toString());

    return (
        <footer className="bg-slate-900/50 border-t border-slate-800">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p 
                    className="text-center text-slate-500"
                    dangerouslySetInnerHTML={{ __html: copyrightText }}
                />
            </div>
        </footer>
    );
};

export default Footer;