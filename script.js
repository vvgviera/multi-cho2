// script.js
function cambiarContenido(pagina) {
  const contenidoDiv = document.getElementById('contenido');
  contenidoDiv.innerHTML = `<iframe src="${pagina}" frameborder="0" style="width: 100%; height: 100vh;"></iframe>`;
	window.scrollTo(0, 0);
}



// JavaScript
function evaluateQuiz() {
    const form = document.getElementById('quizForm');
    const questions = form.querySelectorAll('.question');
    let correctAnswers = 0;
    let incorrectQuestions = [];

    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            if (selectedOption.value === 'correct') {
                correctAnswers++;
            } else {
                incorrectQuestions.push(index + 1);

            }
        } else {
            incorrectQuestions.push(index + 1);

        }
    });

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const modalContent = document.getElementById('modalContent');
    const resultModal = document.getElementById('resultModal');
    const overlay = document.getElementById('overlay');

    let resultMessage = scorePercentage >= 70 
        ? `<p>Aprobado - ${scorePercentage.toFixed(2)}%</p>` 
        : `<p>Desaprobado - ${scorePercentage.toFixed(2)}%</p>`;

    if (incorrectQuestions.length > 0) {
        resultMessage += `<p>Preguntas incorrectas: ${incorrectQuestions.join(', ')}</p>`;
    }

    modalContent.innerHTML = resultMessage;
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

//Limpia los radio buttons

function limpiarRadios() {
            // Obtenemos todos los elementos tipo radio del formulario
            const radios = document.querySelectorAll('input[type="radio"]');
            
            // Recorremos y desmarcamos cada radio
            radios.forEach(radio => radio.checked = false);

	// Volver al inicio de la página
            window.scrollTo(0, 0);
        }


