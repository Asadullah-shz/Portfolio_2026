import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

interface SocialLinksProps {
    visible: boolean;
}

export function SocialLinks({ visible }: SocialLinksProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible
                ? { opacity: 1, x: 0, pointerEvents: 'auto' }
                : { opacity: 0, x: 20, pointerEvents: 'none' }
            }
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed right-6 bottom-16 z-50 hidden md:flex flex-col items-center gap-4"
        >
            <a href="mailto:asadshzdev@gmail.com" className="w-[38px] h-[38px] rounded-full bg-theme-pill-bg border border-theme-pill-border flex items-center justify-center text-theme-text-soft hover:text-theme-text-strong hover:bg-theme-cta-bg transition-colors backdrop-blur-lg">
                <Mail size={16} />
            </a>
            <a href="https://linkedin.com/in/asadullah-shahbaz" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-theme-pill-bg border border-theme-pill-border flex items-center justify-center text-theme-text-soft hover:text-theme-text-strong hover:bg-theme-cta-bg transition-colors backdrop-blur-lg">
                <Linkedin size={16} />
            </a>
            <a href="https://github.com/Asadullah-shz" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-theme-pill-bg border border-theme-pill-border flex items-center justify-center text-theme-text-soft hover:text-theme-text-strong hover:bg-theme-cta-bg transition-colors backdrop-blur-lg">
                <Github size={16} />
            </a>
        </motion.div>
    );
}
