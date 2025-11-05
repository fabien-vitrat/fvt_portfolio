'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function Contact() {
    const { t } = useTranslation();

    const contactInfo = [
        { label: t.contact.email, value: 'vitratfabien@gmail.com', href: 'mailto:vitratfabien@gmail.com' },
        { label: t.contact.linkedin, value: 'Fabien VITRAT', href: 'https://linkedin.com/in/fabien-vitrat' },
        { label: t.contact.github, value: 'Fabien VITRAT', href: 'https://github.com/FabienVitrat' },
        { label: t.contact.city, value: t.contact.cityValue, href: null },
    ];

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

    // Fonction pour déterminer si on affiche un lien ou juste la valeur
    const renderContactValue = (item) => {
        if (item.href) {
            return (
                <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-value"
                >
                    {item.value}
                </a>
            );
        }
        return <span className="contact-value">{item.value}</span>;
    };


    // URL générique d'une iframe Google Maps centrée sur Marseille
    const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53789.60755431132!2d1.9839871009110863!3d48.77755010806665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6812fc108130f%3A0xda70d089c559d81e!2sMontigny-le-Bretonneux!5e1!3m2!1sfr!2sfr!4v1761940998201!5m2!1sfr!2sfr";


    return (
        <section className='contact' data-aos="fade-up">
            <div className="container">
                <div className="row contact-row">
                    
                    {/* Colonne de gauche (Informations de contact) */}
                    <motion.div 
                        className="col-md-7 col-sm-12 contact-content"
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
                            <h2>{t.contact.title}</h2>
                        </motion.div>

                        <ul className="contact-list">
                            {contactInfo.map((item) => (
                                <motion.li 
                                    key={item.label}
                                    className="contact-item"
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <strong className="contact-label">{item.label}</strong>
                                    {renderContactValue(item)}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* Colonne de droite (Iframe de la carte) */}
                    <motion.div 
                        className="col-md-5 col-sm-12 contact-img"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="map-iframe-container" 
                        >
                            <motion.iframe
                                src={mapIframeSrc}
                                className="responsive-map-iframe" 
                                style={{ border: 0 }}
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