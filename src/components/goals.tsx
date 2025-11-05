'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Ingenieur from '@/src/public/ingenieur.jpg';
import Passions from '@/src/public/passions.jpg';
import Etudes from '@/src/public/etudes.jpg';
import Experiences from '@/src/public/voyage.jpg';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function Goals() {
  const { t } = useTranslation();

  const valeurs = [
    {
      titre: t.goals.studies.title,
      image: Etudes,
      textes: [
        t.goals.studies.text1,
        t.goals.studies.text2
      ]
    },
    {
      titre: t.goals.engineer.title,
      image: Ingenieur,
      textes: [
        t.goals.engineer.text1,
        t.goals.engineer.text2
      ]
    },
    {
      titre: t.goals.passions.title,
      image: Passions,
      textes: [
        t.goals.passions.text1,
        t.goals.passions.text2
      ]
    },
    {
      titre: t.goals.experiences.title,
      image: Experiences,
      textes: [
        t.goals.experiences.text1,
        t.goals.experiences.text2
      ]
    }
  ];
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

  return (
    <section className="goals" data-aos="fade-up">
        <div className="container">
            <motion.div
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1>Fabien VITRAT</h1>
              <h2>{t.goals.title}</h2>
            </motion.div>
            
            <div className="row">
                <motion.div 
                    className="goal"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {valeurs.map((valeur, index) => (
                        <motion.div 
                            className="goal-item" 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="image-container"
                            >
                                <Image 
                                    src={valeur.image}
                                    alt={valeur.titre} 
                                    className='img-fluid'
                                />
                                <motion.div 
                                    className="overlay"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    
                                  {valeur.titre}
  
                                </motion.div>
                            </div>
                            <div className="goal-text">
                                {valeur.textes.map((line, i) => (
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