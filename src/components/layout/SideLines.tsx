import { useState, useEffect } from 'react';

const SECTIONS = ['hero', 'about', 'skills'];

export function SideLines() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observers = SECTIONS.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '-20% 0% -20% 0%'
                }
            );

            observer.observe(el);
            return observer;
        });

        return () => {
            observers.forEach(obs => obs?.disconnect());
        };
    }, []);

    return (
        <div className="hidden lg:flex flex-col gap-10 opacity-30 fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference pointer-events-none transition-opacity duration-500">
            {SECTIONS.map((id) => (
                <div
                    key={id}
                    className={`h-[1px] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(255,255,255,0.3)]
                        ${activeSection === id ? 'w-9 opacity-100' : 'w-6 opacity-40'}`}
                    style={{ backgroundColor: 'var(--theme-side-line)' }}
                />
            ))}
        </div>
    );
}
