import { Configuration, OpenAIApi } from 'openai';

const SECRET = import.meta.env.VITE_OPEN_AI_SECRET;

const configuration = new Configuration({
  apiKey: SECRET,
});
const openai = new OpenAIApi(configuration);

/**
 * @param {String} text
 * @returns Clean JSON
 */
const cleanAndGetJSON = (text) => {
  text = text.trim();
  console.log('DIRTY TEXT', text);
  text = text.replace('/\n/g', '');
  text = text.replace('/\t/g', '');
  text = text.replace('.', '');
  text = text.replace('/-/g', '');
  text = text.substring(text.indexOf('['));
  console.log('CLEAN TEXT: ', text);
  return JSON.parse(text);
};

/**
 *
 * @param {String} text
 * @param {String} lang
 * @returns response
 */
export const analyzeText = async (text, lang) => {
  let response = '';
  if (lang === 'es' && SECRET) {
    response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Detecta todas las falacias del siguiente texto y devuelvemelas en un formato array de objetos json con los campos "tipo", "frase", "explicacion". Un ejemplo de respuesta valida: "[{"tipo": "Falacia de petición de principio", "frase": "No creo que sea la solucion", "explicacion": "No se ofrece ninguna alternativa válida"},{"tipo": "Falacia de ambigüedad", "frase": "Instar al sector financiero a que evidentemente facilite ese tránsito del tipo variable al tipo fijo en un contexto de endurecimiento de la política monetaria", "explicacion": "No hay una base clara e inequívoca para la acusación."}]". El texto a analizar: ${text}`,
      temperature: 0.9,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    });
  } else if (lang === 'es' && SECRET) {
    response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Detecta todas las falacias del siguiente texto y devuelvemelas en un formato array de objetos json con los campos "tipo", "frase", "explicacion". Un ejemplo de respuesta valida: "[{"tipo": "Falacia de petición de principio", "frase": "No creo que sea la solucion", "explicacion": "No se ofrece ninguna alternativa válida"},{"tipo": "Falacia de ambigüedad", "frase": "Instar al sector financiero a que evidentemente facilite ese tránsito del tipo variable al tipo fijo en un contexto de endurecimiento de la política monetaria", "explicacion": "No hay una base clara e inequívoca para la acusación."}]". El texto a analizar: ${text}`,
      temperature: 0.9,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    });
  } else {
    return null;
  }

  return cleanAndGetJSON(response.data.choices[0].text);
};
