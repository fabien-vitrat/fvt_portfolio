'use client';

import { experiences } from '../data/parcoursProAca';
import { motion } from 'framer-motion';

export default function Course() {
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

    // ... (imports et variants restent les mêmes)

    return (
        <section className="course">
            <div className="container">
                {/* Le titre reste fixe en haut */}
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>MON PARCOURS</h2>
                </motion.div>

                {/* Le nouveau conteneur pour le défilement */}
                <div className="parcours-scroll-wrapper"> 
                    <div className="row">
                        <motion.div 
                            className="parcours-separation parcours parcours-colonnes"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* J'ai retiré le div dupliqué qui était ici :
                            <div className="parcours-separation parcours parcours-colonnes"> 
                            */}
                                {experiences.map((experience, index) => (
                                    <motion.div 
                                    key={index} 
                                    className="parcours-experience" // Utilisez cette classe
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    >   
                                        {/* J'ai retiré le div dupliqué qui était ici :
                                        <div key={index} className="parcours-experience">
                                        */}
                                            <span className="parcours-icon">
                                                <i className={`${experience.Icon}`}></i>
                                            </span>
                                            <div className="parcours-infos">
                                                <div className="parcours-fleche"></div>
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
                                                            : `Mention : ${experience.Mention}`
                                                        }
                                                    </p>
                                                </div>
                                                <div className="parcours-date">
                                                    <p>{experience.Dates}</p>
                                                </div>
                                            </div> 
                                        {/* </div> */}
                                    </motion.div>
                                ))}
                            {/* </div> */}
                        </motion.div>
                    </div>
                </div> {/* Fin du parcours-scroll-wrapper */}
            </div>
        </section>
    );
}
