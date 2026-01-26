"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

export interface Project {
    title: string;
    description: string;
    longDescription?: string;
    image: StaticImageData;
    gallery?: StaticImageData[];
    technologies: string[];
    achievements: string[];
    Live: string;
    codeLink: string;
}

interface ProjectDetailProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Combine main image and gallery for the slider
    const allImages = project ? [project.image, ...(project.gallery || [])] : [];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setCurrentImageIndex(0); // Reset to first image
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, [allImages.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }, [allImages.length]);

    if (!project) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div key="project-detail-modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
                        {/* Immersive Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-[#040D12]/95 backdrop-blur-2xl"
                        >
                            {/* Animated Glow Particles */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse delay-1000" />
                        </motion.div>

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-6xl h-full lg:h-auto lg:max-h-[90vh] overflow-hidden bg-[#0A1929]/80 border border-white/10 rounded-3xl lg:rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row glass-effect"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - More accessible on all devices */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 lg:top-8 lg:right-8 z-[120] p-3 lg:p-4 bg-white/10 hover:bg-white/20 text-white rounded-xl lg:rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                                aria-label="Close modal"
                            >
                                <FaTimes size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Left Section: Visuals */}
                            <div className="lg:w-[55%] relative flex flex-col h-[35vh] sm:h-[45vh] lg:h-auto bg-black/20 overflow-hidden">
                                <div className="flex-grow relative flex items-center justify-center p-6 lg:p-10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="relative w-full h-full shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden"
                                        >
                                            <Image
                                                src={allImages[currentImageIndex]}
                                                alt={`${project.title} - Preview ${currentImageIndex + 1}`}
                                                fill
                                                className="object-cover lg:object-contain"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/20 to-transparent pointer-events-none" />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Controls */}
                                    {allImages.length > 1 && (
                                        <div className="absolute inset-x-4 lg:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
                                            <button
                                                onClick={prevImage}
                                                className="p-3 lg:p-4 bg-black/40 hover:bg-black/60 text-white rounded-xl lg:rounded-2xl border border-white/10 backdrop-blur-xl pointer-events-auto transition-all"
                                            >
                                                <FaChevronLeft size={16} />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="p-3 lg:p-4 bg-black/40 hover:bg-black/60 text-white rounded-xl lg:rounded-2xl border border-white/10 backdrop-blur-xl pointer-events-auto transition-all"
                                            >
                                                <FaChevronRight size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Bar - Hidden on small mobile for space */}
                                {allImages.length > 1 && (
                                    <div className="hidden sm:flex h-20 px-6 pb-6 flex items-center justify-center gap-3 z-10">
                                        {allImages.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`relative h-10 w-16 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? "border-violet-500 scale-105" : "border-white/5 opacity-40 hover:opacity-100"
                                                    }`}
                                            >
                                                <Image src={img} alt="Thumbnail" fill className="object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right Section: Information */}
                            <div className="lg:w-[45%] flex flex-col flex-grow bg-[#0A1929]/60 backdrop-blur-lg border-t lg:border-t-0 lg:border-l border-white/5 overflow-y-auto custom-scrollbar">
                                <div className="p-6 sm:p-8 lg:p-10 space-y-8 lg:space-y-10">
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="h-[1px] w-6 bg-violet-500" />
                                            <span className="text-violet-400 font-bold text-[10px] uppercase tracking-[0.2em]">Featured Project</span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
                                            {project.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={`${tech}-${i}`}
                                                    className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                            <FaLightbulb className="text-yellow-500/50" />
                                            Overview
                                        </div>
                                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                            {project.longDescription || project.description}
                                        </p>
                                    </motion.div>

                                    {/* Features */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                            <FaRocket className="text-indigo-500/50" />
                                            Key Highlights
                                        </div>
                                        <ul className="grid gap-3">
                                            {project.achievements.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-400">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-600/50 shrink-0" />
                                                    <span className="text-xs sm:text-sm leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Action Buttons - Compact and balanced */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="pt-6 border-t border-white/5 flex flex-wrap gap-3"
                                    >
                                        <a
                                            href={project.Live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all active:scale-95"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white/80 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                                        >
                                            <FaGithub size={16} />
                                            View Code
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <style jsx>{`
                .glass-effect {
                    background: rgba(10, 25, 41, 0.4);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(139, 92, 246, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(139, 92, 246, 0.5);
                }
            `}</style>
        </>
    );
};

export default ProjectDetail;
