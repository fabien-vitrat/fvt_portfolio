'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function Values() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className='valeurs'>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1>Fabien VITRAT</h1>
                    <h2>{t.values.title}</h2>
                </motion.div>
                <motion.div 
                    className="all"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="all">
                        <div className="row gauche">
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                    <h2>{t.values.kindness.title}</h2>
                                </div>
                            </div>
                            <div className="col-6 description">
                                <p>{t.values.kindness.desc1}</p>
                                <p>{t.values.kindness.desc2}</p>
                            </div>
                        </div>
                        <div className="row droite">
                            <div className="col-6 description">
                                <p>{t.values.teamwork.desc1}</p>
                                <p>{t.values.teamwork.desc2}</p>
                            </div>
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-solid fa-people-group"></i>
                                    <h2>{t.values.teamwork.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row gauche">
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-solid fa-handshake-angle"></i>
                                    <h2>{t.values.commitment.title}</h2>
                                </div>
                            </div>
                            <div className="col-6 description">
                                <p>{t.values.commitment.desc1}</p>
                                <p>{t.values.commitment.desc2}</p>
                            </div>
                        </div>
                        <div className="row droite derniere">
                            <div className="col-6 description">
                                <p>{t.values.curiosity.desc1}</p>
                                <p>{t.values.curiosity.desc2}</p>
                            </div>
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-regular fa-lightbulb"></i>
                                    <h2>{t.values.curiosity.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>

    )
}