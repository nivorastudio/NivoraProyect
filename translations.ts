import { Project, Testimonial, WhyChooseUsItem, TechShowcaseItem, ContactInfo, AIIdea } from "./types";

export interface Translation {
    navLinks: { href: string; label: string }[];
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
    experience: {
        title: string;
        items: {
            id: string;
            title: string;
            description: string;
        }[];
    };
    whyChooseUs: {
        title: string;
        items: WhyChooseUsItem[];
    };
    skills: { // Corresponds to Services section
        title: string;
        items: {
            id:string;
            title: string;
            description: string;
        }[];
    };
    approach: { // Corresponds to Process section
        title: string;
        items: {
            id: string;
            phase: string;
            title: string;
            description: string;
        }[];
    };
    techShowcase: {
        title: string;
        subheading: string;
        items: Omit<TechShowcaseItem, 'icon'>[];
    };
    aiIdeaLab: {
        title: string;
        subheading: string;
        placeholder: string;
        button: string;
        loading: string;
        error: string;
        comingSoonTitle: string;
        comingSoonText: string;
    };
    // FIX: Added 'projects' to the Translation interface to support the Projects component.
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
        cards: ContactInfo[];
        expect_heading: string;
        expect_items: string[];
    };
    footer: {
        copyright: string;
    };
    socials: {
        [key: string]: string;
    };
}

export const translations: { [key: string]: Translation } = {
    en: {
        navLinks: [
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#testimonials', label: 'Reviews' },
            { href: '#ai-lab', label: 'AI Lab' },
            { href: '#contact', label: 'Contact' },
        ],
        hero: {
            greeting: "Turn Your Idea into a High-Converting Website.",
            intro: [
                "Websites that turn visitors into customers.",
                "Professional design, delivered in days.",
                "From idea to launch, without the hassle."
            ],
            cta1: "Start Your Project",
            cta2: "Our Technology",
        },
        about: {
            heading: "Your Partner in Digital Growth.",
            p1: "We blend human creativity with AI efficiency. You get a superior website that achieves your goals, delivered faster than you thought possible.",
            educationTitle: "Creativity Meets AI",
            educationText: "We focus on your business goals. Our AI assistant handles the heavy lifting, letting us build your perfect website in record time.",
            techStackTitle: "Built for Performance",
            techStackText: "We use the latest, most reliable tech. Your website will be fast, secure, and a pleasure for your visitors to use.",
            timezoneTitle: "Ready When You Are",
            freelanceTitle: "Ready for a Website That Drives Results?",
            freelanceText: "We partner with ambitious businesses. If you need a powerful online presence that attracts and converts, we're here to build it."
        },
        experience: {
            title: "Our Edge",
            items: [
                { id: 'diversity', title: 'Design That Converts', description: "We don't just build websites; we build sales tools. Every element is designed to turn visitors into loyal customers." },
                { id: 'versatility', title: 'Smarter Tech', description: 'Our AI pinpoints the best technology for your needs, ensuring a fast, reliable, and secure website.' },
                { id: 'scalability', title: 'Built to Grow', description: 'Your business is evolving, and your website should too. We build flexible platforms ready for your future success.' },
                { id: 'agile', title: 'Launch in Days, Not Months', description: 'Our efficient, AI-powered process gets you online faster, so you can start seeing results right away.' },
            ]
        },
        whyChooseUs: {
            title: "Why Choose Us",
            items: [
                { id: 'speed', title: 'Launch from 5 Days', description: 'Your professional website, live in as little as 5 days. We turn your vision into reality, fast.' },
                { id: 'availability', title: 'A Seamless Process', description: "Our smart workflow means your project is always moving forward. No delays, just progress." },
                { id: 'modern', title: 'Modern and Secure', description: 'Built with the latest technology, your site will be fast, secure, and look great on any device.' },
                { id: 'data', title: 'Designed for Results', description: "We use proven design principles. Our focus is creating a website that gets you more business." },
            ]
        },
        skills: {
            title: "What We Do",
            items: [
                { id: 'prototyping', title: 'Landing Pages that Convert', description: 'A powerful, focused page designed to capture leads and fuel your marketing campaigns.' },
                { id: 'uiux', title: 'Websites that Impress', description: 'A complete, professional website to showcase your brand and build trust with your audience.' },
                { id: 'content', title: 'Copywriting that Sells', description: 'We write clear, persuasive text that connects with your audience and inspires them to take action.' },
                { id: 'code', title: 'Optimized for Speed', description: 'A fast website means happy visitors and better Google rankings. We build for performance from the ground up.' },
                { id: 'api', title: 'Seamless Integrations', description: 'We connect your website to your essential tools, from analytics and CRMs to payment gateways.' },
                { id: 'fullstack', title: 'Your Project, Handled', description: 'From start to finish, we manage it all. You get a market-ready website, completely hassle-free.' },
            ],
        },
        approach: {
            title: "Our Simple 4-Step Process",
            items: [
                { id: 'phase1', phase: "Phase 1", title: "1. We Understand Your Goal", description: "We start by listening. Understanding your core objective ensures we build exactly what you need to succeed." },
                { id: 'phase2', phase: "Phase 2", title: "2. We Design for Impact", description: "We create clean, modern designs based on what works. You choose the direction that best fits your brand." },
                { id: 'phase3', phase: "Phase 3", title: "3. We Build with Precision", description: "Our expert developers use AI-assisted tools to build your website quickly and to the highest standards." },
                { id: 'phase4', phase: "Phase 4", title: "4. You Launch and Grow", description: "We deploy your new website, giving you a powerful tool to grow your business and achieve your goals." },
            ]
        },
        techShowcase: {
            title: "The Tech Behind Your Success",
            subheading: "We use a modern, powerful tech stack to ensure your website is fast, secure, and ready for the future.",
            items: [
                { id: 'ai', title: 'AI-Powered Workflow', description: 'Our AI tools accelerate development, which means a higher quality website at a better price for you.' },
                { id: 'react', title: 'Dynamic Experiences', description: 'We use cutting-edge tech like React to create interactive websites that your visitors will love.' },
                { id: 'node', title: 'Rock-Solid Foundation', description: 'For complex needs, we build secure and scalable back-end systems that you can rely on.' },
                { id: 'cloud', title: 'Elite Hosting', description: "We deploy your site on world-class cloud infrastructure for maximum security, speed, and uptime." },
            ]
        },
        aiIdeaLab: {
            title: "AI Business Advisor",
            subheading: "Have a business idea? Get instant, expert advice from our AI to kickstart your project with a solid strategy.",
            placeholder: "e.g., 'An artisanal bakery for dogs'",
            button: "Get Advice",
            loading: "Generating expert advice...",
            error: "Something went wrong. Please try again later.",
            comingSoonTitle: "Coming Soon!",
            comingSoonText: "We're fine-tuning this feature. It will be ready to advise you shortly!",
        },
        // FIX: Added 'projects' data to support the Projects component and resolve type errors.
        projects: {
            title: "Our Work",
            subheading: "Here are some of the projects we are proud of. Each one is a testament to our commitment to quality and client satisfaction.",
            items: [
                { id: 'project1', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', title: 'Corporate Website Redesign', description: 'A complete overhaul of a B2B company\'s website to improve user experience and lead generation.', tags: ['React', 'Next.js', 'TailwindCSS'] },
                { id: 'project2', image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop', title: 'E-commerce Platform', description: 'A scalable and secure e-commerce platform for a growing retail brand, featuring custom integrations.', tags: ['Node.js', 'MongoDB', 'Stripe'] },
                { id: 'project3', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop', title: 'SaaS Dashboard', description: 'An intuitive dashboard for a SaaS product, providing users with powerful data visualization and management tools.', tags: ['TypeScript', 'React', 'D3.js'] },
            ]
        },
        testimonials: {
            title: "What Our Clients Say",
            subheading: "We're proud of the results we deliver. Here is some feedback from people we've worked with.",
            items: [
                { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Olivia Chen', title: 'Head of Marketing, Innovate Co.', quote: "Nivora Proyect delivered our new landing page in just over a week. Since launching, our conversion rate has jumped by 40%. The speed and quality are unmatched.", stars: 5 },
                { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Ben Carter', title: 'Founder, TechSavvy AI', quote: "As a startup, we needed to move fast without compromising on quality. Their AI-assisted process was fascinating and delivered a website that feels custom-built and premium. We've seen a significant uptick in demo requests.", stars: 5 },
                { image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Sophia Rodriguez', title: 'Owner, The Artisan Boutique', quote: "They took my vision for an elegant online store and made it a reality. The entire process was seamless, and the final website is not just beautiful but also incredibly easy for my customers to use. Sales have been climbing steadily since launch.", stars: 5 },
                { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Liam Goldberg', title: 'Product Manager, DataStream', quote: 'The communication was excellent from start to finish. They understood our technical requirements and integrated our core APIs flawlessly. The end result is a fast, reliable platform that our users love.', stars: 5 },
                { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Aisha Khan', title: 'Founder, Creative Spark Hub', quote: "I'm not a tech person, but they made me feel involved and understood at every step. They translated my creative ideas into a functional, beautiful website faster than I ever thought possible. Highly recommended!", stars: 5 },
            ]
        },
        contact: {
            title: "Let's Build Your Success Story.",
            subheading: "Tell us about your project. We'll create a clear plan to build a website that delivers real results.",
            card_heading: "Contact via Email",
            cards: [
                {
                    id: 'gmail',
                    title: 'Email Us',
                    description: "The best way to start is by email. Tell us about your project.",
                    url: 'mailto:nivorastudio.business@gmail.com',
                    subject: 'Interested in your services',
                    body: "Hello Nivora Proyect,\n\nI'm interested in learning more about your web development services.\n\nI'd like to discuss a project I have in mind.\n\nLooking forward to hearing from you.\n\nBest regards,"
                }
            ],
            expect_heading: "What to expect",
            expect_items: [
                "A response within 24 business hours.",
                "A clear, no-obligation project proposal.",
                "A collaborative and transparent process."
            ],
        },
        footer: {
            copyright: "&copy; {year} Nicolas Oleg | Nivora Proyect. Professional Web Development.",
        },
        socials: {
            github: 'View GitHub profile',
        }
    },
    es: {
        navLinks: [
            { href: '#home', label: 'Inicio' },
            { href: '#about', label: 'Nosotros' },
            { href: '#services', label: 'Servicios' },
            { href: '#testimonials', label: 'Opiniones' },
            { href: '#ai-lab', label: 'AI Lab' },
            { href: '#contact', label: 'Contacto' },
        ],
        hero: {
            greeting: "Convierte tu Idea en una Web que Vende.",
            intro: [
                "Webs que convierten visitantes en clientes.",
                "Diseño profesional, entregado en días.",
                "De la idea al lanzamiento, sin complicaciones."
            ],
            cta1: "Empieza Tu Proyecto",
            cta2: "Nuestra Tecnología",
        },
        about: {
            heading: "Tu Socio en Crecimiento Digital.",
            p1: "Combinamos creatividad humana con eficiencia de IA. Obtienes una web superior que alcanza tus metas, más rápido de lo que imaginas.",
            educationTitle: "Creatividad y IA, Unidas",
            educationText: "Nos centramos en tus metas. Nuestro asistente de IA se encarga del trabajo pesado, permitiéndonos crear tu web perfecta en tiempo récord.",
            techStackTitle: "Creada para el Rendimiento",
            techStackText: "Usamos la tecnología más reciente y fiable. Tu web será rápida, segura y una delicia para tus visitantes.",
            timezoneTitle: "Disponibles para Ti",
            freelanceTitle: "¿Listo para una Web que da Resultados?",
            freelanceText: "Nos asociamos con negocios ambiciosos. Si necesitas una presencia online potente que atraiga y convierta, estamos aquí para construirla."
        },
        experience: {
            title: "Nuestra Ventaja",
            items: [
                { id: 'diversity', title: 'Diseño que Convierte', description: "No solo creamos webs, creamos herramientas de venta. Cada elemento está diseñado para convertir visitantes en clientes fieles." },
                { id: 'versatility', title: 'Tecnología más Inteligente', description: 'Nuestra IA identifica la mejor tecnología para ti, garantizando una web rápida, fiable y segura.' },
                { id: 'scalability', title: 'Construida para Crecer', description: 'Tu negocio evoluciona, y tu web también debería. Creamos plataformas flexibles, listas para tu éxito futuro.' },
                { id: 'agile', title: 'Lanza en Días, no Meses', description: 'Nuestro proceso eficiente, impulsado por IA, te pone en línea más rápido para que empieces a ver resultados ya.' },
            ]
        },
        whyChooseUs: {
            title: "Por Qué Elegirnos",
            items: [
                { id: 'speed', title: 'Lanzamiento desde 5 Días', description: 'Tu web profesional, online en tan solo 5 días. Convertimos tu visión en realidad, muy rápido.' },
                { id: 'availability', title: 'Un Proceso sin Fricción', description: 'Nuestro flujo de trabajo inteligente significa que tu proyecto siempre avanza. Sin retrasos, solo progreso.' },
                { id: 'modern', title: 'Moderna y Segura', description: 'Construida con la última tecnología, tu web será rápida, segura y se verá genial en cualquier dispositivo.' },
                { id: 'data', title: 'Diseñada para el Éxito', description: "Usamos principios de diseño probados. Nuestro foco es crear una web que te consiga más negocio." },
            ]
        },
        skills: {
            title: "Nuestros Servicios",
            items: [
                { id: 'prototyping', title: 'Landing Pages que Convierten', description: 'Una página potente y enfocada, diseñada para captar leads y potenciar tus campañas de marketing.' },
                { id: 'uiux', title: 'Webs que Impresionan', description: 'Una web completa y profesional para proyectar tu marca y generar confianza en tu audiencia.' },
                { id: 'content', title: 'Textos que Venden', description: 'Escribimos textos claros y persuasivos que conectan con tu público y lo inspiran a actuar.' },
                { id: 'code', title: 'Optimizada para la Velocidad', description: 'Una web rápida significa visitantes felices y mejor ranking en Google. Construimos para el rendimiento desde el inicio.' },
                { id: 'api', title: 'Integraciones sin Costuras', description: 'Conectamos tu web con tus herramientas esenciales, desde analíticas y CRMs hasta pasarelas de pago.' },
                { id: 'fullstack', title: 'Tu Proyecto, Solucionado', description: 'De principio a fin, nos encargamos de todo. Recibes una web lista para el mercado, sin ninguna complicación.' },
            ],
        },
        approach: {
            title: "Nuestro Sencillo Proceso de 4 Pasos",
            items: [
                { id: 'phase1', phase: "Fase 1", title: "1. Entendemos tu Meta", description: "Empezamos escuchando. Comprender tu objetivo principal nos asegura construir exactamente lo que necesitas para triunfar." },
                { id: 'phase2', phase: "Fase 2", title: "2. Diseñamos para Impactar", description: "Creamos diseños limpios y modernos basados en lo que funciona. Tú eliges la dirección que mejor se adapte a tu marca." },
                { id: 'phase3', phase: "Fase 3", title: "3. Construimos con Precisión", description: "Nuestros expertos desarrolladores usan herramientas asistidas por IA para construir tu web rápidamente y con los más altos estándares." },
                { id: 'phase4', phase: "Fase 4", title: "4. Lanzas y Creces", description: "Desplegamos tu nueva web, dándote una herramienta poderosa para hacer crecer tu negocio y alcanzar tus metas." },
            ]
        },
        techShowcase: {
            title: "La Tecnología Detrás de tu Éxito",
            subheading: "Usamos un stack tecnológico moderno y potente para asegurar que tu web sea rápida, segura y lista para el futuro.",
            items: [
                { id: 'ai', title: 'Flujo de Trabajo con IA', description: 'Nuestras herramientas de IA aceleran el desarrollo, lo que significa una web de mayor calidad a un mejor precio para ti.' },
                { id: 'react', title: 'Experiencias Dinámicas', description: 'Usamos tecnología de vanguardia como React para crear webs interactivas que a tus visitantes les encantarán.' },
                { id: 'node', title: 'Base Sólida como una Roca', description: 'Para necesidades complejas, construimos sistemas internos seguros y escalables en los que puedes confiar.' },
                { id: 'cloud', title: 'Hosting de Élite', description: "Desplegamos tu web en infraestructura cloud de primer nivel para máxima seguridad, velocidad y disponibilidad." },
            ]
        },
        aiIdeaLab: {
            title: "Asesor de Negocios con IA",
            subheading: "¿Tienes una idea? Recibe consejos de experto al instante de nuestra IA para impulsar tu proyecto con una estrategia sólida.",
            placeholder: "ej: 'Una pastelería artesanal para perros'",
            button: "Recibir Consejos",
            loading: "Generando consejos de experto...",
            error: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
            comingSoonTitle: "¡Próximamente!",
            comingSoonText: "Estamos afinando esta función. ¡Pronto estará lista para darte los mejores consejos!",
        },
        // FIX: Added 'projects' data to support the Projects component and resolve type errors.
        projects: {
            title: "Nuestro Trabajo",
            subheading: "Aquí hay algunos de los proyectos de los que estamos orgullosos. Cada uno es un testimonio de nuestro compromiso con la calidad y la satisfacción del cliente.",
            items: [
                { id: 'project1', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', title: 'Rediseño de Sitio Web Corporativo', description: 'Una renovación completa del sitio web de una empresa B2B para mejorar la experiencia del usuario y la generación de leads.', tags: ['React', 'Next.js', 'TailwindCSS'] },
                { id: 'project2', image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop', title: 'Plataforma de E-commerce', description: 'Una plataforma de comercio electrónico escalable y segura para una marca minorista en crecimiento, con integraciones personalizadas.', tags: ['Node.js', 'MongoDB', 'Stripe'] },
                { id: 'project3', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop', title: 'Dashboard SaaS', description: 'Un dashboard intuitivo para un producto SaaS, que ofrece a los usuarios potentes herramientas de visualización y gestión de datos.', tags: ['TypeScript', 'React', 'D3.js'] },
            ]
        },
        testimonials: {
            title: "Lo Que Dicen Nuestros Clientes",
            subheading: "Estamos orgullosos de los resultados que conseguimos. Aquí tienes algunas opiniones de personas con las que hemos trabajado.",
            items: [
                { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Olivia Chen', title: 'Directora de Marketing, Innovate Co.', quote: 'Nivora Proyect entregó nuestra nueva landing page en poco más de una semana. Desde el lanzamiento, nuestra tasa de conversión ha aumentado un 40%. La velocidad y la calidad son inigualables.', stars: 5 },
                { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Ben Carter', title: 'Fundador, TechSavvy AI', quote: 'Como startup, necesitábamos movernos rápido sin comprometer la calidad. Su proceso asistido por IA fue fascinante y entregó un sitio web que se siente premium y hecho a medida. Hemos visto un aumento significativo en las solicitudes de demostración.', stars: 5 },
                { image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Sophia Rodriguez', title: 'Dueña, The Artisan Boutique', quote: 'Tomaron mi visión de una tienda online elegante y la hicieron realidad. Todo el proceso fue impecable, y la web final no solo es hermosa, sino también increíblemente fácil de usar para mis clientes. Las ventas han aumentado constantemente desde el lanzamiento.', stars: 5 },
                { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=100&q=80', name: 'Liam Goldberg', title: 'Gerente de Producto, DataStream', quote: 'La comunicación fue excelente de principio a fin. Entendieron nuestros requisitos técnicos e integraron nuestras APIs principales sin problemas. El resultado es una plataforma rápida y fiable que a nuestros usuarios les encanta.', stars: 5 },
                { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', name: 'Aisha Khan', title: 'Fundadora, Creative Spark Hub', quote: 'No tengo un perfil técnico, pero me hicieron sentir involucrada y comprendida en cada paso. Tradujeron mis ideas creativas en una web funcional y bonita más rápido de lo que jamás creí posible. ¡Muy recomendables!', stars: 5 },
            ]
        },
        contact: {
            title: "Construyamos tu Historia de Éxito.",
            subheading: "Cuéntanos tu proyecto. Crearemos un plan claro para construir una web que ofrezca resultados reales.",
            card_heading: "Contacto por Email",
            cards: [
                {
                    id: 'gmail',
                    title: 'Escríbenos',
                    description: "La mejor forma de empezar es por email. Cuéntanos sobre tu proyecto.",
                    url: 'mailto:nivorastudio.business@gmail.com',
                    subject: 'Me interesan tus servicios',
                    body: "Hola Nivora Proyect,\n\nEstoy interesado/a en saber más sobre sus servicios de desarrollo web.\n\nMe gustaría hablar sobre un proyecto que tengo en mente.\n\nQuedo a la espera de su respuesta.\n\nSaludos,"
                }
            ],
            expect_heading: "Qué puedes esperar",
            expect_items: [
                "Una respuesta en 24 horas hábiles.",
                "Una propuesta de proyecto clara y sin compromiso.",
                "Un proceso colaborativo y transparente."
            ],
        },
        footer: {
            copyright: "&copy; {year} Nicolas Oleg | Nivora Proyect. Desarrollo Web Profesional.",
        },
        socials: {
            github: 'Ver perfil de GitHub',
        }
    },
};