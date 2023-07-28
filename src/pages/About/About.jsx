import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about-container">
        <h2>{t('about.whoAmI')}</h2>
        <p>
          {t('about.myNameIs')}{' '}
          <a href="https://www.mzrdeveloper.com/">{t('about.website')}</a>
          {t('about.orMyEmail')}{' '}
          <a href="mailto:mzrdeveloper@gmail.com">mzrdeveloper@gmail.com</a>.
        </p>
        <h2>{t('about.canIHave')}</h2>
        <p>
          {t('about.allTheCode')}{' '}
          <a href="https://github.com/MiguelZamoraRey/fallacy-detector">
            {t('about.here')}
          </a>
          {t('about.iWouldBe')}
        </p>
        <h2>{t('about.whyAFallacy')}</h2>
        <p>{t('about.iBelive')}</p>
        <p>{t('about.inThisExample')}</p>
      </div>
    </div>
  );
}
