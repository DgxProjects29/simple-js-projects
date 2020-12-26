const upIconClass = "fa-chevron-up";
const downIconClass = "fa-chevron-down";

/* const q1Button = document.getElementById("q1-button");

q1Button.addEventListener("click", () => {
  q1Button.firstElementChild.firstElementChild.classList.replace(
    "fa-chevron-down", "fa-chevron-up"
  )
}); */

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const questionButton = question.querySelector(".question-btn");
  const questionText = question.querySelector(".question-text");
  const iconTag = questionButton.firstElementChild.firstElementChild

  questionButton.addEventListener("click", () => {
    const questionTextClassList = questionText.classList;
    if (!questionTextClassList.contains("question-text-active")) {
      questionTextClassList.add("question-text-active");
      iconTag.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      questionTextClassList.remove("question-text-active");
      iconTag.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});
