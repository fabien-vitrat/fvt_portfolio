# Guide du Système de Traduction Multilingue

## Vue d'ensemble

Le site est maintenant entièrement multilingue avec support pour **3 langues** :
- Français (fr)
- Anglais (en)
- Espagnol (es)

## Architecture

### 1. Context de Langue (`src/contexts/LanguageContext.tsx`)
- Gère l'état global de la langue sélectionnée
- Sauvegarde automatiquement la préférence dans `localStorage`
- Restaure la langue au rechargement de la page

### 2. Fichier de Traductions (`src/translations/translations.ts`)
- Contient toutes les chaînes de texte du site en 3 langues
- Structure organisée par sections (nav, welcome, about, values, etc.)
- Facile à maintenir et à étendre

### 3. Hook personnalisé (`src/hooks/useTranslation.ts`)
- Simplifie l'utilisation des traductions dans les composants
- Retourne l'objet de traduction pour la langue active

## Utilisation dans un Composant

```typescript
'use client';

import { useTranslation } from '@/src/hooks/useTranslation';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t.about.title}</h1>
      <p>{t.about.description}</p>
    </div>
  );
}
```

## Changement de Langue

Le changement de langue se fait via le menu de navigation :
- Cliquez sur les boutons "Français", "English" ou "Español"
- Le site se met à jour instantanément
- La préférence est sauvegardée automatiquement

## Composants Modifiés

Tous les composants ont été mis à jour pour utiliser le système de traduction :
- ✅ Navigation
- ✅ Welcome
- ✅ About
- ✅ Values
- ✅ Future
- ✅ Goals
- ✅ Course
- ✅ Contact

## Ajout de Nouvelles Traductions

Pour ajouter du nouveau contenu traduit :

1. Ouvrez `src/translations/translations.ts`
2. Ajoutez votre texte dans les 3 sections (fr, en, es)
3. Utilisez-le dans votre composant avec `t.votreCle`

Exemple :
```typescript
// Dans translations.ts
export const translations = {
  fr: {
    mySection: {
      title: 'Mon Titre',
      description: 'Ma Description'
    }
  },
  en: {
    mySection: {
      title: 'My Title',
      description: 'My Description'
    }
  },
  es: {
    mySection: {
      title: 'Mi Título',
      description: 'Mi Descripción'
    }
  }
};

// Dans votre composant
const { t } = useTranslation();
<h1>{t.mySection.title}</h1>
```

## Avantages du Système

- **Centralisé** : Toutes les traductions au même endroit
- **Automatique** : Changement de langue instantané sur tout le site
- **Persistant** : La langue choisie est sauvegardée
- **Type-safe** : TypeScript assure la cohérence
- **Maintenable** : Facile d'ajouter de nouvelles langues ou traductions
