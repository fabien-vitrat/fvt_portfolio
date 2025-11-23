'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';


export default function Values() {
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

    // Variante pour les rangées de GAUCHE
    const itemVariantsLeft = {
        // hidden: { opacity: 0, x: -50 },
        // visible: { opacity: 1, x: 0 }
    };

    // Variante pour les rangées de DROITE
    const itemVariantsRight = {
        // hidden: { opacity: 0, x: 50 },
        // visible: { opacity: 1, x: 0 }
    };

    // --- Rendu JSX ---
    return (
        <section className='valeurs values'>
            <div className="container">

                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.values_title}</h2>
                </motion.div>

                <motion.div 
                    className="all"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* === Rangée 1: BIENVEILLANCE (Gauche) === */}
                    <motion.div 
                        className="row gauche" 
                        variants={itemVariantsLeft} 
                        key="value-1"
                    >
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-hand-holding-heart"></i>
                                <h2>{t.values_card_1_title}</h2>
                            </div>
                        </div>
                        <div className="col-6 description">
                            <p>{t.values_card_1_desc_1}</p>
                            <p>{t.values_card_1_desc_2}</p>
                        </div>
                    </motion.div>

                    {/* === Rangée 2: TRAVAIL D'ÉQUIPE (Droite) === */}
                    <motion.div 
                        className="row droite" 
                        variants={itemVariantsRight} 
                        key="value-2"
                    >
                        <div className="col-6 description">
                            <p>{t.values_card_2_desc_1}</p>
                            <p>{t.values_card_2_desc_2}</p>
                        </div>
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-people-group"></i>
                                <h2>{t.values_card_2_title}</h2>
                            </div>
                        </div>
                    </motion.div>

                    {/* === Rangée 3: ENGAGEMENT (Gauche) === */}
                    <motion.div 
                        className="row gauche" 
                        variants={itemVariantsLeft} 
                        key="value-3"
                    >
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-solid fa-handshake-angle"></i>
                                <h2>{t.values_card_3_title}</h2>
                            </div>
                        </div>
                        <div className="col-6 description">
                            <p>{t.values_card_3_desc_1}</p>
                            <p>{t.values_card_3_desc_2}</p>
                        </div>
                    </motion.div>

                    {/* === Rangée 4: CURIOSITÉ (Droite) === */}
                    <motion.div 
                        className="row droite derniere" 
                        variants={itemVariantsRight}
                        key="value-4"
                    >
                        <div className="col-6 description">
                            <p>{t.values_card_4_desc_1}</p>
                            <p>{t.values_card_4_desc_2}</p>
                        </div>
                        <div className="col-6 valeur">
                            <div className="fond">
                                <i className="fa-regular fa-lightbulb"></i>
                                <h2>{t.values_card_4_title}</h2>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}