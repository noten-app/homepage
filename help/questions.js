const question_containers = document.querySelectorAll('.qa-question-container');

question_containers.forEach((question_container) => {
    question_container.addEventListener('click', () => {
        question_container.classList.toggle('qa-answer-shown');
    })
});