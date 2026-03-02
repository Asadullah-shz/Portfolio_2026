import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        if (html.getAttribute('data-theme') === 'light') {
            setIsDark(false);
        } else {
            setIsDark(true);
            html.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        setIsDark(!isDark);
        if (isDark) {
            html.setAttribute('data-theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center w-[44px] h-[24px] rounded-full bg-[#3d3d3d] transition-colors hover:bg-[#4d4d4d] p-[2px] cursor-pointer"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    x: isDark ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="w-[20px] h-[20px] rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg"
            >
                {isDark ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="white" />
                        <path d="M10 2C10 2 10 5.5 13.5 5.5C10 5.5 10 9 10 9C10 9 10 5.5 6.5 5.5C10 5.5 10 2 10 2Z" fill="white" />
                    </svg>
                ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                )}
            </motion.div>
        </button>
    );
}
