// script.js
function cambiarContenido(pagina) {
  const contenidoDiv = document.getElementById('contenido');
  contenidoDiv.innerHTML = `<iframe src="${pagina}" frameborder="0" style="width: 100%; height: 100vh;"></iframe>`;
}



function evaluateQuiz() {
    const form = document.getElementById('quizForm');
    const questions = form.querySelectorAll('.question');
    let correctAnswers = 0;

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.value === 'correct') {
            correctAnswers++;
        }
    });

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const resultDiv = document.getElementById('result');

    if (scorePercentage >= 70) {
        resultDiv.innerHTML = `<p>Aprobado - ${scorePercentage.toFixed(2)}%</p>`;
    } else {
        resultDiv.innerHTML = `<p>Desaprobado - ${scorePercentage.toFixed(2)}%</p>`;
    }
}





