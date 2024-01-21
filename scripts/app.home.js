import { getQuestionById } from './api.js';
import { generateRandomNumber, generateElement } from './utils/index.js';

const getQuestion = document.getElementById('question');
const questionCategory = document.getElementById('question_category');
const buttonSubmit = document.getElementById('button_submit');

document.addEventListener('DOMContentLoaded', () => {
  question.innerText = 'Tidak ada';
  questionCategory.innerText = 'Tidak ada kategori';

  buttonSubmit.addEventListener('click', async () => {
    const generateNumber = generateRandomNumber(1, 20);

    try {
      const response = await getQuestionById({ id: generateNumber });

      if (!response) return;

      question.innerText = response.jokes || 'wait mennn';
      const span = generateElement({
        tag: 'span',
        className: 'question-category',
        value: response.answer,
      });

      question.appendChild(span);
      questionCategory.innerText = response.category || 'tidak ada';

      console.log(response);
    } catch (error) {
      console.log('Error bro', { error });
    }
  });
});

// console.log("Hasil ne bro : ", getQuestionById({id:5}));
