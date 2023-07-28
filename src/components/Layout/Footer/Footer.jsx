import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-container">
        <p>
          {t('footer.text')}{' '}
          <a href="https://www.mzrdeveloper.com/">{t('footer.here')}</a>{' '}
          {t('footer.orMyEmail')}{' '}
          <a href="mailto:mzrdeveloper@gmail.com">mzrdeveloper@gmail.com</a>{' '}
        </p>
      </div>
    </div>
  );
}
