// script.js
function cambiarContenido(pagina) {
  const contenidoDiv = document.getElementById('contenido');
  contenidoDiv.innerHTML = `<iframe src="${pagina}" frameborder="0" style="width: 100%; height: 100vh;"></iframe>`;
}



// JavaScript
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
    const modalContent = document.getElementById('modalContent');
    const resultModal = document.getElementById('resultModal');
    const overlay = document.getElementById('overlay');

    if (scorePercentage >= 70) {
        modalContent.innerHTML = `<p>Aprobado - ${scorePercentage.toFixed(2)}%</p>`;
    } else {
        modalContent.innerHTML = `<p>Desaprobado - ${scorePercentage.toFixed(2)}%</p>`;
    }

    resultModal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    const resultModal = document.getElementById('resultModal');
    const overlay = document.getElementById('overlay');

    resultModal.style.display = 'none';
    overlay.style.display = 'none';

    // Devolver el foco al formulario del cuestionario
    document.getElementById('quizForm').focus();
}

function highlightAndSelectCorrect() {

	function highlightIncorrectAnswers()
	
    // Selecciona todas las casillas de verificación tipo radio
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
        // Restablece el color de fondo de todas las casillas
        radio.parentElement.style.backgroundColor = ""; 
        
        // Si el valor del radio button es "correct"
        if (radio.value === "correct") {
            // selecciona la casilla            
            radio.checked = true; // Marca la casilla como seleccionada
			return
        }
    });
	
	
}

highlightIncorrectAnswers();

function highlightIncorrectAnswers() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        const paragraph = question.querySelector('p'); // Asumiendo que los párrafos están dentro del contenedor de cada pregunta
        if (selectedOption && selectedOption.value !== 'correct') {
            // Subrayar el párrafo de la pregunta incorrecta
            paragraph.style.textDecoration = 'underline';
            paragraph.style.color = 'red'; // Opcional, para más visibilidad
        } else if (paragraph) {
            // Restaurar estilo para preguntas correctas o no seleccionadas
            paragraph.style.textDecoration = 'none';
            paragraph.style.color = 'black'; // Restablece el color original
        }
    });
}

// Llama a la función después de evaluar el cuestionario
//evaluateQuiz();


// Llama a la función cuando sea necesario:
//highlightAndSelectCorrect(); // Ejecutará los cambios al invocarla


// Obtener referencia al elemento donde mostraremos el contador
const visitCountElement = document.getElementById('visitCount');

// Recuperar el contador de visitas desde el almacenamiento local
let visitCount = localStorage.getItem('visitCount');

// Si no existe un contador en el almacenamiento local, inicializarlo
if (!visitCount) {
    visitCount = 0;
}

// Incrementar el contador
visitCount++;

// Guardar el nuevo valor en el almacenamiento local
localStorage.setItem('visitCount', visitCount);

// Mostrar el contador en la página
visitCountElement.textContent = visitCount;




