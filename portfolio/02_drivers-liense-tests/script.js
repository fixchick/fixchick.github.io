const quizData = [
    {
        question: "You may drive off of the paved roadway to pass another vehicle:",
        a: 'If the shoulder is wide enough to accommodate your vehicle',
        b: 'If the vehicle ahead of you is turning left',
        c: 'Under no circumstances',
        correct: 'a',
    }, {
        question: 'You are approaching a railroad crossing with no warning devices and are unable to see 400 feet down the tracks in one direction. The speed limit is:',
        a: '15 mph',
        b: '20 mph',
        c: '25 mph',
        correct: 'b',
    }, {
        question: 'When parking your vehicle parallel to the curb on a level street',
        a: 'Your front wheels must be turned toward the street',
        b: 'Your wheels must be within 18 inches of the curb',
        c: 'One of your rear wheels must touch the curb',
        correct: 'c',
    }, {
        question: ' When you are merging onto the freeway, you should be driving',
        a: 'At or near the same speed as the traffic on the freeway',
        b: '5 to 10 MPH slower than the traffic on the freeway',
        c: 'The posted speed limit for traffic on the freeway',
        correct: 'a',
    }, {
        question: 'When driving in fog, you should use your',
        a: 'Fog lights only',
        b: 'High beams',
        c: 'Low beams',
        correct: 'b',
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let selected;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            selected = answerEl.id;
        }
    });
    return selected;
}

submitBtn.addEventListener('click', () =>  {
    const answer = getSelected();
    if (!answer) {
        return;
    }

    if(answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        clearSelection();
        loadQuiz();
    } else {
        alert(`You finished! Your score ${score}/${quizData.length}`);
    }
});

function clearSelection() {
    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach((radioButton) => {
        radioButton.checked = false;
    });

}
