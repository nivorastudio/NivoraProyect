import React from 'react';

export const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 9.5L7.5 12L10 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 9.5L16.5 12L14 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 6.5L3 9.5V14.5L6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M17.5 6.5L21 9.5V14.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
    </svg>
);

export const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13.5 6.5L17.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M11.5 8.5L4 16L5.5 17.5L8 20L10 18.5L17.5 11L11.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12.5L18 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 21.5L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
    </svg>
);

export const PrototypingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity={0.4}/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M19 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M3 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M17 5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M5 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M19 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M3 19H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M17 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
    </svg>
);

export const ApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 2H18V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M18 2L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 22H6V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M6 22L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const FullStackIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" opacity={0.4}/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2C14.5 4.5 14.5 9.5 12 12C9.5 9.5 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 22C14.5 19.5 14.5 14.5 12 12C9.5 14.5 9.5 19.5 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="url(#star-gradient)" {...props}>
        <defs>
            <linearGradient id="star-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
        </defs>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const EmptyStarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#475569" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 1.666a.833.833 0 01.792.583l1.523 4.693h4.935a.833.833 0 01.49 1.508l-3.991 2.903 1.523 4.693a.833.833 0 01-1.282.93L10 14.15l-3.991 2.903a.833.833 0 01-1.282-.93l1.523-4.693-3.991-2.903a.833.833 0 01.49-1.508h4.935L9.208 2.25A.833.833 0 0110 1.666zM4.93 8.583l3.05 2.217a.833.833 0 01.303.93l-1.163 3.587 3.05-2.216a.833.833 0 01.958 0l3.05 2.216-1.163-3.587a.833.833 0 01.303-.93l3.05-2.217H12.63a.833.833 0 01-.792-.583l-1.162-3.587-1.162 3.587a.833.833 0 01-.792.583H4.93z" />
    </svg>
);


// New, improved Experience Icons
export const StrategicGoalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#a78bfa', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <path d="M54 32.8462C54 44.529 44.1797 54 32.5 54C20.8203 54 11 44.529 11 32.8462C11 21.1633 20.8203 12 32.5 12C44.1797 12 54 21.1633 54 32.8462Z" stroke="url(#grad1)" strokeWidth="2" />
        <circle cx="32.5" cy="32.5" r="6.5" fill="url(#grad1)" />
        <path d="M32.5 12V4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32.5 62V54" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.5 18.5L12.5 12.5" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
export const IntelligentCoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M32 5V15M32 49V59M59 32H49M15 32H5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <circle cx="32" cy="32" r="14" stroke="#8B5CF6" strokeWidth="2"/>
        <circle cx="32" cy="32" r="8" fill="#8B5CF6" fillOpacity="0.8"/>
        <path d="M25 21L21 17" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M39 21L43 17" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 43L21 47" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M39 43L43 47" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
export const InfiniteScaleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 42L12 32L22 22" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 22L52 32L42 42" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 18L10 10" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 46L54 54" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 46L10 54" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 18L54 10" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const MarketSpeedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 32L24 20L44 40L52 32" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 20H52V32" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 48V16" stroke="#FBBF24" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckmarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z" fill="currentColor" opacity="0.2"/>
        <path d="M16.43 8.33984L10.43 14.3398L7.57 11.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

// Tech Showcase Icons
export const AIIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18C12 18.5523 12.4477 19 13 19C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17C12.4477 17 12 17.4477 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M12 6C12 6.55228 12.4477 7 13 7C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5C12.4477 5 12 5.44772 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M15.7071 8.29289C16.0976 7.90237 16.7308 7.90237 17.1213 8.29289C17.5118 8.68342 17.5118 9.31658 17.1213 9.70711C16.7308 10.0976 16.0976 10.0976 15.7071 9.70711C15.3166 9.31658 15.3166 8.68342 15.7071 8.29289Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M8.29289 15.7071C8.68342 15.3166 9.31658 15.3166 9.70711 15.7071C10.0976 16.0976 10.0976 16.7308 9.70711 17.1213C9.31658 17.5118 8.68342 17.5118 8.29289 17.1213C7.90237 16.7308 7.90237 16.0976 8.29289 15.7071Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
    </svg>
);

export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" opacity={0.4}/>
        <ellipse cx="12" cy="12" rx="4.5" ry="10" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4.5" ry="10" transform="rotate(-60 12 12)" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

export const NodeJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21.6667L19.4815 17.1111V8L12 3.44444L4.51852 8V17.1111L12 21.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12.5556L19.4815 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M12 12.5556V21.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M12 12.5556L4.51852 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
        <path d="M9.75928 11.2222L7.27779 12.5556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" opacity={0.4}/>
        <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 13.8243 15.9357 15.4154 14.457 16.2792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 19L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 19L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const WorldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.3" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="22.5" ry="45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <ellipse 
            cx="50" 
            cy="50" 
            rx="45" 
            ry="25" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="10 15"
            className="world-icon-orbit"
        />
    </svg>
);

// Website Auditor Icons
export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12C2 12 5 4 12 4C19 4 22 12 22 12C22 12 19 20 12 20C5 20 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.4}/>
    </svg>
);
  
export const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" opacity={0.4}/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3V1M21 12H23M12 21V23M3 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor" opacity="0.2"/>
    </svg>
);