import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ["CREATIVE", "CRAFTING", "FOCUSED", "ENGINEER", "DESIGNER", "BUILDER", "WEB DEV"];

export function Hero() {
    const [index, setIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % WORDS.length);
        }, 1700);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center lg:justify-start w-full lg:w-auto"
                >
                    <h1
                        className="font-black tracking-[0.18em] text-theme-text-strong uppercase font-['Oxanium'] text-center lg:text-left whitespace-nowrap"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)', minWidth: 'min-content' }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block"
                            >
                                {WORDS[index]}
                            </motion.span>
                        </AnimatePresence>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    className="hidden lg:block w-[2px] h-36 bg-theme-line-shadow origin-top"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-3 text-center lg:text-left"
                >
                    <h2 className="text-lg md:text-xl font-bold text-theme-text-strong tracking-wide">
                        Front-End Engineer
                    </h2>
                    <p className="text-theme-text-soft text-sm md:text-base font-medium">
                        Crafting fast, accessible web interfaces
                    </p>
                    <p className="text-theme-text-soft text-sm md:text-base font-medium">
                        Based in Pakistan • React • TailwindCss
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 0 : 1 }}
                transition={{ delay: isScrolled ? 0 : 1, duration: 0.5 }}
                className="fixed left-6 bottom-12 z-50 pointer-events-none hidden md:flex flex-col items-center gap-4"
            >
                <div
                    className="w-[1.5px] h-14"
                    style={{ backgroundColor: 'var(--theme-line-scroll)' }}
                />
                <div className="text-[10px] tracking-[0.4em] text-theme-text-strong font-bold uppercase mb-1" style={{ writingMode: 'vertical-rl' }}>
                    Scroll Down
                </div>
                <div
                    className="w-[1.5px] h-14"
                    style={{ backgroundColor: 'var(--theme-line-scroll)' }}
                />
            </motion.div>
        </section>
    );
}
