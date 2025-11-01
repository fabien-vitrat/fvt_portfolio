'use client';

import { motion } from 'framer-motion';

export default function Future() {
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
        "Durée : 4 semaines minimum", 
        "Modalités : 35h/semaine minimum, présentiel obligatoire", 
        "Période :  début juillet à fin août",
        "Localisation : France (Ile de France, Région PACA), Internationale",
        "Type : stage d'execution",
        "Missions : découvrir l’environnement professionnel d’ouvriers et/ou techniciens", 
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
                    <h2>RECHERCHE</h2>
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
                            <p>Depuis plusieurs années, j’ai découvert ma passion pour le sport automobile sur le circuit Ricardo Tormo de Valence. Cette expérience a éveillé ma curiosité et m'a transmis l’émotion que procure la vitesse.</p>
                            <p>En septembre, j’ai intégré l’ESTACA avec l’ambition de mieux comprendre le monde du transport et de développer mes compétences dans ce domaine exigeant et passionnant.</p>
                            <p>Demain, je souhaite approfondir mes connaissances sur la conception et la fabrication d’une voiture, mais aussi mieux saisir ce que vivent les pilotes, pour relier la technique à l’humain.</p>
                            <p>Mon objectif est de devenir un ingénieur à l’écoute, passionné et engagé, qui met tout son savoir et son énergie au service de l’amélioration et de l’innovation.</p>
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
                            <h5>Aujourd'hui en première année, je cherche un stage</h5>
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