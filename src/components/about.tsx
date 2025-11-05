'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Portrait from '@/src/public/portrait.jpeg';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function About() {
    const { t } = useTranslation();

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
        t.about.passions.sport,
        t.about.passions.automobile,
        t.about.passions.photography,
        t.about.passions.travel,
        t.about.passions.it
    ];

    return (
        <section className='about' data-aos="fade-up">
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
                            <h2>{t.about.title}</h2>
                        </motion.div>
                        
                        <motion.div className="row info" variants={itemVariants}>
                            <div className="portrait-mobile">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={Portrait} 
                                        alt='Portrait'
                                        className='img-fluid'
                                    />
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.birthDate}</strong> <span>{t.about.birthDateValue}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.email}</strong> <span>vitratfabien@gmail.com</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.phone}</strong> <span>+33 7 66 18 07 15</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.city}</strong> <span>{t.about.cityValue}</span>
                                    </motion.li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.age}</strong> <span>{t.about.ageValue}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.school}</strong> <span>{t.about.schoolValue}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.level}</strong> <span>{t.about.levelValue}</span>
                                    </motion.li>
                                    <motion.li whileHover={{ x: 5 }}>
                                        <strong>{t.about.languages}</strong> <span>{t.about.languagesValue}</span>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p>{t.about.description}</p>
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
                                alt='Portrait'
                                className='img-fluid'
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}