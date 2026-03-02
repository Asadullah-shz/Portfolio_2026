import { lazy, Suspense, useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SideLines } from './components/layout/SideLines';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { ShootingStars } from './components/ui/ShootingStars';
import { SocialLinks } from './components/layout/SocialLinks';

const ProjectDetails = lazy(() => import('./components/sections/ProjectDetails').then(module => ({ default: module.ProjectDetails })));

function Home() {
    const footerRef = useRef<HTMLDivElement>(null);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const el = footerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setFooterVisible(entry.isIntersecting),
            { threshold: 0.05 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-theme-bg text-theme-text-strong font-sans overflow-x-hidden selection:bg-theme-cta-bg selection:text-theme-bg relative"
        >
            <ShootingStars
                starCount={80}
                minSpeed={3}
                maxSpeed={5}
                minTrailLength={60}
                maxTrailLength={120}
                newStarEveryNFrames={120}
                starColors={['#9E00FF', '#2EB9DF', '#ffffff']}
            />
            <Navbar />
            <SideLines />
            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <div ref={footerRef}>
                <Footer />
            </div>
            <SocialLinks visible={!footerVisible} />
        </motion.div>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={null}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}

export default App;

