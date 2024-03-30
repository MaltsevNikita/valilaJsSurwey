const questions = [
    { type: 'choice', question: 'Какой цвет вам нравится больше?', options: ['Синий', 'Зеленый', 'Красный'] },
    { type: 'number', question: 'Сколько вам лет?' },
    { type: 'text', question: 'Как вас зовут?' }
];

let answers = [];

let currentQuestion = 0;
const questionDiv = document.getElementById('question');

function showQuestion() {
    questionDiv.innerHTML = '';
    const q = questions[currentQuestion];
    const questionText = document.createElement('p');
    questionText.textContent = q.question;
    questionDiv.appendChild(questionText);

    if (q.type === 'choice') {
        q.options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.addEventListener('click', () => {
                answers.push(option);
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    showQuestion();
                } else {
                    alert('Выбранные варианты: ' + answers.join(', '));
                }
            });
            questionDiv.appendChild(btn);
        });
    } else if (q.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        questionDiv.appendChild(input);
        const btn = document.createElement('button');
        btn.textContent = 'Ответить';
        btn.addEventListener('click', () => {
            answers.push(input.value);
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                alert('Выбранные варианты: ' + answers.join(', '));
            }
        });
        questionDiv.appendChild(btn);
    } else if (q.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        questionDiv.appendChild(input);
        const btn = document.createElement('button');
        btn.textContent = 'Ответить';
        btn.addEventListener('click', () => {
            answers.push(input.value);
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                alert('Выбранные варианты: ' + answers.join(', '));
            }
        });
        questionDiv.appendChild(btn);
    }
}

showQuestion();