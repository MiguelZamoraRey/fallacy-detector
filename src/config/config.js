import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const userLang = navigator.language || navigator.userLanguage;
const defaultLocale = userLang.substring(0, 2);

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          analyzer: 'Analyser',
          aboutMe: 'About me',
          code: 'Code',
        },
        about: {
          whoAmI: 'Who am I?',
          myNameIs:
            'My name is Miguel Zamora Rey, I am a professional developer since 2015, and you can see my projects or contact me through my',
          website: 'website',
          orMyEmail: ' or from my mail',
          canIHave: 'Can I have the code for this project?',
          allTheCode:
            'All the code of this project is under MIT license to replicate its use in the repository you can find',
          here: 'aquí',
          iWouldBe:
            '. I would be grateful if you could leave me a star, and do not hesitate to contact me for any me with any suggestions or questions.',
          whyAFallacy: 'Why a fallacy detector?',
          iBelive:
            'I believe that the use of artificial intelligence is here to stay, whether we want it to or not. to stay, whether we want it to or not, and that many of the uses of it will be bad, but we can also try to bad, but we can also try to create tools that will help us to improve our critical help us to improve our critical spirit.',
          inThisExample:
            'In this example you can see a simple integration of the openAi API in a web a website, in a simple and easy way, I encourage you to download the code and learn how to use this api for your own uses.',
        },
        footer: {
          text: 'Developed by Miguel Zamora, contact information',
          here: 'here',
          orMyEmail: ' or in the email',
        },
        analyzer: {
          thisIsATool: 'This is a tool',
          experimental: 'experimental',
          theAimIs:
            'the aim is to analyse texts and speeches in order to detect the fallacies used in them with the help of the',
          artificialIntelligence: 'artificial intelligence',
          pasteHere: 'Paste here the text you want to analyse',
          button1: 'Look for fallacies in the discourse',
          button2: 'Look in another discourse',
          analysis: 'Analysis',
        },
      },
    },
    es: {
      translation: {
        navbar: {
          analyzer: 'Analizador',
          aboutMe: 'Sobre mí',
          code: 'Código',
        },
        about: {
          whoAmI: '¿Quién soy?',
          myNameIs:
            ' Mi nombre es Miguel Zamora Rey, soy desarrollador profesional desde 2015, y puedes ver mis proyectos o contactar conmigo a través de mi',
          website: 'página web',
          orMyEmail: ' o de mi correo',
          canIHave: '¿Puedo tener el código de este proyecto?',
          allTheCode:
            'Todo el código de este proyecto esta bajo licencia MIT para replicar su uso en el repositorio que puedes encontrar',
          here: 'aquí',
          iWouldBe:
            '. Te agradecería que me dejases una estrella, y no dudes en contactar conmigo para cualquier sugerencia o duda.',
          whyAFallacy: '¿Porque un detector de falacias?',
          iBelive:
            'Creo que el uso de la inteligencia artificial ha llegado para quedarse, querramos o no, y que muchos de los usos de esta serán malos, pero tambien podemos tratar de crear herramientas que nos ayuden a mejorar el espíritu crítico.',
          inThisExample:
            'En este ejemplo se ve una sencilla integracion de la API de openAi en una web, de forma simple y sencilla, te animo a descargar el código y aprender a utilizar esta api para tus propios usos.',
        },
        footer: {
          text: 'Desarrollada por Miguel Zamora, información de contacto',
          here: 'aqui',
          orMyEmail: ' o en el correo',
        },
        analyzer: {
          thisIsATool: 'Esta es una herramienta',
          experimental: 'experimental',
          theAimIs:
            'destinada al analisis de textos y discursos para la deteccción de las falacias utilizadas en ellos con la ayuda de la',
          artificialIntelligence: 'inteligencia artificial',
          pasteHere: 'Pega aqui el texto que quieras analizar',
          button1: 'Busca las falacias del discurso',
          button2: 'Busca en otro discurso',
          analysis: 'Análisis',
        },
      },
    },
  },
  lng: defaultLocale,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});
