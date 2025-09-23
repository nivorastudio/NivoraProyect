// FIX: Imported React types directly to resolve type errors and ensure consistency.
import type { ComponentType, SVGProps } from 'react';
import { SocialLink } from './types';
import { 
    CodeIcon, DesignIcon, GithubIcon, 
    StrategicGoalIcon, IntelligentCoreIcon, InfiniteScaleIcon, MarketSpeedIcon,
    PrototypingIcon, SparkleIcon, ApiIcon, FullStackIcon
} from './components/Icons';

export const SOCIAL_LINKS: SocialLink[] = [
    { id: 'github', name: 'GitHub', icon: GithubIcon, url: 'https://github.com/nivorastudio' },
];

type SectionIcons = {
    [key: string]: ComponentType<SVGProps<SVGSVGElement>>;
};

export const SECTION_ICONS: SectionIcons = {
    // Skills
    prototyping: PrototypingIcon,
    uiux: DesignIcon,
    content: SparkleIcon,
    code: CodeIcon,
    api: ApiIcon,
    fullstack: FullStackIcon,
    // Experience
    diversity: StrategicGoalIcon,
    versatility: IntelligentCoreIcon,
    scalability: InfiniteScaleIcon,
    agile: MarketSpeedIcon,
};
