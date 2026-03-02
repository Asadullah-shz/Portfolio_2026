import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useLiveClock(timeZone: string) {
    const [time, setTime] = useState('');
    useEffect(() => {
        const update = () => {
            setTime(
                new Intl.DateTimeFormat('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                    timeZone,
                }).format(new Date())
            );
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, [timeZone]);
    return time;
}

function WaveLines() {
    return (
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
            <svg
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                className="w-full h-[200px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-100,100 C100,40 200,160 400,100 C600,40 700,160 900,100 C1100,40 1200,160 1400,100"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                >
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="0,0"
                        to="-300,0"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </path>
                <path
                    d="M-100,110 C150,60 250,160 450,110 C650,60 750,160 950,110 C1150,60 1250,160 1400,110"
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="1"
                >
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="-150,0"
                        to="-450,0"
                        dur="11s"
                        repeatCount="indefinite"
                    />
                </path>
                <path
                    d="M-100,90 C200,150 300,30 500,90 C700,150 800,30 1000,90 C1200,150 1300,30 1400,90"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="0.8"
                >
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="-80,0"
                        to="-380,0"
                        dur="14s"
                        repeatCount="indefinite"
                    />
                </path>
                <path
                    d="M-100,100 C80,70 180,130 300,100 C420,70 520,130 640,100 C760,70 860,130 980,100 C1100,70 1200,130 1400,100"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="0.6"
                >
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="-200,0"
                        to="-500,0"
                        dur="9s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
        </div>
    );
}

const NAV_LINKS = [
    { label: '[GITHUB]', href: 'https://github.com/Asadullah-shz' },
    { label: '[LINKEDIN]', href: 'https://linkedin.com/in/asadullah-shahbaz' },
    { label: '[INQUIRY]', href: 'mailto:asadshzdev@gmail.com' },
];

export function Footer() {
    const time = useLiveClock('Asia/Karachi');
    const year = new Date().getFullYear();

    return (
        <footer
            className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #111827 0%, #0d0d1a 60%, #0a0a14 100%)' }}
        >
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-28 bg-cyan-400 origin-center z-20"
            />

            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-between items-start pt-10 px-8 md:px-14 z-10 relative"
            >
                {NAV_LINKS.map((link, i) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        className="group text-[11px] sm:text-xs tracking-[0.25em] text-neutral-400 hover:text-white transition-colors duration-300 font-['Oxanium'] uppercase hover:bg-theme-pill-bg"
                    >
                        <span className="relative block overflow-hidden leading-tight h-[1.2em]">
                            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[1.2em]">
                                <span className="h-[1.2em]">{link.label}</span>
                                <span className="h-[1.2em]">{link.label}</span>
                            </span>
                        </span>
                    </motion.a>
                ))}
            </motion.nav>

            <div className="relative flex-1 flex items-center justify-center">
                <WaveLines />
                <motion.h2
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 select-none text-white font-black uppercase tracking-[-0.02em] leading-none text-center"
                    style={{
                        fontSize: 'clamp(5rem, 20vw, 16rem)',
                        fontFamily: "'Oxanium', sans-serif",
                    }}
                >
                    ASAD
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-8 md:px-14 pb-10 text-neutral-500"
            >
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-['Oxanium']">
                    PAKISTAN, PKT:&nbsp;{time}
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-['Oxanium'] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    DESIGNING WITH CODE
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-['Oxanium'] text-right leading-relaxed">
                    © ALL RIGHTS RESERVED.<br />
                    {year} ASAD
                </span>
            </motion.div>
        </footer>
    );
}
