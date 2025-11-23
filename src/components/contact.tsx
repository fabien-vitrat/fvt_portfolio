'use client';

import { motion } from 'framer-motion';

// Importer le hook et les traductions
import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

// 1. --- DÉFINITION DU TYPE ---
// On dit à TypeScript à quoi ressemble un item de contact
type ContactItem = {
  id: string;
  label: string;
  value: string;
  href: string | null; // 'href' peut être un string ou null
};

export default function Contact() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // 2. --- APPLICATION DU TYPE ---
    // On dit à TypeScript que 'contactInfo' est un tableau de 'ContactItem'
    const contactInfo: ContactItem[] = [
        { id: 'contact-1', label: t.contact_email, value: 'fabien.vitrat@estaca.eu', href: 'mailto:fabien.vitrat@estaca.eu' },
        { id: 'contact-2', label: t.contact_linkedin, value: 'Fabien VITRAT', href: 'https://www.linkedin.com/in/fabien-vitrat-9763b5261/' }, 
        { id: 'contact-3', label: t.contact_github, value: 'fabien-vitrat', href: 'https://github.com/fabien-vitrat' }, 
        { id: 'contact-4', label: t.contact_city, value: t.contact_city_val, href: 'https://maps.app.goo.gl/LDsr35HCAjNHEwxa7' }, 
    ];

    // --- DÉFINITION DES ANIMATIONS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 }, 
        visible: { opacity: 1, x: 0 }
    };

    // 3. --- CORRECTION DE L'ERREUR ---
    // On applique le type 'ContactItem' au paramètre 'item'
    const renderContactValue = (item: ContactItem) => {
        if (item.href) {
            return (
                <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contactValue"
                >
                    {item.value}
                </a>
            );
        }
        return <span className="contactValue">{item.value}</span>;
    };

    const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26922.173440406215!2d2.004586880848567!3d48.77758389526759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6812fc108130f%3A0xda70d089c559d81e!2sMontigny-le-Bretonneux!5e1!3m2!1sfr!2sfr!4v1763322647044!5m2!1sfr!2sfr";
    
    // --- Rendu JSX ---
    return (
        <section className='contact'>
            <div className="container">
                
                <motion.div 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.contact_title}</h2>
                </motion.div>

                <div className="row infos-contact">
                    
                    <motion.div 
                        className="col-lg-5 col-md-12"
                        variants={containerVariants} 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ul className="contactList">
                            {contactInfo.map((item) => (
                                <motion.li 
                                    key={item.id} 
                                    className="contactItem"
                                    variants={itemVariants} 
                                    whileHover={{ x: 5 }}
                                >
                                    <strong className="contactLabel">{item.label}</strong>
                                    {renderContactValue(item)}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    <motion.div 
                        className="col-lg-7 col-md-12"
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }} 
                            transition={{ duration: 0.3 }}
                            className="mapIframeContainer" 
                        >
                            <motion.iframe
                                src={mapIframeSrc}
                                className="responsiveMapIframe"
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}