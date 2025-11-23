'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importer le hook de langue (le "cerveau")
import { useLanguage } from '@/src/context/LanguageContext';

// Importer les nouveaux fichiers de traduction
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

// 1. --- DÉFINITION DU TYPE ---
// On dit à TypeScript à quoi ressemble UN objet de traduction
// (On se base sur 'fr', en supposant que 'en' et 'es' ont les mêmes clés)
type TranslationKeys = typeof fr;


/**
 * Composant Navigation
 * (Les commentaires de documentation restent les mêmes)
 */
export default function Navigation() {
  // --- GESTION DE L'ÉTAT (STATE) ---
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); 

  // On crée un objet 't' qui contiendra les bonnes traductions
  const translations = { fr, en, es };

  // 2. --- CORRECTION PRINCIPALE ---
  // On force TypeScript à faire confiance au type de 't'
  // On lui dit : "Je te promets que 't' a la forme de 'TranslationKeys'"
  const t = translations[language] as TranslationKeys;


  // --- EFFETS DE BORD (HOOKS) ---
  // (Le 'useEffect' pour le 'Scroll Spy' reste inchangé)
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'welcome', 'about', 'values', 'future', 'goals', 
        'course', 'skills', 'portfolio', 'contact'
      ];
      const scrollPosition = window.scrollY;
      let currentSection = 'welcome';
      for (const section of sections) {
        const element = document.querySelector(`.${section}`);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 100;
          const offsetHeight = (element as HTMLElement).offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // (Le 'useEffect' pour le 'Verrouillage du Scroll' reste inchangé)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  // --- FONCTIONS D'AIDE ---
  // (La fonction 'scrollToSection' reste inchangée)
  const scrollToSection = (sectionClass: string) => {
    if (sectionClass === 'welcome') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(`.${sectionClass}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };


  // --- DONNÉES & ANIMATIONS ---
  // 3. --- CORRECTION SECONDAIRE ---
  // On dit à TypeScript que 'key' n'est pas un 'string' quelconque,
  // mais bien une 'clé' de notre type 'TranslationKeys'
  const navItems: { id: string, key: keyof TranslationKeys }[] = [
    { id: 'welcome',   key: 'nav_home' },
    { id: 'about',     key: 'nav_about' },
    { id: 'values',    key: 'nav_values' },
    { id: 'future',    key: 'nav_search' },
    { id: 'goals',     key: 'nav_goals' },
    { id: 'course',    key: 'nav_course' },
    { id: 'skills',    key: 'nav_skills' },
    { id: 'portfolio', key: 'nav_portfolio' },
    { id: 'contact',   key: 'nav_contact' },
  ];

  // (Les variantes d'animation restent inchangées)
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // --- Rendu JSX ---
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="nav-bar"
      >
        <div className="nav-logo">
          FV
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
          className="nav-menu-button hamburger-button"
          aria-label={t.open_menu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="menu-overlay"
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={() => setIsMenuOpen(false)}
              className="menu-close"
            >
              ×
            </motion.button>

            <motion.div 
              className="menu-content"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="menu-items" variants={itemVariants}>
                {navItems.map((item) => (
                  <motion.h1
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`menu-title ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {t[item.key as keyof typeof t] as string}
                 </motion.h1>
                ))}
              </motion.div>

              <motion.a
                href={t.cv_path} // Utilise le chemin dynamique
                download
                className="menu-cv"
                variants={itemVariants}
              >
                {t.download_cv}
              </motion.a>

              <motion.div className="menu-lang" variants={itemVariants}>
                <button
                  key="fr"
                  onClick={() => setLanguage('fr')}
                  className={`lang-button ${language === 'fr' ? 'active' : ''}`}
                >
                  {t.lang_fr}
                </button>
                <button
                  key="en"
                  onClick={() => setLanguage('en')}
                  className={`lang-button ${language === 'en' ? 'active' : ''}`}
                >
                  {t.lang_en}
                </button>
                <button
                  key="es"
                  onClick={() => setLanguage('es')}
                  className={`lang-button ${language === 'es' ? 'active' : ''}`}
                >
                  {t.lang_es}
                </button>
              </motion.div>

              <motion.div className="menu-footer" variants={itemVariants}>
                {t.copyright.replace('{year}', new Date().getFullYear().toString())}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}