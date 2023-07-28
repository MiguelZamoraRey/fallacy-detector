import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Layout/Buttons/Button';
import Spinner from '../../components/others/Spinner/Spinner';
import { analyzeText } from '../../services/main';
import './Analyzer.css';

export default function Analyser() {
  const { t } = useTranslation();
  const [analyzed, isAnalyzed] = useState(false);
  const [fallacies, setFallacies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSubmit = () => {
    if (text.length > 10) {
      setIsLoading(true);
      isAnalyzed(true);
      const analyze = async () => {
        let response = await analyzeText(text, 'es');
        if (!response) {
          setIsLoading(false);
          isAnalyzed(false);
        }
        setFallacies(response);
        setIsLoading(false);
      };
      analyze();
    }
  };

  return (
    <div className="analyzer">
      <div className="analyzer-container">
        {!analyzed ? (
          <>
            <div className="analyzer-textarea-container">
              <p
                style={{
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: '#f1f1f1',
                  padding: '0.5em',
                }}
              >
                {t('analyzer.thisIsATool')}{' '}
                <span
                  style={{
                    color: '#038cfc',
                    marginLeft: '0.2em',
                  }}
                >
                  {t('analyzer.experimental')}
                </span>{' '}
                {t('analyzer.theAimIs')}{' '}
                <span
                  style={{
                    color: '#038cfc',
                    marginLeft: '0.2em',
                  }}
                >
                  {t('analyzer.artificialIntelligence')}
                </span>
              </p>
              <h3>{t('analyzer.pasteHere')}:</h3>
              <textarea
                className="analyzer-textarea"
                value={text}
                onChange={(e) => {
                  console.log(e.target.value);
                  setText(e.target.value);
                }}
              />
              <Button
                label={t('analyzer.button1')}
                onClickFunction={() => {
                  handleSubmit();
                }}
              />
            </div>
            <div
              className="analyzer-textarea-container"
              style={{ display: 'none' }}
            >
              <h3>{t('analyzer.analysis')}</h3>
            </div>
          </>
        ) : (
          <>
            <div className="analyzer-textarea-container">
              <h3>{t('analyzer.pasteHere')}:</h3>
              <textarea
                className="analyzer-textarea"
                disabled={true}
                value={text}
                onChange={(e) => {
                  console.log(e.target.value);
                  setText(e.target.value);
                }}
              />
              <Button
                label={t('analyzer.button1')}
                style={{ display: 'none' }}
                onClickFunction={() => {
                  refreshPage();
                }}
              />
            </div>
            <div className="analyzer-textarea-container">
              <h3>{t('analyzer.analysis')}</h3>
              <div className="analyzer-results-container">
                {!isLoading && fallacies.length > 0 ? (
                  <>
                    {fallacies.map((item) => (
                      <>
                        <div className="analyzer-results-badge">
                          <p style={{ color: '#038cfc', fontSize: '0.8em' }}>
                            {item.tipo}
                          </p>
                          <p style={{ fontStyle: 'italic' }}>"{item.frase}"</p>

                          <p>{item.explicacion}</p>
                        </div>
                      </>
                    ))}
                    <div
                      style={{
                        height: '2em',
                        padding: '1em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        label={t('analyzer.button2')}
                        onClickFunction={() => {
                          refreshPage();
                        }}
                        style={{ width: '100%', marginBottom: '2em' }}
                      />
                    </div>
                  </>
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
