import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-theme-pill-bg">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center mb-24 cursor-default">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center w-full max-w-3xl mb-16"
                    >
                        <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--theme-line-strong)' }} />
                        <span className="px-4 sm:px-8 text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] font-semibold text-theme-text-muted uppercase text-center whitespace-normal sm:whitespace-nowrap">
                            EACH PROJECT SHAPED HOW I WORK TODAY.
                        </span>
                        <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--theme-line-strong)' }} />
                    </motion.div>

                    <div className="flex flex-col relative w-full max-w-5xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[7rem] font-bold text-theme-text-strong tracking-tighter leading-[0.85] self-start md:ml-3"
                        >
                            SELECTED
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[7rem] font-bold text-theme-text-strong tracking-tighter leading-[0.85] self-center md:ml-24 mt-2"
                        >
                            PROJECTS
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.85] self-center md:ml-64 mt-2 text-transparent hover:text-white transition-colors duration-300 fill-white"
                            style={{ WebkitTextStroke: '2px rgba(82, 82, 82, 0.4)' }}
                        >
                            SHOWCASE
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <Link key={project.id} to={`/project/${project.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="group relative flex flex-col justify-between px-8 py-10 border border-theme-line-soft rounded-md hover:border-theme-line-strong transition-colors duration-300 overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                                <div className="flex items-start justify-between gap-6 mb-5">
                                    <div className="flex items-start gap-6">
                                        <span className="text-xs text-theme-text-soft font-mono mt-2 shrink-0">
                                            _{String(index + 1).padStart(2, '0')}.
                                        </span>
                                        <h3 className="text-4xl sm:text-5xl font-bold text-theme-text-strong tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className="text-theme-text-soft group-hover:text-theme-text-strong group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={32} />
                                </div>
                                <p className="text-sm text-theme-text-soft max-w-2xl ml-10 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap items-center justify-between gap-4 ml-10">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs px-3 py-1 bg-theme-pill-bg text-theme-text-soft rounded-full border border-theme-pill-border">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-5" onClick={(e) => e.stopPropagation()}>
                                        <a href={project.github} className="flex items-center gap-1.5 text-sm text-theme-text-soft hover:text-theme-text-strong transition-colors duration-200">
                                            <Github size={16} /> Code
                                        </a>
                                        <a href={project.live} className="flex items-center gap-1.5 text-sm text-theme-text-soft hover:text-theme-text-strong transition-colors duration-200">
                                            <ExternalLink size={16} /> Live Preview
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
