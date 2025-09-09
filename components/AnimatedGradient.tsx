import React, { useEffect } from 'react';

const GridBackground: React.FC = () => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const particles = Array.from({ length: 15 }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            '--x-end': `${Math.random() * 200 - 100}px`,
        } as React.CSSProperties;
        return <div key={i} className="particle" style={style} />;
    });

    return (
        <>
            <div 
                aria-hidden="true"
                className="grid-background"
            />
            <div id="particles-container" aria-hidden="true">
                {particles}
            </div>
        </>
    );
};

export default GridBackground;