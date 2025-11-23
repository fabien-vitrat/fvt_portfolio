'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

/**
 * Composant Welcome (Accueil)
 */
export default function Welcome() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- DÉFINITION DES ANIMATIONS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
    };

    // --- Rendu JSX ---
    return (
        <section className="accueil welcome">
            
            {/* Conteneur d'animation pour le texte */}
            <motion.div 
                className="content container"
                variants={containerVariants}
                initial="hidden"
                animate="visible" 
            >
                <motion.h1 variants={itemVariants}>FABIEN VITRAT</motion.h1>
                
                <motion.p variants={itemVariants}>
                    {t.welcome_subtitle}
                </motion.p>
            </motion.div>

            {/* Flèche animée */}
            <motion.div 
                className="arrow-down"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }} 
            >
                &#8595;
            </motion.div>
        </section>
    );
}