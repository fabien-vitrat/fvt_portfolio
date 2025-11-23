'use client'; 

import { useEffect } from 'react';

/**
 * Composant AppWrapper (Enveloppe d'Application)
 * * @param {React.ReactNode} children - Les composants enfants (le reste du site) à afficher.
 */
export default function AppWrapper({ children }: { children: React.ReactNode }) {
  
  // --- LOGIQUE DU COMPOSANT ---

  useEffect(() => {
    
    // Définit la fonction qui sera appelée lors d'un clic droit
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); 
    };

    // Ajoute l'écouteur d'événement au document entier
    document.addEventListener('contextmenu', handleContextMenu);

    // Fonction de "nettoyage" (cleanup) :
    // S'exécute lorsque le composant est "démonté" (par ex. changement de page)
    return () => {
      // Supprime l'écouteur d'événement pour éviter les fuites de mémoire
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []); 

  // --- Rendu JSX ---
  return <>{children}</>;
}