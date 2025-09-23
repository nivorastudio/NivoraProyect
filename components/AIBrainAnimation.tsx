import React from 'react';

const AIBrainAnimation: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
    const containerHeight = compact ? 'h-32' : 'h-48';
    return (
        <div className={`ai-brain-container w-full ${containerHeight} mb-6 flex items-center justify-center`}>
            <div className="ai-brain-core">
                <div className="ai-brain-spark"></div>
                <div className="ai-brain-orbit" style={{ '--i': 0 } as React.CSSProperties}></div>
                <div className="ai-brain-orbit" style={{ '--i': 1 } as React.CSSProperties}></div>
                <div className="ai-brain-orbit" style={{ '--i': 2 } as React.CSSProperties}></div>
                <div className="ai-brain-orbit" style={{ '--i': 3 } as React.CSSProperties}></div>
            </div>
        </div>
    );
};

export default AIBrainAnimation;