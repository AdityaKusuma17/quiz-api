// == TEMPLATE QUIZ ITEM ==



import { getQuestions, createQuestion } from "./api.js";
import { generateQuizItem } from "./utils/index.js";

 const quizContent = document.getElementById("quiz-content");

document.addEventListener("DOMContentLoaded", () => {
    async function handleAllQuestions(){
        try {
            const questions = await getQuestions();

          if (!questions) return;

          quizContent.innerHTML = questions.map(
            (question)=>{
              
              return generateQuizItem({
                id: question.id,
                question: question.jokes,
                answer: question.answer,
                category: question.category,
              });
            }
          ).join("")

          console.log({ questions });

        } catch (error) {
         console.error("error bang : ", {
            error,
         });   
        }
    }

   handleAllQuestions(); 
});
