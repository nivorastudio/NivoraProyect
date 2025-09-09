import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-progress-bar-container">
            <div 
                className="scroll-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
