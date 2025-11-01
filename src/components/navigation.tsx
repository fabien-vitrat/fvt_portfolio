'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en' | 'es'>('fr');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'about', 'values', 'goals', 'course'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.querySelector(`.${section}`);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          const offsetHeight = (element as HTMLElement).offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionClass: string) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'accueil', label: { fr: 'Accueil', en: 'Home', es: 'Inicio' } },
    { id: 'about', label: { fr: 'À propos', en: 'About', es: 'Sobre mí' } },
    { id: 'valeurs', label: { fr: 'Valeurs', en: 'Values', es: 'Valores' } },
    { id: 'future', label: { fr: 'Recherche', en: 'Recherche', es: 'Recherche' } },
    { id: 'goals', label: { fr: 'Objectifs', en: 'Objectifs', es: 'Objectifs' } },
    { id: 'course', label: { fr: 'Parcours', en: 'Parcours', es: 'Parcours' } },
    { id: '#', label: { fr: 'Compétences', en: 'Compétences', es: 'Compétences' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact', es: 'Contact' } },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="nav-bar"
      >
        <div className="nav-logo">FV</div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
          className="nav-menu-button hamburger-button"
          aria-label="Ouvrir le menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-overlay"
          >
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={() => setIsMenuOpen(false)}
              className="menu-close"
            >
              ×
            </motion.button>

            <div className="menu-content">
              <div className="menu-items">
                {navItems.map((item, index) => (
                  <motion.h1
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`menu-title ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label[language]}
                  </motion.h1>
                ))}
              </div>

              <motion.a
                href="/cv-fabien-vitrat.pdf"
                download
                className="menu-cv"
              >
                {language === 'fr'
                  ? 'Télécharger mon CV'
                  : language === 'en'
                  ? 'Download my CV'
                  : 'Descargar mi CV'}
              </motion.a>

              <div className="menu-lang">
                {['fr', 'en', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as 'fr' | 'en' | 'es')}
                    className={`lang-button ${language === lang ? 'active' : ''}`}
                  >
                    {lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'Español'}
                  </button>
                ))}
              </div>

              <div className="menu-footer">
                © 2025 Fabien VITRAT. Tous droits réservés.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
