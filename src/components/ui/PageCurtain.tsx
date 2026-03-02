import { motion } from 'framer-motion';

const panelVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "-100%",
        transition: {
            duration: 1,
            ease: [0.645, 0.045, 0.355, 1],
        }
    }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function PageCurtain() {
    return (
        <motion.div
            className="fixed inset-0 z-[100] pointer-events-none flex flex-col"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >

            
            <motion.div
                className="absolute inset-0 z-10"
                style={{ background: 'linear-gradient(to bottom, #374151, #1f2937)' }}
                variants={panelVariants}
                transition={{ delay: 0.2 }}
            />
           
            <motion.div
                className="absolute inset-0 z-20"
                style={{ background: 'linear-gradient(to bottom, #d1d5db92, #9ca3af)' }}
                variants={panelVariants}
                transition={{ delay: 0.1 }}
            />
           
            <motion.div
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, #ffffff2d, #f3f4f62d)' }}
                variants={panelVariants}
                transition={{ delay: 0 }}
            >
                <span className="font-['Great_Vibes',cursive] text-7xl md:text-9xl text-neutral-800 tracking-widest drop-shadow-sm select-none">
                    Asad
                </span>
            </motion.div>
        </motion.div>
    );
}
