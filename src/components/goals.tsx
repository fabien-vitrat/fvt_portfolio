'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Importe les images statiques
import Ingenieur from '@/src/public/ingenieur.jpg';
import Passions from '@/src/public/passions.jpg';
import Etudes from '@/src/public/etudes.jpg';
import Experiences from '@/src/public/voyage.jpg';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

/**
 * Composant Goals (Mes Objectifs)
 */
export default function Goals() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- DONNÉES DU COMPOSANT ---
    const goalsData = [
      {
        id: 'studies', 
        titre: t.goals_card_studies_title,
        image: Etudes,
        textes: [
          t.goals_card_studies_1,
          t.goals_card_studies_2
        ]
      },
      {
        id: 'engineer',
        titre: t.goals_card_engineer_title,
        image: Ingenieur,
        textes: [
          t.goals_card_engineer_1,
          t.goals_card_engineer_2
        ]
      },
      {
        id: 'passions',
        titre: t.goals_card_passions_title,
        image: Passions,
        textes: [
          t.goals_card_passions_1,
          t.goals_card_passions_2
        ]
      },
      {
        id: 'experiences',
        titre: t.goals_card_experiences_title,
        image: Experiences,
        textes: [
          t.goals_card_experiences_1,
          t.goals_card_experiences_2,
        ]
      }
    ];

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    // --- Rendu JSX ---
    return (
        <section className="goals">
            <div className="container">
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.goals_title}</h2>
                </motion.div>
                
                <div className="row">
                    <motion.div 
                        className="goal"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {goalsData.map((goal) => (
                            <motion.div 
                                className="goal-item" 
                                key={goal.id} 
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="image-container">
                                    <Image 
                                        src={goal.image}
                                        alt={goal.titre} 
                                        className='img-fluid'
                                    />
                                    <motion.div 
                                        className="overlay"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {goal.titre}
                                    </motion.div>
                                </div>
                                
                                <div className="goal-text">
                                    {/* Boucle sur les textes de la carte */}
                                    {goal.textes.map((line, i) => (
                                        <motion.p 
                                            key={i} 
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}