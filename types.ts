// FIX: Replaced React namespace import with direct type imports to ensure type consistency.
import type { ComponentType, SVGProps } from 'react';

export interface Skill {
    id: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface TechShowcaseItem {
    id: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

// FIX: Added Project interface to resolve import error in Projects.tsx.
export interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
}

export interface Testimonial {
    image: string;
    name: string;
    title: string;
    quote: string;
    stars: number;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface SocialLink {
    id: string;
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    url: string;
}

export interface ApproachPhase {
    id:string;
    // FIX: Added the 'phase' property to align with the data from translations.ts and resolve the type error.
    phase: string;
    title: string;
    description: string;
}

export interface WhyChooseUsItem {
    id: string;
    title: string;
    description: string;
}

// FIX: Added ExperienceItem interface to resolve import error in Experience.tsx.
export interface ExperienceItem {
    id: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface ContactInfo {
    id: string;
    title: string;
    description: string;
    url: string;
    subject?: string;
    body?: string;
}

export interface AnalysisResult {
    title: string;
    analysis: string;
    score: number;
}