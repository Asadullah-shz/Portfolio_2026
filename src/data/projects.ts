export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    category: string;
    overview: string;
    concept: string;
    usability: string;
    status: string;
    purpose: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'scaleforge',
        title: 'ScaleForge',
        category: 'IN PLANNING & DEVELOPMENT',
        description: 'A high-performance B2B sales automation & CRM platform with a centralized dashboard for managing leads, automated outreach via n8n, and serverless persistence using Upstash Redis.',
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Upstash Redis', 'n8n', 'Zustand'],
        github: '#',
        live: '#',
        overview: 'ScaleForge started from my own experience managing complex B2B sales cycles. While studying the market, I realized that existing CRM solutions often lacked the flexibility needed for rapid outreach automation.',
        concept: 'At the heart of ScaleForge is the idea of seamless automation between lead generation and CRM management. Rather than manually syncing data, ScaleForge uses n8n to automate the entire workflow.',
        usability: 'This project is designed with speed and simplicity in mind. The dashboard is kept minimal to allow users to focus on what matters most: closing deals.',
        status: 'ScaleForge is currently in its early stages of development, focusing on the core integration between the dashboard and n8n.',
        purpose: 'The goal of ScaleForge is to empower small to medium sales teams with the same level of automation power that enterprise-level solutions provide.'
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Platform',
        category: 'COMPLETED',
        description: 'A full-stack e-commerce solution built with React, Node.js, and Stripe integration.',
        tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        github: '#',
        live: '#',
        overview: 'This project was built to explore the complexities of online payments and state management in a large-scale application.',
        concept: 'The core concept was to provide a modular storefront where any business could easily set up and start selling online with Stripe.',
        usability: 'The layout is clean and responsive, ensuring a smooth shopping experience across all devices, from mobile to desktop.',
        status: 'The platform is fully functional and supports product listings, cart management, and secure checkout.',
        purpose: 'To provide a robust, scalable foundations for modern e-commerce businesses.'
    },
    {
        id: 'taskmanager',
        title: 'Task Management App',
        category: 'MAINTENANCE',
        description: 'A beautiful Kanban-style task manager with real-time updates and drag-and-drop support.',
        tech: ['Next.js', 'Tailwind', 'Zustand', 'Supabase'],
        github: '#',
        live: '#',
        overview: 'Inspired by Trello and Jira, but focused on extreme simplicity and speed for individual developers.',
        concept: 'The app uses a drag-and-drop Kanban board to visualize tasks and their current progress through the workflow.',
        usability: 'With a dark-mode first approach, the UI is easy on the eyes during long coding sessions.',
        status: 'Currently in maintenance mode, with occasional updates for bug fixes and dependency upgrades.',
        purpose: 'To help developers stay organized and productive without the bloat of traditional project management tools.'
    }
];
