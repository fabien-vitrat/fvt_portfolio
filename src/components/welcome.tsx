'use client';

import { useTranslation } from '@/src/hooks/useTranslation';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="accueil">
      <div className="content container">
        <h1>{t.welcome.name}</h1>
        <p>{t.welcome.subtitle}</p>
      </div>
      <div className="arrow-down">&#8595;</div>
    </section>
  );
}
