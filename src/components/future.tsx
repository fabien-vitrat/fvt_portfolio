'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

/**
 * Composant Future (Recherche)
 */
export default function Future() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- DÉFINITION DES ANIMATIONS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    // --- DONNÉES DU COMPOSANT ---
    const infos = [
        t.future_stage_info_1,
        t.future_stage_info_2,
        t.future_stage_info_3,
        t.future_stage_info_4,
        t.future_stage_info_5,
        t.future_stage_info_6,
    ];

    // --- Rendu JSX ---
    return (
        <section className='future'>
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.future_title}</h2>
                </motion.div>
                
                <div className="row">
                    {/* === COLONNE DE GAUCHE : TEXTE DE PRÉSENTATION === */}
                    <motion.div 
                        className="col-lg-5 col-md-12 histoire"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >   
                        <motion.div variants={itemVariants}>
                            <p>{t.future_story_p1}</p>
                            <p>{t.future_story_p2}</p>
                            <p>{t.future_story_p3}</p>
                            <p>{t.future_story_p4}</p>
                        </motion.div>
                    </motion.div>
                    
                    {/* === COLONNE DE DROITE : INFORMATIONS SUR LE STAGE === */}
                    <motion.div 
                        className="col-lg-7 col-md-12 stage"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div variants={itemVariants}>
                            <h5>{t.future_stage_title}</h5>
                        </motion.div>

                        <motion.div className='infos' variants={itemVariants}>
                            {infos.map((info, index) => (
                                <motion.p
                                    key={info} 
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {info}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}