'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';


/**
 * Composant Portfolio
 */
export default function Portfolio() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- GESTION DE L'ÉTAT (STATE) ---
    const [active, setActive] = useState(t.portfolio_projects[1]?.id || 'project-1');

    // --- DÉFINITION DES ANIMATIONS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    };

    // --- Rendu JSX ---
    return (
        <section className='portfolio'>
            <div className="container">

                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.portfolio_title}</h2>
                </motion.div>

                <motion.div 
                    className="portfolio-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.portfolio_projects.map((project) => (
                        <motion.div
                            key={project.id} 
                            className={`project-card ${
                                active === project.id ? 'active' : 'inactive'
                            }`}
                            onClick={() => setActive(project.id)}
                            style={{ backgroundImage: `url(${project.image})` }}
                            variants={itemVariants}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="project-overlay">
                                
                                {active !== project.id ? (
                                    <div className="vertical-text">
                                        <h3>{project.name}</h3>
                                    </div>
                                ) : (
                                    <div className="card-content">
                                        <h2>{project.name}</h2>
                                        <p>{project.description}</p>
                                        
                                        <div className="project-links">
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <FaExternalLinkAlt /> {t.portfolio_demo}
                                                </a>
                                            )}
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub /> {t.portfolio_repo}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}