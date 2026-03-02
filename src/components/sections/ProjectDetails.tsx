import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/projects';
import { ShootingStars } from '../ui/ShootingStars';
import { Footer } from '../layout/Footer';
import { PageCurtain } from '../ui/PageCurtain';
import { LucideArrowLeft, Menu, X, } from 'lucide-react';

const NAV_LINKS = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
];

export function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = PROJECTS.find(p => p.id === id);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-theme-bg text-theme-text-strong flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-theme-cta-text hover:underline"
                    >
                        Go back to home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-h-screen bg-theme-bg text-theme-text-strong font-sans relative overflow-x-hidden selection:bg-theme-cta-bg selection:text-theme-bg"
        >
            <PageCurtain />
            <ShootingStars
                starCount={80}
                minSpeed={3}
                maxSpeed={5}
                minTrailLength={60}
                maxTrailLength={120}
                newStarEveryNFrames={120}
                starColors={['#9E00FF', '#2EB9DF', '#ffffff']}
            />
            <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none hover:text-gray-700 ">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold text-theme-text-soft hover:text-theme-text-strong transition-colors pointer-events-auto uppercase "
                >
                    <LucideArrowLeft size={16} /> BACK
                </button>
            </nav>
            <div className="absolute top-8 right-4 md:right-8 z-50 flex flex-col items-center gap-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-theme-text-strong hover:bg-theme-pill-bg rounded-full transition-colors relative z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1} />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-theme-bg/95 backdrop-blur-xl z-40 flex items-center justify-center"
                    >
                        <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-theme-text-hover transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <div className="w-12 h-px bg-theme-line-soft my-4"></div>
                            <li>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold text-theme-text-strong hover:opacity-70 transition-opacity uppercase rounded-sm border-2 border-theme-resume-bg w-30 justify-center">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <main className="container mx-auto px-6 pt-32 md:pt-40 pb-32 relative z-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] bg-theme-pill-bg border border-theme-pill-border rounded-full text-theme-text-muted mb-10 uppercase"
                    >
                        {project.category}
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold text-theme-text-strong mb-20 tracking-tighter leading-none">
                        {project.title}
                    </h1>
                    <div className="space-y-24">
                        {[
                            { title: 'Project Overview', content: project.overview },
                            { title: 'Core Concept', content: project.concept },
                            { title: 'Designed with Usability in Mind', content: project.usability },
                            { title: 'Current Development Status', content: project.status },
                            { title: 'Project Purpose', content: project.purpose },
                        ].map((section, idx) => (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                            >
                                <h2 className="text-xl md:text-2xl font-bold mb-6 text-theme-text-strong tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="text-[17px] md:text-[19px] text-theme-text-soft leading-relaxed opacity-90 font-light">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </motion.div>
    );
}
