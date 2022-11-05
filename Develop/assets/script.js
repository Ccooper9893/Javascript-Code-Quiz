//Step 1: Create variables for important element selectors
//Step 2: Create variables for time and scores
//Step 3: Create question objects
//Step 3: Hide pages (except for start page)
//Step 4: Retrieve previous highscores to store in local storage
//Step 5: Create functions
//Step 6: Create Event Listers
//Step 7: Save scores and initials

//-----------------------Create variables that are selected html elements-------------------------
//Header elements
var highscoreButton = document.querySelector('#highscore-btn');
var timerLink = document.querySelector('#timer');
var timeLeft = document.querySelector('#timeLeft');

//Start Page elements
var startMenu = document.querySelector('#start-menu');
var startButton = document.querySelector('#start-button');

//Questions Page elements
var questionMenu = document.querySelector('#quiz')
var questionText = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var answerArr = [answer1, answer2, answer3, answer4];
var tempResult = document.querySelector('#result');

//Score Result Page
var submitMenu = document.querySelector('#submit-form');
var scoreResult = document.querySelector('#score-result');
var initialFill = document.querySelector('#initial-submit');
var submitButton = document.querySelector('#submit-button');

//Highscores Page
var highscoresMenu = document.querySelector('#highscores-page');
var highscoreList = document.querySelector('#saved-highscores');
var resetQuizButton = document.querySelector('#reset-button');
var resetScores = document.querySelector('#clear-button');

//Score
var currentScore = 0; //Creates a score variable
var scoreList = []; //Makes an array for saved scores
var secondsLeft = 40 //Sets the timer to 0
timeLeft.textContent = secondsLeft;
//Question number index
var currentQuestion = 0;

//Initals
var initialList = [];

//Pulls highscores from local storage when page is opened
var localScores = JSON.parse(localStorage.getItem('Score'));
var localInitials = JSON.parse(localStorage.getItem('Initials'));

//--------------------Sets the visibility of the pages-------------------------
questionMenu.style.display = 'none';
highscoresMenu.style.display = 'none';
submitMenu.style.display = 'none';

/*------------------------Event Listeners-------------------------------*/
startButton.addEventListener('click', startInput); //Start button
answer1.addEventListener('click', selectAnswer); //Answer choices
answer2.addEventListener('click', selectAnswer);
answer3.addEventListener('click', selectAnswer);
answer4.addEventListener('click', selectAnswer);
submitButton.addEventListener('click', highScorePage); //Submit initials/scores
resetQuizButton.addEventListener('click', reset); //Reset quiz
highscoreButton.addEventListener('click', highscoreLinkPage); //Link to highscores
resetScores.addEventListener('click', clearScores); //Deletes previously saved highscores.

/*-------------------------------------------Functions--------------------------------------------------*/
//Sets timer
function setTime() {
    secondsLeft = 40;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;
        if (secondsLeft < 1) {
            secondsLeft = 0;
            submitMenu.style.display = '';
            questionMenu.style.display = 'none';
            clearInterval(timerInterval);
            //Displays score in submitMenu page.
            scoreResult.textContent = currentScore;
            scoreList.push(currentScore);



        } 
    }, 1000)
}

//Retake Quiz timer
function startInput () {
    startButton.innerHTML = 'Goodluck!';
    setTimeout(startGame, 500);
}

//Starts quiz
function startGame () {
    for (i=0; i<4; i++) { answerArr[i].style.background = '#FFFFFF';}
    startButton.innerHTML = 'Start Quiz';
    //Starts timer
    setTime();
    // init();
    //Hides start menu and displays question menu
    startMenu.style.display = 'none';
    questionMenu.style.display = '';
    tempResult.textContent = '';
    highscoresMenu.style.display = 'none';
    //Inserts the first question and answers into the element
    questionText.textContent = questions[0].question;

    //Inserts answers into buttons
    for (i=0; i<4; i++) {
        answerArr[i].textContent = questions[currentQuestion].answers[i];
    }

}

//Answer selection
function selectAnswer(event) {
    
    //Checking if selected answer is correct/incorrect
        if (event.target.innerText === questions[currentQuestion].correct) {
            //Styling
            tempResult.textContent = '+25 points!';
            tempResult.style.color = '#87FE00';
            event.target.style.background = '#87FE00';
            event.target.innerText = 'Correct!'

            //Score update
            currentScore = currentScore += 25;
            currentQuestion++;
            ;
        } else {
            //Styling
            tempResult.textContent = '-10 seconds!';
            tempResult.style.color = '#E83737';
            event.target.style.background = '#E83737';
            event.target.innerText = 'Incorrect!';
            timeLeft.style.color = '#E83737';
            //Score update
            secondsLeft -= 10;
            currentQuestion++;
        }

        setTimeout(nextQuestion, 500);
    }
    
//Next Question
function nextQuestion() {
    tempResult.textContent = '';
    tempResult.style.color = 'none';
    timeLeft.style.color = 'black'
    if (currentQuestion === questions.length) {
        //Ends game and calls gameOver function
        gameOver();
            
    } else {
        //Inserts the next question and answers into the element
        questionText.textContent = questions[currentQuestion].question;

        //Inserts answers into buttons
        for (i=0; i<4; i++) {
        answerArr[i].style.background = '#FFFFFF';
        answerArr[i].textContent = questions[currentQuestion].answers[i];
    }
    }
}


//Game Over
function gameOver() {
    submitMenu.style.display = '';
    questionMenu.style.display = 'none';
    resetQuizButton.innerHTML = 'Retake Quiz';

    //Resets time
    secondsLeft = 1;
    timeLeft.textContent = secondsLeft;

    //Displays score in submitMenu page.
    scoreResult.textContent = currentScore;

    //Pushes score to scoreList array.
    scoreList.push(currentScore);
}

//Displays highscores
function highscoreLinkPage () {
    var localScores = JSON.parse(localStorage.getItem('Score'));
    var localInitials = JSON.parse(localStorage.getItem('Initials'));
    if (localScores !== null && questionMenu.style.display === 'none' && highscoresMenu.style.display === 'none') {
        highscoresMenu.style.display = '';
        startMenu.style.display = 'none';
        submitMenu.style.display = 'none';

        for (i=0; i<localInitials.length; i++) {
                //Creates a list item
                var li = document.createElement('li');

                //Fill list element with Initials and score
                li.innerText = `Player: ${localInitials[i]} | Score: ${localScores[i]}`;

                //Inserts li into highscoreList ul
                highscoreList.append(li);
        }
    }
}

//Post quiz highscores after submitting your score
function highScorePage () {

    if (initialFill.value === '' || initialFill.value.length > 20) {
        submitButton.style.background = '#E83737';
    } else {
    //Pushes initials input into array
    initialList.push(initialFill.value);

    //Stores score in local storage
    localStorage.setItem('Score', JSON.stringify(scoreList));
    localStorage.setItem('Initials', JSON.stringify(initialList));
    submitButton.style.background = '#87FE00'
    submitButton.innerHTML = 'Submitted!'
    setTimeout(highscoreLinkPage, 200);
}}

//Takes you back to start menu
function retakeQuiz () {
    questionMenu.style.display = 'none';
    highscoresMenu.style.display = 'none';
    submitMenu.style.display = 'none';
    startMenu.style.display = '';

    submitButton.style.background = '#FFFFFF';
    submitButton.innerHTML = 'Submit';
    //Resets Score
    currentScore = 0;
    currentQuestion = 0;
    highscoreList.innerHTML = '';
}

//Starts timer
function reset () {
    secondsLeft = 40;
    timeLeft.textContent = secondsLeft;
    setTimeout(retakeQuiz, 100);   
}

//Clears highscores from local storage
function clearScores () {
    highscoreList.innerHTML = '';
    initialList = [];
    scoreList = [];
    localStorage.clear();
    resetQuizButton.innerHTML = 'Retake Quiz';

}

/* ------------------------------Questions/Answers-----------------------------------------*/
var questions = [ 

    { 
        question: 'What method is used to print to the console?', 
        answers: ['.push()', '.pop()', '.concat()', 'console.log()'], 
            correct: 'console.log()'
    },


    { 
    question: 'What statement creates a loop that executes as long as the condition is (!true)?', 
    answers: ['for', 'do while', 'while', 'if else'],
        correct: 'do while'

    },


    {
        question:'What tag is used to link Javascript to HTML?',
            answers: ['<link>', '<div>', '<script>', '<button>'], 
                correct: '<script>'
    },




    {
        question: 'Which one of these data types is a boolean value?', 
            answers: ['null', 'string', 'false', 'bigInt'], 
                correct: 'false'

    },


    {
        question: 'Which one is a DOM property that allows modifying element classes? ', 
            answers:['.classList', '.appendChild', '.textContent', '.createElement'], 
                correct: '.classList'

    },


    {
        question: 'What are the possible types of events for the addEventLister method?', 
            answers: ['click', 'mousewheel', 'scroll', 'all of the above'], 
                correct: 'all of the above'

    },  


    {
        question: 'Which of these methods will add an element to the beginning of an array?', 
            answers: ['push()', 'shift()', 'concat()', 'unshift()'], 
                correct: 'unshift()'
    },


    {
        question: 'Which method sets a timer that executes a function when it expires?', 
            answers: ['setInterval()', 'setTimer()', 'setTimeout(func, time)', 'all of the above'], 
                correct: 'setTimeout(func, time)' 
    },


    {
        question: 'Which one of these will store items in the localStorage?', 
            answers: ['localStorage.getItem()', 'JSON.stringify()', 'localStorage.setItem()', 'JSON.parse()'], 
                correct: 'localStorage.setItem()' 
    },


    {
        question: 'Which DOM method is used to select this element?           <h1 id=\'hero\'</h1>?', 
            answers: ['document.querySelector(hero)','document.getElementbyClass(\'hero\')','document.getElementbyId(\'#hero\')','none of the above'], 
                correct: 'document.getElementbyId(\'#hero\')' 
    },


    {
        question: 'What is Javascript?', 
            answers: ['Type of coffee','Typewriter Ink','A programming language','I have no idea.'], 
                correct: 'A programming language' 
    },


    {
        question: 'How many perimeters does an eventListener require?', 
            answers: ['4','3','2','1'], 
                correct: '2' 
    },


    {
        question: 'Which one of these could you not use to change the text inside of an HTML element?', 
            answers: ['setItem()','.value','.textContent','.innerHTML'], 
                correct: 'setItem()' 
    },


    {
        question: 'What will be returned if a localStorage is empty?', 
            answers: ['An empty string','null','undefined','0'], 
                correct: 'null' 
    },
]



