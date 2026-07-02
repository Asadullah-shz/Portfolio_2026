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
        id: 'dayflow',
        title: 'DayFlow',
        category: 'ACTIVE DEVELOPMENT',
        description: 'A multi-tenant business assistant that turns live business data into conversational insights inside WhatsApp and Telegram, with automated BI reporting and a whitelabel admin system.',
        tech: ['Node.js', 'Docker', 'WhatsApp API', 'Telegram Bot API', 'Google Sheets API', 'Notion API', 'Supabase'],
        github: 'https://github.com/Asadullah-shz/DayFlow-Business-Assistant-Bot',
        live: 'https://dayflow-v2.vercel.app/',
        overview: 'DayFlow was built to close the gap between the raw business data entrepreneurs already track in tools like Google Sheets and Notion, and the chat apps they actually live in every day. Instead of forcing owners to open a dashboard, DayFlow brings the data directly into WhatsApp and Telegram.',
        concept: 'At its core, DayFlow is a Smart Logic Engine that reads live data from pluggable providers (Sheets, Notion, Airtable, Supabase) and answers natural-language questions like "How are my sales today?" with accurate, real-time breakdowns. A Model Routing Chain keeps the assistant available even during provider outages or quota limits.',
        usability: 'The experience is designed around zero-friction access: business owners just message the bot. Admins can register or unregister client businesses on the fly with simple chat commands, making onboarding a whitelabel, multi-tenant process rather than a manual setup.',
        status: 'DayFlow currently supports multi-provider data integration, automated morning briefings, evening summaries, and branded monthly PDF performance reports. Ongoing work is focused on refining the admin registration flow so client-specific configs are pulled from stored registration data rather than environment defaults.',
        purpose: 'The goal of DayFlow is to give small and medium businesses an always-on, conversational business partner — one that surfaces the numbers that matter without requiring them to leave the chat apps they already use.'
    },

    {
        id: 'scaleforge',
        title: 'ScaleForge',
        category: 'IN PLANNING & DEVELOPMENT',
        description: 'A high-performance B2B sales automation & CRM platform with a centralized dashboard for managing leads, automated outreach via n8n, and serverless persistence using Upstash Redis.',
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Upstash Redis', 'n8n', 'Zustand'],
        github: '#',
        live: 'https://scale-forge-pifu.vercel.app/dashboard',
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
