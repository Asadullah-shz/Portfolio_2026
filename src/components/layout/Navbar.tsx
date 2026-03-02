import { useState, useEffect } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../Assets/logo.webp';

const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-theme-nav-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex items-center group relative z-50">
                    <img src={logo} alt="" className='h-12 w-auto' />
                    <span className="font-['Great_Vibes',cursive] text-3xl tracking-wide font-normal text-theme-text-soft mt-1 group-hover:opacity-80 transition-opacity">Asad</span>
                </a>

                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center text-[15px] font-bold tracking-wide text-theme-text-strong">
                    <ul className="flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-theme-text-muted transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <ThemeToggle />
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex bg-white text-black items-center gap-2 bg-theme-resume-bg text-theme-resume-text px-5 py-2 hover:bg-theme-resume-hover-bg hover:text-theme-resume-hover-text transition-all duration-300 text-sm font-semibold select-none rounded-sm  border-2 border-theme-resume-bg hover:bg-zinc-900 hover:text-white shadow-lg">
                        Resume <ChevronDown size={14} />
                    </a>
                </div>

                <div className="lg:hidden flex items-center gap-4 relative z-50">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-theme-text-strong hover:bg-theme-pill-bg rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 top-[72px] bg-theme-bg/95 backdrop-blur-xl z-40"
                    >
                        <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
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
        </nav>
    );
}
