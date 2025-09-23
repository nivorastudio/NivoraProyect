// FIX: Replaced placeholder content with the full translations module, resolving module not found errors.
import { NavLink, Skill, Project, Testimonial, ContactInfo, ApproachPhase, WhyChooseUsItem, ExperienceItem, TechShowcaseItem } from './types';

export interface Translation {
    navLinks: NavLink[];
    socials: {
        [key: string]: string;
    };
    hero: {
        greeting: string;
        intro: string[];
        cta1: string;
        cta2: string;
    };
    about: {
        heading: string;
        p1: string;
        educationTitle: string;
        educationText: string;
        techStackTitle: string;
        techStackText: string;
        timezoneTitle: string;
        freelanceTitle: string;
        freelanceText: string;
    };
    skills: {
        title: string;
        items: Omit<Skill, 'icon'>[];
    };
    projects: {
        title: string;
        subheading: string;
        items: Project[];
    };
    testimonials: {
        title: string;
        subheading: string;
        items: Testimonial[];
    };
    contact: {
        title: string;
        subheading: string;
        card_heading: string;
        expect_heading: string;
        expect_items: string[];
        cards: Omit<ContactInfo, 'icon'>[];
    };
    footer: {
        copyright: string;
    };
    experience: {
        title: string;
        items: Omit<ExperienceItem, 'icon'>[];
    };
    approach: {
        title: string;
        items: ApproachPhase[];
    };
    whyChooseUs: {
        title: string;
        items: WhyChooseUsItem[];
    };
    techShowcase: {
        title: string;
        subheading: string;
        items: Omit<TechShowcaseItem, 'icon'>[];
    };
    websiteAuditor: {
        title: string;
        subheading: string;
        placeholder: string;
        button: string;
        loading: string;
        loadingText: string;
        errorInvalidUrl: string;
        errorApi: string;
    };
}

export const translations: { en: Translation; es: Translation } = {
    en: {
        navLinks: [
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#testimonials', label: 'Testimonials' },
            { href: '#website-audit', label: 'AI Audit' },
            { href: '#contact', label: 'Contact' },
        ],
        socials: {
            github: 'Visit our GitHub profile',
        },
        hero: {
            greeting: "Let's build the future, together.",
            intro: [
                "We craft AI-powered web experiences.",
                "We design intuitive user interfaces.",
                "We develop scalable full-stack solutions."
            ],
            cta1: 'Get in Touch',
            cta2: 'Explore Services',
        },
        about: {
            heading: "Your Partner in Digital Innovation",
            p1: "We are a modern development studio that partners with an advanced AI, forming a unique synergy of human creativity and machine intelligence. This collaboration allows us to deliver exceptional digital products with unparalleled speed and precision.",
            educationTitle: "AI-Enhanced Workflow",
            educationText: "Our process is augmented by a custom-trained AI assistant. This allows us to accelerate development, identify potential issues before they arise, and maintain a consistent, high-quality codebase. We focus on strategy and creativity, while our AI handles the rest.",
            techStackTitle: "Our Technology",
            techStackText: "We utilize a modern, robust tech stack to build high-performance applications that are both scalable and maintainable.",
            timezoneTitle: "Globally Available",
            freelanceTitle: "Flexible Collaboration",
            freelanceText: "We're available for freelance projects, offering our expertise to bring your vision to life, no matter the scale. We adapt to your needs, ensuring a smooth and transparent collaboration from start to finish.",
        },
        skills: {
            title: "What We Do",
            items: [
                { id: 'prototyping', title: 'Rapid Prototyping', description: 'Quickly creating interactive models to visualize and refine concepts before development.' },
                { id: 'uiux', title: 'UI/UX Design', description: 'Designing intuitive, engaging, and user-friendly interfaces that enhance user satisfaction.' },
                { id: 'content', title: 'AI Content Generation', description: 'Utilizing AI to generate creative and relevant content, from text to images.' },
                { id: 'code', title: 'Frontend Development', description: 'Building responsive and performant user interfaces with modern frameworks like React and Next.js.' },
                { id: 'api', title: 'Backend & APIs', description: 'Developing robust server-side logic and APIs to power your applications.' },
                { id: 'fullstack', title: 'Full-Stack Solutions', description: 'Delivering end-to-end web solutions, from database to user interface.' },
            ]
        },
        projects: {
            title: 'Our Work',
            subheading: 'Here are some of the projects we are proud of. Each one is a testament to our commitment to quality and innovation.',
            items: [
                { id: 'p1', image: 'https://picsum.photos/seed/project1/600/400', title: 'AI-Powered Analytics Dashboard', description: 'A real-time data visualization tool that uses AI to uncover insights.', tags: ['React', 'D3.js', 'Node.js', 'AI'] },
                { id: 'p2', image: 'https://picsum.photos/seed/project2/600/400', title: 'E-commerce Platform', description: 'A scalable online store with a personalized shopping experience.', tags: ['Next.js', 'MongoDB', 'TailwindCSS'] },
                { id: 'p3', image: 'https://picsum.photos/seed/project3/600/400', title: 'Content Management System', description: 'A headless CMS designed for flexibility and ease of use.', tags: ['TypeScript', 'GraphQL', 'Docker'] },
            ]
        },
        testimonials: {
            title: "What Our Clients Say",
            subheading: "We've helped amazing people and companies bring their ideas to life.",
            items: [
                { image: 'https://picsum.photos/seed/person1/200', name: 'Jane Doe', title: 'CEO, TechCorp', quote: 'Their AI-integrated approach is a game-changer. Our project was delivered ahead of schedule and beyond expectations.', stars: 5 },
                { image: 'https://picsum.photos/seed/person2/200', name: 'John Smith', title: 'Founder, Innovate Co.', quote: 'The most professional and skilled team I have ever worked with. They truly understood our vision.', stars: 5 },
                { image: 'https://picsum.photos/seed/person3/200', name: 'Emily White', title: 'Marketing Director, StartupX', quote: 'Incredible attention to detail and a passion for creating beautiful, functional products. Highly recommended!', stars: 5 },
            ]
        },
        contact: {
            title: "Ready to Start a Project?",
            subheading: "Let's connect and discuss how we can help you achieve your goals. We're excited to learn about your ideas.",
            card_heading: "Let's Talk",
            expect_heading: "What to expect:",
            expect_items: [
                "A response within 24 hours.",
                "A detailed project proposal.",
                "A transparent and collaborative process."
            ],
            cards: [
                { id: 'gmail', title: 'Send an Email', description: 'The best way to reach us is by email. We are looking forward to hearing from you and discussing your project.', url: 'mailto:nivorastudio.business@gmail.com', subject: 'Project Inquiry', body: 'Hello, I would like to discuss a project...' }
            ]
        },
        footer: {
            copyright: "&copy; {year} NivoraProyect. All Rights Reserved. Made with ❤️."
        },
        experience: {
            title: "Our Competitive Edge",
            items: [
                { id: 'diversity', title: 'Strategic Goal Alignment', description: 'We ensure every feature and design choice is aligned with your core business objectives for maximum impact.' },
                { id: 'versatility', title: 'Intelligent Development Core', description: 'Our AI-augmented workflow optimizes every stage of development, ensuring efficiency, quality, and innovation.' },
                { id: 'scalability', title: 'Built for Infinite Scale', description: 'We architect solutions that grow with your business, ensuring long-term performance and reliability.' },
                { id: 'agile', title: 'Unmatched Speed to Market', description: 'Our streamlined, AI-powered process allows us to deliver high-quality products faster than traditional agencies.' }
            ]
        },
        approach: {
            title: "Our Process",
            items: [
                { id: 'discover', phase: 'Phase 1', title: 'Discovery', description: 'We start by understanding your goals, audience, and challenges to define a clear project roadmap.' },
                { id: 'design', phase: 'Phase 2', title: 'Design', description: 'We create user-centric designs and prototypes, focusing on a seamless and engaging user experience.' },
                { id: 'develop', phase: 'Phase 3', title: 'Development', description: 'Our team, alongside our AI partner, builds a robust, scalable, and high-performance application.' },
                { id: 'deploy', phase: 'Phase 4', title: 'Launch', description: 'We handle the deployment and launch, ensuring a smooth transition to a live environment and providing post-launch support.' }
            ]
        },
        whyChooseUs: {
            title: "Why Partner With Us",
            items: [
                { id: 'innovation', title: 'AI-Powered Innovation', description: 'We leverage cutting-edge AI to deliver creative solutions and a significant competitive advantage.' },
                { id: 'transparency', title: 'Transparent Collaboration', description: 'You are part of the team. We maintain open communication and provide regular updates throughout the project.' },
                { id: 'quality', title: 'Commitment to Quality', description: 'Our rigorous, AI-assisted testing and quality assurance processes ensure a polished, bug-free final product.' }
            ]
        },
        techShowcase: {
            title: "Core Technologies",
            subheading: "We use a curated set of modern technologies to build exceptional, high-performance web applications.",
            items: [
                { id: 'ai', title: 'Generative AI', description: 'Leveraging large language models for content generation, code optimization, and workflow automation.' },
                { id: 'react', title: 'React & Next.js', description: 'Building fast, interactive, and SEO-friendly user interfaces with the industry-leading framework.' },
                { id: 'node', title: 'Node.js', description: 'Powering our backends with fast, scalable, and efficient server-side JavaScript.' },
                { id: 'cloud', title: 'Cloud & DevOps', description: 'Deploying reliable and scalable applications on modern cloud infrastructure with automated CI/CD pipelines.' }
            ]
        },
        websiteAuditor: {
            title: "Free AI-Powered Website Audit",
            subheading: "Enter your website URL to get an instant, AI-driven analysis of its SEO, performance, and accessibility. Discover key areas for improvement in seconds.",
            placeholder: "Enter website URL (e.g., https://example.com)",
            button: "Audit Now",
            loading: "Auditing...",
            loadingText: "Our AI is analyzing your website. This may take a moment...",
            errorInvalidUrl: "Please enter a valid URL (e.g., https://example.com).",
            errorApi: "Sorry, we couldn't complete the audit at this time. Please try again later.",
        },
    },
    es: {
        navLinks: [
            { href: '#home', label: 'Inicio' },
            { href: '#about', label: 'Nosotros' },
            { href: '#services', label: 'Servicios' },
            { href: '#testimonials', label: 'Testimonios' },
            { href: '#website-audit', label: 'Auditoría IA' },
            { href: '#contact', label: 'Contacto' },
        ],
        socials: {
            github: 'Visita nuestro perfil de GitHub',
        },
        hero: {
            greeting: "Construyamos el futuro, juntos.",
            intro: [
                "Creamos experiencias web con IA.",
                "Diseñamos interfaces de usuario intuitivas.",
                "Desarrollamos soluciones full-stack escalables."
            ],
            cta1: 'Contáctanos',
            cta2: 'Explorar Servicios',
        },
        about: {
            heading: "Tu Socio en Innovación Digital",
            p1: "Somos un estudio de desarrollo moderno que se asocia con una IA avanzada, formando una sinergia única de creatividad humana e inteligencia artificial. Esta colaboración nos permite entregar productos digitales excepcionales con una velocidad y precisión inigualables.",
            educationTitle: "Flujo de Trabajo Mejorado con IA",
            educationText: "Nuestro proceso es aumentado por un asistente de IA entrenado a medida. Esto nos permite acelerar el desarrollo, identificar problemas potenciales antes de que surjan y mantener un código base consistente y de alta calidad. Nos enfocamos en la estrategia y la creatividad, mientras nuestra IA se encarga del resto.",
            techStackTitle: "Nuestra Tecnología",
            techStackText: "Utilizamos un stack tecnológico moderno y robusto para construir aplicaciones de alto rendimiento que son escalables y mantenibles.",
            timezoneTitle: "Disponibilidad Global",
            freelanceTitle: "Colaboración Flexible",
            freelanceText: "Estamos disponibles para proyectos freelance, ofreciendo nuestra experiencia para dar vida a tu visión, sin importar la escala. Nos adaptamos a tus necesidades, asegurando una colaboración fluida y transparente de principio a fin.",
        },
        skills: {
            title: "Lo Que Hacemos",
            items: [
                { id: 'prototyping', title: 'Prototipado Rápido', description: 'Creación rápida de modelos interactivos para visualizar y refinar conceptos antes del desarrollo.' },
                { id: 'uiux', title: 'Diseño UI/UX', description: 'Diseño de interfaces intuitivas, atractivas y fáciles de usar que mejoran la satisfacción del usuario.' },
                { id: 'content', title: 'Contenido con IA', description: 'Uso de IA para generar contenido creativo y relevante, desde texto hasta imágenes.' },
                { id: 'code', title: 'Desarrollo Frontend', description: 'Construcción de interfaces de usuario responsivas y de alto rendimiento con frameworks modernos como React y Next.js.' },
                { id: 'api', title: 'Backend y APIs', description: 'Desarrollo de lógica de servidor robusta y APIs para potenciar tus aplicaciones.' },
                { id: 'fullstack', title: 'Soluciones Full-Stack', description: 'Entrega de soluciones web completas, desde la base de datos hasta la interfaz de usuario.' },
            ]
        },
        projects: {
            title: 'Nuestro Trabajo',
            subheading: 'Aquí hay algunos de los proyectos de los que estamos orgullosos. Cada uno es un testimonio de nuestro compromiso con la calidad y la innovación.',
            items: [
                { id: 'p1', image: 'https://picsum.photos/seed/project1/600/400', title: 'Dashboard Analítico con IA', description: 'Una herramienta de visualización de datos en tiempo real que usa IA para descubrir insights.', tags: ['React', 'D3.js', 'Node.js', 'IA'] },
                { id: 'p2', image: 'https://picsum.photos/seed/project2/600/400', title: 'Plataforma de E-commerce', description: 'Una tienda en línea escalable con una experiencia de compra personalizada.', tags: ['Next.js', 'MongoDB', 'TailwindCSS'] },
                { id: 'p3', image: 'https://picsum.photos/seed/project3/600/400', title: 'Sistema de Gestión de Contenido', description: 'Un CMS headless diseñado para flexibilidad y facilidad de uso.', tags: ['TypeScript', 'GraphQL', 'Docker'] },
            ]
        },
        testimonials: {
            title: "Lo Que Dicen Nuestros Clientes",
            subheading: "Hemos ayudado a personas y empresas increíbles a hacer realidad sus ideas.",
            items: [
                { image: 'https://picsum.photos/seed/person1/200', name: 'Jane Doe', title: 'CEO, TechCorp', quote: 'Su enfoque integrado con IA cambia las reglas del juego. Nuestro proyecto se entregó antes de lo previsto y superó las expectativas.', stars: 5 },
                { image: 'https://picsum.photos/seed/person2/200', name: 'John Smith', title: 'Fundador, Innovate Co.', quote: 'El equipo más profesional y cualificado con el que he trabajado. Realmente entendieron nuestra visión.', stars: 5 },
                { image: 'https://picsum.photos/seed/person3/200', name: 'Emily White', title: 'Directora de Marketing, StartupX', quote: 'Increíble atención al detalle y pasión por crear productos hermosos y funcionales. ¡Muy recomendable!', stars: 5 },
            ]
        },
        contact: {
            title: "¿Listo para Empezar un Proyecto?",
            subheading: "Conectemos y hablemos de cómo podemos ayudarte a alcanzar tus metas. Estamos emocionados por conocer tus ideas.",
            card_heading: "Hablemos",
            expect_heading: "Qué esperar:",
            expect_items: [
                "Una respuesta en 24 horas.",
                "Una propuesta de proyecto detallada.",
                "Un proceso transparente y colaborativo."
            ],
            cards: [
                { id: 'gmail', title: 'Enviar un Correo', description: 'La mejor forma de contactarnos es por correo electrónico. Esperamos con interés saber de ti y discutir tu proyecto.', url: 'mailto:nivorastudio.business@gmail.com', subject: 'Consulta de Proyecto', body: 'Hola, me gustaría hablar sobre un proyecto...' }
            ]
        },
        footer: {
            copyright: "&copy; {year} NivoraProyect. Todos los derechos reservados. Hecho con ❤️."
        },
        experience: {
            title: "Nuestra Ventaja Competitiva",
            items: [
                { id: 'diversity', title: 'Alineación Estratégica', description: 'Nos aseguramos de que cada característica y decisión de diseño esté alineada con tus objetivos de negocio para un impacto máximo.' },
                { id: 'versatility', title: 'Núcleo de Desarrollo Inteligente', description: 'Nuestro flujo de trabajo aumentado con IA optimiza cada etapa del desarrollo, garantizando eficiencia, calidad e innovación.' },
                { id: 'scalability', title: 'Construido para Escala Infinita', description: 'Diseñamos soluciones que crecen con tu negocio, asegurando un rendimiento y fiabilidad a largo plazo.' },
                { id: 'agile', title: 'Velocidad de Salida al Mercado', description: 'Nuestro proceso optimizado e impulsado por IA nos permite entregar productos de alta calidad más rápido que las agencias tradicionales.' }
            ]
        },
        approach: {
            title: "Nuestro Proceso",
            items: [
                { id: 'discover', phase: 'Fase 1', title: 'Descubrimiento', description: 'Comenzamos por entender tus metas, audiencia y desafíos para definir una hoja de ruta clara del proyecto.' },
                { id: 'design', phase: 'Fase 2', title: 'Diseño', description: 'Creamos diseños y prototipos centrados en el usuario, enfocándonos en una experiencia de usuario fluida y atractiva.' },
                { id: 'develop', phase: 'Fase 3', title: 'Desarrollo', description: 'Nuestro equipo, junto con nuestro socio de IA, construye una aplicación robusta, escalable y de alto rendimiento.' },
                { id: 'deploy', phase: 'Fase 4', title: 'Lanzamiento', description: 'Nos encargamos del despliegue y lanzamiento, asegurando una transición suave a un entorno en vivo y brindando soporte post-lanzamiento.' }
            ]
        },
        whyChooseUs: {
            title: "Por Qué Asociarse Con Nosotros",
            items: [
                { id: 'innovation', title: 'Innovación Impulsada por IA', description: 'Aprovechamos la IA de vanguardia para ofrecer soluciones creativas y una ventaja competitiva significativa.' },
                { id: 'transparency', title: 'Colaboración Transparente', description: 'Eres parte del equipo. Mantenemos una comunicación abierta y proporcionamos actualizaciones regulares durante todo el proyecto.' },
                { id: 'quality', title: 'Compromiso con la Calidad', description: 'Nuestros rigurosos procesos de prueba y control de calidad asistidos por IA garantizan un producto final pulido y sin errores.' }
            ]
        },
        techShowcase: {
            title: "Tecnologías Principales",
            subheading: "Usamos un conjunto curado de tecnologías modernas para construir aplicaciones web excepcionales y de alto rendimiento.",
            items: [
                { id: 'ai', title: 'IA Generativa', description: 'Aprovechando grandes modelos de lenguaje para la generación de contenido, optimización de código y automatización de flujos de trabajo.' },
                { id: 'react', title: 'React & Next.js', description: 'Construyendo interfaces de usuario rápidas, interactivas y amigables con SEO con el framework líder de la industria.' },
                { id: 'node', title: 'Node.js', description: 'Potenciando nuestros backends con JavaScript del lado del servidor rápido, escalable y eficiente.' },
                { id: 'cloud', title: 'Cloud & DevOps', description: 'Desplegando aplicaciones fiables y escalables en infraestructura de nube moderna con pipelines de CI/CD automatizados.' }
            ]
        },
        websiteAuditor: {
            title: "Auditoría de Sitios Web Gratuita con IA",
            subheading: "Ingresa la URL de tu sitio web para obtener un análisis instantáneo, impulsado por IA, de su SEO, rendimiento y accesibilidad. Descubre áreas clave de mejora en segundos.",
            placeholder: "Ingresa la URL del sitio web (ej. https://ejemplo.com)",
            button: "Auditar Ahora",
            loading: "Auditando...",
            loadingText: "Nuestra IA está analizando tu sitio web. Esto puede tardar un momento...",
            errorInvalidUrl: "Por favor, ingresa una URL válida (ej. https://ejemplo.com).",
            errorApi: "Lo sentimos, no pudimos completar la auditoría en este momento. Por favor, inténtalo de nuevo más tarde.",
        },
    }
};