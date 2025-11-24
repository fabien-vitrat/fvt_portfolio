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
                    
                    <div 
                        className="col-md-8 col-sm-12 content"
                    >
                        <div 
                            className="section-title"
                        >
                            <h1>Fabien VITRAT</h1>
                            <h2>{t.about_title}</h2>
                        </div>
                        
                        <div className="row info" >
                            
                            <div className="portrait-mobile">
                                <div
                                >
                                    <Image 
                                        src={Portrait} 
                                        alt={t.about_alt_portrait}
                                        className='img-fluid'
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <strong>{t.about_info_dob}</strong> <span>{t.about_info_dob_val}</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_email}</strong> <span>fabien.vitrat@estaca.eu</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_phone}</strong> <span>+33 7 66 18 07 15</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_city}</strong> <span>{t.about_info_city_val}</span>
                                    </li>
                                </ul>
                            </div>
                                                        
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <strong>{t.about_info_age}</strong> <span>{t.about_info_age_val}</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_school}</strong> <span>{t.about_info_school_val}</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_level}</strong> <span>{t.about_info_level_val}</span>
                                    </li>
                                    <li>
                                        <strong>{t.about_info_langs}</strong> <span>{t.about_info_langs_val}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <p>{t.about_desc}</p>
                        </div>
                        
                        <div className='passions' >
                            {passions.map((passion, index) => (
                                <p
                                    key={passion} 
                                >
                                    {passion}
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    <div 
                        className="col-md-4 col-sm-12 img"
                    >
                        <div
                        >
                            <Image
                                src={Portrait}
                                alt={t.about_alt_portrait}
                                className='img-fluid'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}