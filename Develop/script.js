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
var highscoresLink = document.querySelector('#highscores');
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
var answerArr = [answer1, answer2, answer3, answer4]
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
var highscoreButton = document.querySelector('#highscore-btn');

//Score
var currentScore = 0; //Creates a score variable
var scoreList = []; //Makes an array for saved scores

//Question number index
var currentQuestion = 0;

//Initals
var initialList = [];

//Link to highscore page
highscoreButton.addEventListener('click', highscoreLink);

//--------------------Sets the visibility of the pages-------------------------
questionMenu.style.display = 'none';
highscoresMenu.style.display = 'none';
submitMenu.style.display = 'none';

//----------------------------------Set timer-----------------------------------
var secondsLeft = 0

function setTime() {
    secondsLeft = 100;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            submitMenu.style.display = '';
            questionMenu.style.display = 'none';
            clearInterval(timerInterval);
        } 
    }, 1000)
}


//-----------------------Sets the visibility of the pages----------------
questionMenu.style.display = 'none';
highscoresMenu.style.display = 'none';
submitMenu.style.display = 'none';

//-------------------Start Game functionality ---------------------------
var startGame = function () {

    //Starts timer
    setTime();

    //Hides start menu and displays question menu
    startMenu.style.display = 'none';
    questionMenu.style.display = '';
    
    //Inserts the first question and answers into the element
    questionText.textContent = questions[0].question;

    //Inserts answers into buttons
    for (i=0; i<4; i++) {
        answerArr[i].textContent = questions[currentQuestion].answers[i];
    }

}

//Listens for start button to be clicked
startButton.addEventListener('click', startGame);


//------------------------Answer Selection functionaliy--------------------------



//Listens for answers be clicked
answer1.addEventListener('click', selectAnswer);
answer2.addEventListener('click', selectAnswer);
answer3.addEventListener('click', selectAnswer);
answer4.addEventListener('click', selectAnswer);


function selectAnswer(event) {
    
    //Checking if selected answer is correct/incorrect
        if (event.target.innerText === questions[currentQuestion].correct) {
            tempResult.textContent = 'Correct!'
            currentScore = currentScore += 25;
            console.log('Correct');
            currentQuestion++;
        } else {
            tempResult.textContent = 'Incorrect!'
            secondsLeft -= 10;
            console.log('Incorrect');
            currentQuestion++;
        }

         //Goes to next quiz question
            nextQuestion();
    }
    
   
    



//--------------------------Next Question---------------------------//
function nextQuestion() {

    if (currentQuestion === questions.length) {
        //Ends game and calls gameOver function
        gameOver();
            
    } else {
        //Inserts the next question and answers into the element
        questionText.textContent = questions[currentQuestion].question;

        //Inserts answers into buttons
        for (i=0; i<4; i++) {
        answerArr[i].textContent = questions[currentQuestion].answers[i];
    }
    }
}


//-------------------------------  Gameover Page-------------------------------------------

function gameOver() {
    submitMenu.style.display = '';
    questionMenu.style.display = 'none';

    //Resets time
    secondsLeft = 0;
    timeLeft.textContent = secondsLeft;
    //Displays score in submitMenu page.
    scoreResult.textContent = currentScore;

    //Pushes score to scoreList array.
    scoreList.push(currentScore);

    // initialFill.textContent = // --------------------------------------Need help saving initials/score to array and pushing  to local storage.

    //Creates list items to display current and past saved scores
}

submitButton.addEventListener('click', highScorePage);

//-------------------------------Highscores Page-------------------------------------------
function highscoreLink () {
    startMenu.style.display = 'none'
    submitMenu.style.display = 'none';
    highscoresMenu.style.display = '';
    listHighcores();
}

function highScorePage () {
    initialList.push(initialFill.value);
    submitMenu.style.display = 'none';
    highscoresMenu.style.display = '';
    localStorage.setItem('Score:', currentScore);
    localStorage.setItem('Initials:', initialFill.value);
    
    //Creates a list item
    var li = document.createElement('li');

    //Fill list element with Initials and score
    li.innerText = `Player: ${initialFill.value} ---|--- Score: ${currentScore}`;

    //Inserts li into highscoreList ul
    highscoreList.append(li);       
    }

function listHighcores (e) {
    
}
resetQuizButton.addEventListener('click', reset);


//Resets the quiz
function reset () {
    questionMenu.style.display = 'none';
    highscoresMenu.style.display = 'none';
    submitMenu.style.display = 'none';
    startMenu.style.display = '';
    currentScore = 0;
    currentQuestion = 0;
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
    }
]


//------------------------------------Experimental Code -----------------------------------------------------

//Function will run when page loads.
// function init() {
//     // Get stored scores from localStorage
//     var storedScores = JSON.parse(localStorage.getItem('scoreList'));
//     var storedInitials = JSON.parse(localStorage.getItem('initalList'));

//     // If there are stored scores updated score list
//     if (storedScores !== null) {
//         initialList = storedInitials;
//         scoreList = storedScores;
//     }
// }

// function storedScores () {
//     localStorage.setIem('scoreList', JSON.stringify(scoreList));
// }

//Listing the scores on the 
           // scoreList.forEach(function(e) {
            //     initialList.forEach(function (e) {   
            //     var li = document.createElement('li')
            //     li.innerText = initial;
            //     highscoreList.append(li)
        
            
                 


