import React, { useState } from 'react';

import Button from '../../components/Layout/Buttons/Button';
import Spinner from '../../components/others/Spinner/Spinner';
import { analyzeText } from '../../services/main';
import './Analyzer.css';

export default function Analyser() {
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
            <div
              className="analyzer-textarea-container"
              style={{ width: '100%' }}
            >
              <p style={{ width: '100%', textAlign: 'center' }}>
                Esta es una herramienta experimental destinada al analisis de
                textos y discursos para la deteccción de las falacias utilizadas
                en ellos con la ayuda de la{' '}
                <span
                  style={{
                    color: '#ffc300',
                    marginLeft: '0.2em',
                  }}
                >
                  inteligencia artificial
                </span>
              </p>
              <h3>Pega aqui el texto que quieras analizar:</h3>
              <textarea
                className="analyzer-textarea"
                value={text}
                onChange={(e) => {
                  console.log(e.target.value);
                  setText(e.target.value);
                }}
              />
              <Button
                label="Busca las falacias del dicurso"
                onClickFunction={() => {
                  handleSubmit();
                }}
              />
            </div>
            <div
              className="analyzer-textarea-container"
              style={{ display: 'none' }}
            >
              <h3>Análisis</h3>
            </div>
          </>
        ) : (
          <>
            <div className="analyzer-textarea-container">
              <h3>Pega aqui el texto que quieras analizar:</h3>
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
                label="Busca las falacias del dicurso"
                style={{ display: 'none' }}
                onClickFunction={() => {
                  refreshPage();
                }}
              />
            </div>
            <div className="analyzer-textarea-container">
              <h3>Análisis</h3>
              <div className="analyzer-results-container">
                {!isLoading && fallacies.length > 0 ? (
                  fallacies.map((item) => (
                    <>
                      <div className="analyzer-results-badge">
                        <p style={{ color: '#ffd60a', fontSize: '0.8em' }}>
                          {item.tipo}
                        </p>
                        <p style={{ fontStyle: 'italic' }}>"{item.frase}"</p>

                        <p>{item.explicacion}</p>
                      </div>
                    </>
                  ))
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {!isLoading && fallacies.length > 0 && (
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
            label="Busca en otro discurso"
            onClickFunction={() => {
              refreshPage();
            }}
            style={{ width: '20%' }}
          />
        </div>
      )}
    </div>
  );
}
