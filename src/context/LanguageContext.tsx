'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Définit le type de langue
type Language = 'fr' | 'en' | 'es';

// Définit ce que notre Contexte va contenir
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

// Crée le Contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Crée le "Fournisseur" (Provider) qui enveloppera ton application
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr'); // 'fr' par défaut

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Crée un "Hook" personnalisé pour accéder facilement à la langue
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage doit être utilisé à intérieur du LanguageProvider');
  }
  return context;
}