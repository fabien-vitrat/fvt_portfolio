'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Portrait from '@/src/public/portrait.jpeg';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';


/**
 * Composant About (À Propos)
 */
export default function About() {
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

    const passions = [
        t.about_passion_1,
        t.about_passion_2,
        t.about_passion_3,
        t.about_passion_4,
        t.about_passion_5
    ];

    // --- Rendu JSX ---
    return (
        <section className='about'>
            <div className="container">
                <div className="row">
                    
                    <motion.div 
                        className="col-md-8 col-sm-12 content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="section-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1>Fabien VITRAT</h1>
                            <h2>{t.about_title}</h2>
                        </motion.div>
                        
                        <motion.div className="row info" variants={itemVariants}>
                            
                            <div className="portrait-mobile">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={Portrait} 
                                        alt={t.about_alt_portrait}
                                        className='img-fluid'
                                        priority
                                    />
                                </motion.div>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_dob}</strong> <span>{t.about_info_dob_val}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_email}</strong> <span>vitratfabien@gmail.com</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_phone}</strong> <span>+33 7 66 18 07 15</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_city}</strong> <span>{t.about_info_city_val}</span>
                                    </motion.li>
                                </ul>
                            </div>
                                                        
                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_age}</strong> <span>{t.about_info_age_val}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_school}</strong> <span>{t.about_info_school_val}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_level}</strong> <span>{t.about_info_level_val}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about_info_langs}</strong> <span>{t.about_info_langs_val}</span>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p>{t.about_desc}</p>
                        </motion.div>
                        
                        <motion.div className='passions' variants={itemVariants}>
                            {passions.map((passion, index) => (
                                <motion.p
                                    key={passion} 
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {passion}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="col-md-4 col-sm-12 img"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={Portrait}
                                alt={t.about_alt_portrait}
                                className='img-fluid'
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}