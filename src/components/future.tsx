'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function Future() {
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

    const infos = [
        t.future.info1,
        t.future.info2,
        t.future.info3,
        t.future.info4,
        t.future.info5,
        t.future.info6
    ];

    return (
        <section className='future' data-aos="fade-up">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.future.title}</h2>
                </motion.div>
                <div className="row">
                    <motion.div 
                        className="col-lg-5 col-md-12 histoire"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >                        
                        <motion.div variants={itemVariants}>
                            <p>{t.future.story1}</p>
                            <p>{t.future.story2}</p>
                            <p>{t.future.story3}</p>
                            <p>{t.future.story4}</p>
                        </motion.div>
                        
                        
                    </motion.div>
                    
                    <motion.div 
                        className="col-lg-7 col-md-12 stage"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div variants={itemVariants}>
                            <h5>{t.future.internshipTitle}</h5>
                        </motion.div>
                        <motion.div className='infos' variants={itemVariants}>
                            {infos.map((infos, index) => (
                                <motion.p
                                    key={infos}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {infos}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}