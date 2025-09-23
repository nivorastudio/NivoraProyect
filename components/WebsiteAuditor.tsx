import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnalysisResult } from '../types';
import { EyeIcon, TargetIcon, ShieldIcon } from './Icons';

// An array of 5 different possible mock result sets to make the audit feel more dynamic.
const mockResultSets: { [lang: string]: AnalysisResult[][] } = {
    en: [
        // Set 1: The Balanced Site
        [
            { title: 'SEO', analysis: 'Your site has strong meta descriptions and keywords. Mobile-friendliness is excellent, but some heading tags could be better structured for crawlers.', score: 85 },
            { title: 'Performance', analysis: 'Page load speed is good. However, optimizing large images and leveraging browser caching could significantly improve performance and user experience.', score: 78 },
            { title: 'Accessibility', analysis: 'Good color contrast and use of ARIA labels. Some images are missing descriptive alt text, which is crucial for screen reader users.', score: 92 }
        ],
        // Set 2: Fast but Inaccessible
        [
            { title: 'SEO', analysis: 'Keyword density is adequate, but the lack of a responsive design is harming your mobile search ranking significantly.', score: 75 },
            { title: 'Performance', analysis: 'Excellent load times due to efficient use of a CDN and modern image formats. This is a major strength for user retention.', score: 95 },
            { title: 'Accessibility', analysis: 'Serious issues found. Poor color contrast makes text unreadable for many users, and interactive elements lack ARIA labels.', score: 60 }
        ],
        // Set 3: SEO-King, Slow Performance
        [
            { title: 'SEO', analysis: 'Near-perfect on-page SEO. Your site structure, keyword usage, and meta tags are expertly implemented for maximum search visibility.', score: 98 },
            { title: 'Performance', analysis: 'Very slow. Uncompressed video files and large, render-blocking CSS are creating a poor user experience and increasing bounce rates.', score: 55 },
            { title: 'Accessibility', analysis: 'Generally good. However, the main navigation menu is not fully keyboard-navigable, locking out some users.', score: 80 }
        ],
        // Set 4: Visually Stunning, Unseen
        [
            { title: 'SEO', analysis: 'Major improvements needed. The site is missing meta descriptions and uses generic title tags, making it very difficult for search engines to index properly.', score: 40 },
            { title: 'Performance', analysis: 'Mediocre. Heavy animations and custom font files are noticeably impacting the initial page load time. Consider lazy loading off-screen assets.', score: 65 },
            { title: 'Accessibility', analysis: 'Outstanding. The design implements best practices with clear focus states, semantic HTML, and proper labels for all users.', score: 95 }
        ],
        // Set 5: The Neglected Site
        [
            { title: 'SEO', analysis: 'Several critical issues, including broken internal links and missing primary keywords in page titles. A content strategy is highly recommended.', score: 50 },
            { title: 'Performance', analysis: 'Poor. Multiple render-blocking resources and the absence of a caching policy are causing significant delays. Immediate attention is required.', score: 45 },
            { title: 'Accessibility', analysis: 'Needs significant work. The site structure lacks landmarks, most images have no alt text, and text contrast is below accessibility standards.', score: 55 }
        ]
    ],
    es: [
        // Set 1: El Sitio Equilibrado
        [
            { title: 'SEO', analysis: 'Tu sitio tiene meta descripciones y palabras clave fuertes. La compatibilidad con móviles es excelente, pero algunas etiquetas de encabezado podrían estructurarse mejor para los rastreadores.', score: 85 },
            { title: 'Performance', analysis: 'La velocidad de carga de la página es buena. Sin embargo, optimizar imágenes grandes y aprovechar el caché del navegador podría mejorar significativamente el rendimiento y la experiencia del usuario.', score: 78 },
            { title: 'Accessibility', analysis: 'Buen contraste de color y uso de etiquetas ARIA. Faltan textos alternativos descriptivos en algunas imágenes, lo cual es crucial para los usuarios de lectores de pantalla.', score: 92 }
        ],
        // Set 2: Rápido pero Inaccesible
        [
            { title: 'SEO', analysis: 'La densidad de palabras clave es adecuada, pero la falta de un diseño responsivo está perjudicando significativamente tu ranking en búsquedas móviles.', score: 75 },
            { title: 'Performance', analysis: 'Tiempos de carga excelentes gracias al uso eficiente de un CDN y formatos de imagen modernos. Esta es una gran fortaleza para la retención de usuarios.', score: 95 },
            { title: 'Accessibility', analysis: 'Se encontraron problemas graves. El bajo contraste de color hace que el texto sea ilegible para muchos usuarios y los elementos interactivos carecen de etiquetas ARIA.', score: 60 }
        ],
        // Set 3: El Rey del SEO, Lento Rendimiento
        [
            { title: 'SEO', analysis: 'SEO on-page casi perfecto. La estructura de tu sitio, el uso de palabras clave y las meta etiquetas están implementados de manera experta para una máxima visibilidad en búsquedas.', score: 98 },
            { title: 'Performance', analysis: 'Muy lento. Archivos de video sin comprimir y CSS grande que bloquea el renderizado están creando una mala experiencia de usuario y aumentando la tasa de rebote.', score: 55 },
            { title: 'Accessibility', analysis: 'Generalmente bueno. Sin embargo, el menú de navegación principal no es completamente navegable con teclado, excluyendo a algunos usuarios.', score: 80 }
        ],
        // Set 4: Visualmente Impresionante, Invisible
        [
            { title: 'SEO', analysis: 'Se necesitan mejoras importantes. El sitio carece de meta descripciones y utiliza etiquetas de título genéricas, lo que dificulta mucho que los motores de búsqueda lo indexen correctamente.', score: 40 },
            { title: 'Performance', analysis: 'Mediocre. Las animaciones pesadas y los archivos de fuentes personalizadas están afectando notablemente el tiempo de carga inicial de la página. Considera la carga diferida de activos fuera de pantalla.', score: 65 },
            { title: 'Accessibility', analysis: 'Excepcional. El diseño implementa las mejores prácticas con estados de foco claros, HTML semántico y etiquetas adecuadas para todos los usuarios.', score: 95 }
        ],
        // Set 5: El Sitio Descuidado
        [
            { title: 'SEO', analysis: 'Varios problemas críticos, incluyendo enlaces internos rotos y falta de palabras clave principales en los títulos de las páginas. Se recomienda encarecidamente una estrategia de contenido.', score: 50 },
            { title: 'Performance', analysis: 'Bajo. Múltiples recursos que bloquean el renderizado y la ausencia de una política de caché están causando retrasos significativos. Se requiere atención inmediata.', score: 45 },
            { title: 'Accessibility', analysis: 'Necesita un trabajo significativo. La estructura del sitio carece de puntos de referencia, la mayoría de las imágenes no tienen texto alternativo y el contraste del texto está por debajo de los estándares de accesibilidad.', score: 55 }
        ]
    ]
};


const ResultCard: React.FC<{ result: AnalysisResult; icon: React.ReactNode }> = ({ result, icon }) => {
    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-400';
        if (score >= 70) return 'text-yellow-400';
        return 'text-red-400';
    };

    return (
        <div className="glass-card p-6 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{result.title}</h3>
                    <p className={`text-3xl font-bold ${getScoreColor(result.score)}`}>{result.score}<span className="text-base text-slate-400">/100</span></p>
                </div>
            </div>
            <p className="text-slate-400 text-left">{result.analysis}</p>
        </div>
    );
};


const WebsiteAuditor: React.FC = () => {
    const { t, language } = useLanguage();
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<AnalysisResult[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const isValidUrl = (string: string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleAudit = async () => {
        if (!isValidUrl(url)) {
            setError(t.websiteAuditor.errorInvalidUrl);
            return;
        }

        setIsLoading(true);
        setResults(null);
        setError(null);

        // Simulate API call and randomly pick one of the result sets
        setTimeout(() => {
            const currentLanguageSets = mockResultSets[language];
            const randomIndex = Math.floor(Math.random() * currentLanguageSets.length);
            setResults(currentLanguageSets[randomIndex]);
            setIsLoading(false);
        }, 2500);
    };

    const resultIcons: { [key: string]: React.ReactNode } = {
        SEO: <EyeIcon className="w-6 h-6 text-indigo-400" />,
        Performance: <TargetIcon className="w-6 h-6 text-pink-400" />,
        Accessibility: <ShieldIcon className="w-6 h-6 text-green-400" />,
    };


    return (
        <div className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white max-w-4xl mx-auto leading-tight fade-in-up">
                    {t.websiteAuditor.title}
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-6 mb-12 fade-in-up" style={{ transitionDelay: '150ms' }}>
                    {t.websiteAuditor.subheading}
                </p>

                <div className="max-w-2xl mx-auto fade-in-up" style={{ transitionDelay: '300ms' }}>
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleAudit(); }} 
                        className="flex flex-col gap-3 sm:relative sm:block"
                    >
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder={t.websiteAuditor.placeholder}
                            className="w-full pl-4 pr-4 sm:pr-36 py-4 text-base bg-slate-800/60 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !url}
                            className="w-full sm:w-auto sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? t.websiteAuditor.loading : t.websiteAuditor.button}
                        </button>
                    </form>
                </div>

                {error && <p className="text-red-400 mt-6 text-center">{error}</p>}

                {isLoading && (
                    <div className="mt-12 text-center">
                        <div role="status" className="inline-block">
                            <svg aria-hidden="true" className="w-10 h-10 text-slate-600 animate-spin fill-indigo-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-4 text-slate-400">{t.websiteAuditor.loadingText}</p>
                    </div>
                )}

                {results && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {results.map((result) => (
                           <ResultCard 
                                key={result.title} 
                                result={result} 
                                icon={resultIcons[result.title] || <EyeIcon className="w-6 h-6 text-gray-400" />}
                           />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WebsiteAuditor;