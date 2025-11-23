'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

// --- IMPORTS DES IMAGES ---
import SolidWorksLogo from '@/src/public/tech-logos/solidworks.png';
import MatlabLogo from '@/src/public/tech-logos/matlab.png';
import WordLogo from '@/src/public/tech-logos/word.png';
import ExcelLogo from '@/src/public/tech-logos/excel.png';
import PowerpointLogo from '@/src/public/tech-logos/powerpoint.png';
import GeogebraLogo from '@/src/public/tech-logos/geogebra.png';
import ScratchLogo from '@/src/public/tech-logos/scratch.png';
import PythonLogo from '@/src/public/tech-logos/python.png';
import HtmlLogo from '@/src/public/tech-logos/html.png';
import CssLogo from '@/src/public/tech-logos/css.png';
import JavascriptLogo from '@/src/public/tech-logos/javascript.png';
import BootstrapLogo from '@/src/public/tech-logos/bootstrap.png';
import CLogo from '@/src/public/tech-logos/c.png';
import ReactLogo from '@/src/public/tech-logos/react.png';
import NextjsLogo from '@/src/public/tech-logos/nextjs.png';

/**
 * Composant Skills (Compétences)
 */
export default function Skills() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- DONNÉES DU COMPOSANT ---
    const techSkills = [
        { id: 'solidworks', name: t.skills_solidworks, image: SolidWorksLogo },
        { id: 'matlab',     name: t.skills_matlab,     image: MatlabLogo },
        { id: 'word',       name: t.skills_word,       image: WordLogo },
        { id: 'excel',      name: t.skills_excel,      image: ExcelLogo },
        { id: 'powerpoint', name: t.skills_powerpoint, image: PowerpointLogo },
        { id: 'geogebra',   name: t.skills_geogebra,   image: GeogebraLogo },
        { id: 'scratch',    name: t.skills_scratch,    image: ScratchLogo },
        { id: 'python',     name: t.skills_python,     image: PythonLogo },
        { id: 'html',       name: t.skills_html,       image: HtmlLogo },
        { id: 'css',        name: t.skills_css,        image: CssLogo },
        { id: 'javascript', name: t.skills_javascript, image: JavascriptLogo },
        { id: 'bootstrap',  name: t.skills_bootstrap,  image: BootstrapLogo },
        { id: 'c',          name: t.skills_c,          image: CLogo },
        { id: 'react',      name: t.skills_react,      image: ReactLogo },
        { id: 'nextjs',     name: t.skills_nextjs,     image: NextjsLogo },
    ];

    // --- GESTION DE L'ÉTAT (STATE) ---
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (id: string) => { 
        if (timerId) clearTimeout(timerId);
        setActiveTooltip(id);
    };

    const handleMouseLeave = () => {
        setActiveTooltip(null);
    };

    const handleClick = (id: string) => { 
        if (timerId) clearTimeout(timerId);
        setActiveTooltip(id);
        const newTimer = setTimeout(() => {
            setActiveTooltip(null);
        }, 5000);
        setTimerId(newTimer);
    };

    useEffect(() => {
        return () => {
            if (timerId) clearTimeout(timerId);
        };
    }, [timerId]);

    // --- DÉFINITION DES ANIMATIONS ---
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    // --- Rendu JSX ---
    return (
        <section className="skills">
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.skills_title}</h2>
                </motion.div>

                <div className="skillsContent">
                    <motion.div
                        className="skillsGrid"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                    >
                        {techSkills.map((skill) => (
                            <motion.div 
                                className="skillBox" 
                                key={skill.id} 
                                variants={itemVariants}
                                title={skill.name} 
                                onMouseEnter={() => handleMouseEnter(skill.id)} 
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(skill.id)} 
                            >
                                <Image
                                    src={skill.image}
                                    alt={t.skills_alt.replace('{skillName}', skill.name)}
                                    height={40} 
                                    width={80}
                                    priority
                                />
                                
                                <span 
                                    // Vérifie l'ID stable
                                    className={`skillTooltip ${
                                        activeTooltip === skill.id ? 'visible' : ''
                                    }`}
                                >
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}