'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

/**
 * Composant Course (Mon Parcours)
 */
export default function Course() {
    // 3. OBTENIR LA LANGUE ET LE TEXTE
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- DÉFINITION DES ANIMATIONS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };
    
    const itemVariantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    // --- Rendu JSX ---
    return (
        <section className="course">
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.course_title}</h2>
                </motion.div>

                {/* Conteneur de la frise */}
                <motion.div 
                    className="parcours-separation parcours parcours-colonnes"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Boucle sur 't.course_experiences' */}
                    {t.course_experiences.map((experience, index) => (
                        <motion.div 
                            key={index} 
                            className="parcours-experience"
                            variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >   
                            <span className="parcours-icon">
                                <i className={`${experience.Icon}`}></i>
                            </span>
                            
                            <div className="parcours-infos">
                                <div className="parcours-fleche"></div>
                                
                                <div className="parcours-date">
                                    <p>{experience.Dates}</p>
                                </div>
                                
                                <div>
                                    <h3 className="ecole-entreprise">
                                        {experience.Diplome
                                            ? experience.Diplome
                                            : experience.IntitulePoste
                                        }
                                    </h3>
                                    <p className="diplome-entreprise">
                                        {experience.Ecole 
                                            ? experience.Ecole 
                                            : `${experience.Entreprise} - ${experience.TypeEmploi}`
                                        }
                                    </p>
                                    <p className="lieu-mention">
                                        {experience.Lieu
                                            ? experience.Lieu
                                            : (experience.Mention ? `Mention : ${experience.Mention}` : '')
                                        }
                                    </p>
                                </div>
                            </div> 
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}