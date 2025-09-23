import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { translations, Translation } from '../translations';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const value = useMemo(() => ({
        language,
        setLanguage,
        t: translations[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
