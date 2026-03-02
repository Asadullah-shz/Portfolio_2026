import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react';

const CONTACT_LINKS = [
    {
        label: 'Email',
        value: 'asadshzdev@gmail.com',
        href: 'mailto:asadshzdev@gmail.com',
        icon: Mail,
        color: '#06B6D4',
    },
    {
        label: 'GitHub',
        value: 'github.com/Asadullah-shz',
        href: 'https://github.com/Asadullah-shz',
        icon: Github,
        color: '#ffffff',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/asadullah-shz',
        href: 'www.linkedin.com/in/asadullah-shahbaz',
        icon: Linkedin,
        color: '#0A66C2',
    },
    {
        label: 'Location',
        value: 'Pakistan — Remote',
        href: null,
        icon: MapPin,
        color: '#a855f7',
    },
];

export function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("access_key", "844a7474-f07b-41fe-80a1-9c29559c4409");
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3500);
                setFormState({ name: '', email: '', message: '' });
            } else {
                console.error("Failed to submit message");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
                <div className="flex flex-col items-center justify-center mb-20 cursor-default">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center w-full max-w-3xl mb-14"
                    >
                        <div className="h-[1px] flex-1 bg-theme-line-soft" />
                        <span className="px-6 text-[13px] sm:text-sm tracking-[0.25em] font-medium text-theme-text-soft uppercase">
                            LET'S BUILD SOMETHING TOGETHER
                        </span>
                        <div className="h-[1px] flex-1 bg-theme-line-soft" />
                    </motion.div>

                    <div className="flex flex-col relative w-full max-w-5xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[7rem] font-bold text-theme-text-strong tracking-tighter leading-[0.85] self-start md:ml-3"
                        >
                            GET IN
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[7rem] font-bold text-theme-text-strong tracking-tighter leading-[0.85] self-center md:ml-24 mt-2"
                        >
                            TOUCH
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.85] self-center md:ml-100 mt-2 text-transparent hover:text-theme-text-strong transition-colors duration-300 hover:text-white transition-colors duration-300"
                            style={{ WebkitTextStroke: '2px rgba(82, 82, 82, 0.4)' }}
                        >
                            WITH ME
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center justify-center w-full max-w-[500px] mx-auto mb-16 backdrop-blur-2xl"
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="flex flex-col gap-5 bg-theme-pill-bg border border-theme-pill-border rounded-xl p-8 backdrop-blur-sm"
                    >
                        <h3 className="text-lg font-semibold text-theme-text-strong tracking-widest uppercase mb-1">
                            Send a Message
                        </h3>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-name" className="text-xs tracking-[0.2em] text-theme-text-soft uppercase">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                placeholder="Your name"
                                value={formState.name}
                                onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                                className="w-full bg-theme-bg border border-theme-line-soft rounded-md px-4 py-3 text-sm text-theme-text-strong placeholder-theme-text-soft focus:outline-none focus:border-cyan-500/60 transition-colors duration-200"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-email" className="text-xs tracking-[0.2em] text-theme-text-soft uppercase">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                required
                                placeholder="your@email.com"
                                value={formState.email}
                                onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                                className="w-full bg-theme-bg border border-theme-line-soft rounded-md px-4 py-3 text-sm text-theme-text-strong placeholder-theme-text-soft focus:outline-none focus:border-cyan-500/60 transition-colors duration-200"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-message" className="text-xs tracking-[0.2em] text-theme-text-soft uppercase">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={5}
                                placeholder="Tell me about your project or just say hi..."
                                value={formState.message}
                                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                                className="w-full bg-theme-bg border border-theme-line-soft rounded-md px-4 py-3 text-sm text-theme-text-strong placeholder-theme-text-soft focus:outline-none focus:border-cyan-500/60 transition-colors duration-200 resize-none"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-2 flex items-center justify-center gap-2.5 px-8 py-3.5 bg-theme-cta-bg hover:opacity-80 border border-theme-line-soft hover:border-cyan-500/40 text-theme-cta-text font-semibold rounded-md transition-all duration-300 text-sm tracking-wider uppercase cursor-pointer"
                        >
                            {submitted ? (
                                <>
                                    <span className="text-cyan-400">✓</span>
                                    <span className="text-cyan-400">Message Sent!</span>
                                </>
                            ) : (
                                <>
                                    <Send size={15} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="flex flex-col gap-4 justify-center"
                    >
                        <p className="text-base md:text-lg text-theme-text-soft leading-relaxed mb-6 max-w-md">
                            I'm open to freelance work, full-time roles, and interesting collaborations. If you have a project in mind or just want to connect — my inbox is always open.
                        </p>
                        {CONTACT_LINKS.map((item, index) => {
                            const Icon = item.icon;
                            const inner = (
                                <>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-pill-bg border border-theme-pill-border shrink-0 transition-colors duration-300 group-hover:border-theme-line-strong"
                                        style={{ color: item.color }}
                                    >
                                        <Icon size={17} />
                                    </div>
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <span className="text-[10px] tracking-[0.25em] text-theme-text-soft uppercase mb-0.5">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-theme-text-muted group-hover:text-theme-text-strong transition-colors duration-200 truncate">
                                            {item.value}
                                        </span>
                                    </div>
                                    {item.href && (
                                        <ArrowUpRight
                                            size={15}
                                            className="text-theme-text-soft group-hover:text-theme-text-muted transition-colors duration-200 shrink-0"
                                        />
                                    )}
                                </>
                            );

                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 px-5 py-4 bg-zinc-900/40 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all duration-300 cursor-pointer"
                                        >
                                            {inner}
                                        </a>
                                    ) : (
                                        <div className="group flex items-center gap-4 px-5 py-4 bg-zinc-900/40 border border-neutral-800 rounded-xl">
                                            {inner}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-2 flex items-center gap-3 px-5 py-3 rounded-full bg-neutral-900/60 border border-neutral-800 w-fit"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span className="text-xs text-neutral-400 tracking-widest uppercase">
                                Available for new projects
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
