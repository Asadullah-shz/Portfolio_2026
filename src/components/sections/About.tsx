import { motion } from 'framer-motion';
import Img from "../../Assets/AboutPic.webp";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-7 lg:px-30 mb-20 lg:mb-28">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-[28px] font-medium text-theme-text-muted font-['Oxanium'] tracking-wide leading-relaxed max-w-5xl"
                >
                    A showcase of how I design backend logic, frontend architecture, and AI workflows into one cohesive system.
                </motion.p>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="relative group perspective-1000">
                        <div className="absolute top-4 -left-4 w-full h-full bg-theme-resume-border rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm z-0"></div>
                        <div className="relative z-10 bg-[#e0e0e0] rounded-xl overflow-hidden w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/5] lg:aspect-[3/4] border border-theme-border-color">
                            <img
                                src={Img}
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = Img;
                                }}
                                alt="Asad - Web Developer"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-13 tracking-[0.1em] text-theme-text-strong uppercase font-['Oxanium']">
                        ABOUT ME
                    </h2>

                    <div className="flex flex-col gap-8">
                        <p className="text-base md:text-xl text-theme-text-soft leading-relaxed max-w-lg">
                            I'm Asad, a passionate web developer specializing in bridging the gap between elegant design and robust engineering. Whether I am architecting automation engines or building scalable web applications, my focus is always on delivering exceptional user experiences.
                        </p>
                        <p className="text-base md:text-xl text-theme-text-soft leading-relaxed max-w-lg">
                            By combining technical expertise with a sharp eye for aesthetics, I transform complex problems into intuitive, responsive, and visually stunning digital solutions built for the modern web.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
