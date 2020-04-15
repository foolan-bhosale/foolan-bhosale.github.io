const container = document.getElementsByClassName('.container');

//quiz container
const quizContainer = document.getElementById('quiz-container');

//next button
const nextButton = document.getElementById('next');

//start button
const startButton = document.getElementById('start');
// const prevButton = document.getElementById('prev');

// paragraph query
const paragraph = document.querySelector('#paragraph');

// list const
const list = document.querySelector('#list');

// h2 query
const heading = document.querySelector('h2');

//time div by id
const timerContainer = document.querySelector('#timer');
//score div by it's id
const scoreContainer = document.querySelector('#score');

//
const showAnswer = document.querySelector('#show-answer');
const hideDiv = document.querySelector('.hide');
const answerContainer = document.querySelector('.answer-container');
const resetButton = document.querySelector('#reset');
const resetContainer = document.querySelector('.reset-container');

// targeting the start button and adding event listener to it
startButton.addEventListener('click', startQuiz);

// function to start the quiz
function startQuiz() {
    //css style
    hideDiv.style.visibility = 'hidden';
    nextButton.style.display = 'block';
    scoreContainer.style.display = 'block';

    // timer
    let duration = 30 * questions.length;
    // let duration = 30 * 1;
    startTimer(duration, timerContainer);

    // displaying question function
    return displayQuestion();
}

// class constructors
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
        // this.string = string;
    }

    // targeting  next question method

    getNextQuestion() {
        return this.questions[this.questionIndex];
        // console.log(this.questions[this.questionIndex]);
    }

    //  method to check the game finished or not

    isGameFinished() {
        // alert(this.questions.length);
        if (this.questionIndex === this.questions.length) {
            console.log('returning true');
            return true;
        }
    }

    // getting Index of the question method

    incrementQuestionIndex() {
        this.questionIndex++;
    }
    // increase score method
    increaseScore() {
        this.score += 1;
        return this.score;
    }
}

class Question {
    constructor(string, choices, answer) {
        this.string = string;
        this.choices = choices;
        this.answer = answer;
    }

    //method to check answer
    correctAnswer(guessedAnswer) {
        return guessedAnswer === this.answer;
    }
}

let questions = [
    new Question(
        'HTML is what type of language ?',
        ['Scripting Language', 'Markup Language', 'Programming Language', 'Network Protocol'],
        'Markup Language'
    ),
    new Question(
        'Fundamental HTML Block is known as ___________.',
        ['HTML Body', 'HTML Tag', 'HTML Attribute', 'HTML Element'],
        'HTML Tag'
    ),
    new Question('Apart from b tag, what other tag makes text bold ?', ['fat', 'strong', 'black', 'emp'], 'strong'),
    new Question(
        'What is the full form of HTML?',
        ['HyperText Markup Language', 'Hyper Teach Markup Language', 'Hyper Tech Markup Language', 'None of these'],
        'HyperText Markup Language'
    ),
    new Question('What should be the first tag in any HTML document?', ['head', 'title', 'html', 'document'], 'html'),
    new Question('How can you make a bulleted list with numbers?', ['dl', 'ol', 'list', 'ul'], 'ol'),
    new Question('Which HTML tag produces the biggest heading?', ['h7', 'h9', 'h4', 'h1'], 'h1'),
    new Question('HTML tags are surrounded by which type of brackets.', ['Curly', 'Round', 'Square', 'Angle'], 'Angle'),
    new Question(
        'Who is Known as the father of World Wide Web (WWW)?',
        ['Robert Cailliau', 'Tim Thompson', 'Charles Darwin', 'Tim Berners-Lee'],
        'Tim Berners-Lee'
    ),
    new Question('What tag is used to display a picture in a HTML page?', ['picture', 'image', 'img', 'src'], 'img'),
    new Question(
        'If we want define style for an unique element, then which css selector will we use ?',
        ['id', 'text', 'class', 'name'],
        'id'
    ),
    new Question(
        'Can we align a Block element by setting the left and right margins ?',
        ['Yes, we can', 'Not Possible', 'Both of the above', 'Question is wrong'],
        'Not Possible'
    ),
    new Question(
        'If we want to show an Arrow as cursor, then which value we will use ?',
        ['pointer', 'default', 'arrow', 'arr'],
        'default'
    ),
    new Question(
        'Which CSS property is used to control the text size of an element ?',
        ['font-style', 'text-size', 'font-size', 'text-style'],
        'font-size'
    ),
    new Question(
        'The default value of "position" attribute is _________.',
        ['fixed', 'absolute', 'inherit', 'relative'],
        'relative'
    ),
    new Question(
        'Which of the following is a way to associate styles with your HTML document?',
        ['External CSS - The Element', 'imported Css @ import role', 'Both of the above', 'None of the above'],
        'Both of the above'
    ),
    new Question(
        'What does CSS stand for?',
        ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
        'Cascading Style Sheets'
    ),
    new Question(
        'How do you make the text bold?',
        ['font:b', 'font-weight:bold', 'style:bold', 'none of the above'],
        'font-weight:bold'
    ),
    new Question(
        'How do you change the left margin of an element?',
        ['margin:', 'indent:', 'margin-left:', 'text-indent:'],
        'margin-left:'
    ),
    new Question(
        'How do you make a list that lists its items with squares?',
        ['list-type: square', 'type: square', 'type: 2', 'list-style-type: square'],
        'list-style-type: square'
    )
];

let quiz = new Quiz(questions);

// display quiz function;

function displayQuestion() {
    let question = quiz.getNextQuestion();
    console.log(question);

    heading.innerHTML = `<h2>Question ${quiz.questionIndex + 1}</h2>`;
    paragraph.innerHTML = `<p>${question.string}</p>`;

    // creating ul elements
    let listOfAnswers = document.createElement('ul');

    //looping ul elements to get list of answers
    for (let i = 0; i < question.choices.length; i++) {
        // console.log(question.choices[i]);

        // creating list of answers
        let radioList = document.createElement('li');

        // creating radio buttons to target click events for list

        let label = document.createElement('label');
        label.classList.add('float-left');
        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('value', question.choices[i]);
        input.setAttribute('name', 'option');
        label.appendChild(input);
        label.innerHTML += question.choices[i];
        radioList.appendChild(label);
        listOfAnswers.appendChild(radioList);

        //Adding a event listener for radio button click
        label.addEventListener('click', function(event) {
            let clickedAnswer = event.target.value;

            //hide quiz container
            quizContainer.style.display = 'none';
            // console.log(event.target.value);

            scoreContainer.classList.remove('score-change');

            // checking for answer correct or incorrect through if/else condition
            if (quiz.getNextQuestion().correctAnswer(clickedAnswer)) {
                // increasing score if answer is correct by calling increaseScore() function
                let currentScore = quiz.increaseScore();

                scoreContainer.innerHTML = `Score: ${currentScore}`;
                scoreContainer.classList.add('score-change');
                //css style
                answerContainer.style.display = 'grid';
                showAnswer.innerHTML = `Good one! You are correct.`;
            } else {
                //css style
                answerContainer.style.display = 'grid';

                //if answer is wrong display answer of current question .
                showAnswer.innerHTML = `Oops..!<br>The Correct Answer is: <strong>${quiz.getNextQuestion()
                    .answer}</strong>`;
            }
        });
    }

    list.innerHTML = '';
    list.appendChild(listOfAnswers);
}

// target next button and add event listener to it, so quiz gets it's next index of objects of  an array

nextButton.addEventListener('click', function(e) {
    //display quiz container
    quizContainer.style.display = 'block';
    quiz.incrementQuestionIndex();
    showAnswer.innerHTML = '';
    answerContainer.style.display = 'none';
    if (quiz.isGameFinished()) {
        resetGame();

        nextButton.style.display = 'none';
    } else {
        displayQuestion();
    }
});

// targeting the reset button and adding event listener to it.
resetButton.addEventListener('click', resetGame);

// function to reset the quiz
function resetGame() {
    //hide quiz container
    quizContainer.style.display = 'none';
    if (quiz.isGameFinished()) {
        // displaying current score of attempted question
        resetContainer.innerHTML = `<h1>Game is over</h1><h3>Your total score is: ${quiz.score} out of 20 questions.</h3> <button id ='reset' onclick='window.location.href="index.html"'>Reset Game</button><br>
        <h3 id='button'><a href='https://generalassemb.ly/' target='_blank'> Want to learn More?</a></h3>`;

        // reset question index to 0
        quiz.questionIndex = 0;

        //reset score to 0
        quiz.score = 0;

        //css style
        answerContainer.style.display = 'none';
        resetContainer.style.display = 'block';
    }
}

//This function is to start the timer for the total duration
function startTimer(duration, timerContainer) {
    timerContainer.style.display = 'block';
    let timer = duration;
    let minutes, seconds;
    setInterval(function() {
        //added parseInt javascript method to timer
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);

        //formatting time and minutes in  00:00 format, checking if/else condition

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerContainer.textContent = `Time left ${minutes}:${seconds}`;

        // decrease time
        timer--;
        if (timer < 0) {
            timerContainer.style.display = 'none';
            // Jump to final screen with scores
            resetContainer.innerHTML = `<h1>Game is over</h1><h3>Your total score is: ${quiz.score} out of 20 questions.</h3> <button id ='reset' onclick='window.location.href="index.html"'>Reset Game</button><br>
        <h3 id='button'><a href='https://generalassemb.ly/' target='_blank'>Learn More</a></h3>`;
            answerContainer.style.display = 'none';
            resetContainer.style.display = 'block';
        }
    }, 1000);
}

//timer test
