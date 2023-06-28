import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2>¿Quién soy?</h2>
        <p>
          Mi nombre es Miguel Zamora Rey, soy desarrollador profesional desde
          2015, y puedes ver mis proyectos o contactar conmigo a través de mi{' '}
          <a href="https://www.mzrdeveloper.com/">página web</a> o de mi correo{' '}
          <a href="mailto:mzrdeveloper@gmail.com">mzrdeveloper@gmail.com</a>.
        </p>
        <h2>¿Puedo tener el código de este proyecto?</h2>
        <p>
          Todo el código de este proyecto esta bajo licencia MIT para replicar
          su uso en el repositorio que puedes encontrar{' '}
          <a href="https://github.com/MiguelZamoraRey/fallacy-detector">aquí</a>
          . Te agradecería que me dejases una estrella, y no dudes en contactar
          conmigo para cualquier sugerencia o duda.
        </p>
        <h2>¿Porque un detector de falacias?</h2>
        <p>
          Creo que el uso de la inteligencia artificial ha llegado para
          quedarse, querramos o no, y que muchos de los usos de esta serán
          malos, pero tambien podemos tratar de crear herramientas que nos
          ayuden a mejorar el espíritu crítico.
        </p>
        <p>
          En este ejemplo se ve una sencilla integracion de la API de openAi en
          una web, de forma simple y sencilla, te animo a descargar el código y
          aprender a utilizar esta api para tus propios usos.
        </p>
      </div>
    </div>
  );
}
