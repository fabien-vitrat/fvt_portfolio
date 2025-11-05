'use client';

import { motion } from 'framer-motion';

export default function Values() {

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
                    <h2>MES VALEURS</h2>
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
                                    <h2>BIENVEILLANCE</h2>
                                </div>
                            </div>
                            <div className="col-6 description">
                                <p>Prends le temps d'écouter les autres</p>
                                <p>Participation à du bénévolat</p>
                            </div>
                        </div>
                        <div className="row droite">
                            <div className="col-6 description">
                                <p>Réalisation de projets en équipe</p>
                                <p>Bonne gestion et réalisation</p>
                            </div>
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-solid fa-people-group"></i>
                                    <h2>TRAVAIL D’EQUIPE</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row gauche">
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-solid fa-handshake-angle"></i>
                                    <h2>ENGAGEMENT</h2>
                                </div>
                            </div>
                            <div className="col-6 description">
                                <p>Donner du temps aux autres</p>
                                <p>Course de solidarité, Lourdes...</p>
                            </div>
                        </div>
                        <div className="row droite derniere">
                            <div className="col-6 description">
                                <p>Découvrir de nouvelles choses</p>
                                <p>Apprendre et voir de nouvelles choses</p>
                            </div>
                            <div className="col-6 valeur">
                                <div className="fond">
                                    <i className="fa-regular fa-lightbulb"></i>
                                    <h2>CURIOSITE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>

    )
}