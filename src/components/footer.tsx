'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { useLanguage } from '@/src/context/LanguageContext';
import { fr } from '@/src/translations/fr';
import { en } from '@/src/translations/en';
import { es } from '@/src/translations/es';

/**
 * Composant Footer (Pied de page)
 */
export default function Footer() {
    const { language } = useLanguage();
    const translations = { fr, en, es };
    const t = translations[language];

    // --- LOGIQUE DU COMPOSANT ---
    const currentYear = new Date().getFullYear();

    // --- Rendu JSX ---
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Bloc pour les liens vers les réseaux sociaux */}
                    <div className="social-links">
                        {/* Lien vers LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/fabien-vitrat-9763b5261/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={t.footer_linkedin}
                        >
                            <FaLinkedin />
                        </a>
                        {/* Lien vers GitHub */}
                        <a 
                            href="https://github.com/fabien-vitrat" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={t.footer_github}
                        >
                            <FaGithub />
                        </a>
                    </div>

                    {/* Bloc pour le texte de copyright */}
                    <div className="copyright">
                        {t.footer_copyright.replace('{year}', currentYear.toString())}
                    </div>
                </div>
            </div>
        </footer>
    );
}