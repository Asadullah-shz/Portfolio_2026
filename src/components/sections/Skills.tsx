import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiNextdotjs, SiFramer, SiGit, SiGithub, SiJavascript, SiHtml5, SiCss3, SiN8N } from 'react-icons/si';

const FigmaIcon = (props: any) => (
    <svg viewBox="0 0 38 57" fill="none" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19H19V28.5Z" fill="#0ACF83" />
        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E" />
        <path d="M38 9.5C38 14.7467 33.7467 19 28.5 19H19V0H28.5C33.7467 0 38 4.25329 38 9.5Z" fill="#FF7262" />
        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38H19V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE" />
        <path d="M19 38V57C19 57 19 57 18.9912 57C13.7489 57 9.5 52.7467 9.5 47.5C9.5 42.2533 13.7533 38 19 38Z" fill="#A259FF" />
    </svg>
);

const SKILLS = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'Javascript ', icon: SiJavascript, color: '#FFD700' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'N8N', icon: SiN8N, color: '#a511bcff' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'Figma', icon: FigmaIcon, color: undefined },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Github', icon: SiGithub },
];

const WORDS = ['IMPROVE', 'LEARN', 'GROW', 'BUILD'];

export function Skills() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="relative mb-24 flex flex-col items-center justify-center pt-10">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-[50%] text-[3rem] sm:text-[9rem] md:text-[8rem] font-bold text-theme-text-strong/[0.03] select-none pointer-events-none blur-[7px] z-0 tracking-widest uppercase opacity-20">
                        SKILLS
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-center z-10 text-theme-text-strong mb-6"
                    >
                        Skills
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center w-full max-w-[500px] mb-7 z-10"
                    >
                        <div className="flex items-center w-full opacity-40">
                            <div className="w-[6px] h-[6px] sm:w-2 sm:h-2 border border-neutral-400 rotate-45 bg-neutral-900"></div>
                            <div className="flex-1 h-[1px] bg-neutral-500"></div>
                        </div>

                        <div className="flex -space-x-2 px-6 text-neutral-400">
                            <svg width="48" height="18" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="currentColor" strokeWidth="1" />
                                <path d="M30 2L38 10L30 18L22 10L30 2Z" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="flex items-center w-full opacity-40">
                            <div className="flex-1 h-[1px] bg-neutral-500"></div>
                            <div className="w-[6px] h-[6px] sm:w-2 sm:h-2 border border-neutral-400 rotate-45 bg-neutral-900"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-[10px] sm:text-lg tracking-[0.15em] sm:tracking-[0.3em] text-theme-text-soft/30 z-10 uppercase flex flex-wrap justify-center gap-1 sm:gap-2 items-center text-center px-4 sm:px-0"
                    >
                        <span>I CONSTANTLY TRY TO</span>
                        <div className="text-theme-text-strong font-bold inline-flex min-w-[65px] sm:min-w-[110px] text-center sm:text-left relative h-[1.5em] overflow-hidden ml-0 sm:ml-1">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={WORDS[wordIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-0 whitespace-nowrap"
                                >
                                    {WORDS[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-theme-text-strong/[0.03] blur-[120px] rounded-full -z-10 pointer-events-none" />
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {SKILLS.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="px-6 py-3 bg-theme-pill-bg backdrop-blur-lg border border-theme-pill-border rounded-full font-semibold hover:scale-105 transition-transform cursor-default flex items-center gap-2.5"
                                >
                                    <Icon style={{ color: skill.color }} className="text-lg" />
                                    <span>{skill.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
