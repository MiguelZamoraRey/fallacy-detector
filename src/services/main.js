import axios from 'axios';

const SERVICE_URL = import.meta.env.SERVICE_URL;

export const analyzeText = async (text) => {
  try {
    const result = await axios({
      method: 'POST',
      url: SERVICE_URL,
      data: {
        text: text,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log('RESULT: ', result.data);
    return result.data;
  } catch (err) {
    return {
      tipo: 'Error',
      frase: '',
      explicacion: 'The service failed to detect the fallacies',
    };
  }
};
