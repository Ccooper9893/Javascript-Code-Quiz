//Step 1: Create variables for important element selectors
//Step 2: Create variables for time and scores
//Step 3: Create question objects
//Step 3: Hide pages (except for start page)
//Step 4: Retrieve previous highscores to store in local storage
//Step 5: Create functions
//Step 6: Create Event Listers

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

//Sets the visibility of the pages
questionMenu.style.display = 'none';
highscoresMenu.style.display = 'none';
submitMenu.style.display = 'none';

//Set timer
var secondsLeft = 100;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            
        }
    })
}

//Score
var currentScore = 0; //
var scoreList = []; //Makes an array for saved scores

//Initals
var initialList = [];

//Sets the visibility of the pages
questionMenu.style.display = 'none';
highscoresMenu.style.display = 'none';
submitMenu.style.display = 'none';

//Start Game function
var startGame = function () {

    //Starts timer
    setTime();

    //Hides start menu and displays question menu
    startMenu.style.display = 'none';
    questionMenu.style.display = '';
    
    //Inserts the first question and answers into the element
    questionText.textContent = question1.question;

    //Inserts answers into buttons
    answer1.textContent = question1.answers[0];
    answer2.textContent = question1.answers[1];
    answer3.textContent = question1.answers[2];
    answer4.textContent = question1.answers[3];

    //
}

startButton.addEventListener('click', startGame);






/* ------------------------------Questions-----------------------------------------*/
var currentQuestion = 0;

var question1 = {
    question: 'What method is used to print to the console?',
    answers: ['.push()', '.pop()', '.concat()', 'console.log()'],
    correctAnswer: 'console.log()'
};

var question2 = {
    question: 'What statement creates a loop that executes as long as the condition is (!true)?',
    answers : ['for', 'do while', 'while', 'if else'],
    correctAnswer: 'do while'
};

var question3 = {
    question: 'What tag is used to link Javascript to HTML?',
    answers : ['<link>', '<div>', '<script>', '<button>'],
    correctAnswer: '<script>'
};

var question4 = {
    question: 'Which one of these data types is a boolean value?',
    answers : ['null', 'string', 'false', 'bigInt'],
    correctAnswer: 'false'
};

var question5 = {
    question: 'Which one is a DOM property that allows modifying element classes? ',
    answers : ['.classList', '.appendChild', '.textContent', '.createElement'],
    correctAnswer: '.classList'
};

var question6 = {
    question: 'What are the possible types of events for the addEventLister method?',
    answers : ['click', 'mousewheel', 'scroll', 'all of the above'],
    correctAnswer: 'all of the above'
};

var question7 = {
    question: 'Which of these methods will add an element to the beginning of an array?',
    answers : ['push()', 'shift()', 'concat()', 'unshift()'],
    correctAnswer: 'unshift()'
};

//Creates array of available questions
var questionArr = [question1, question2, question3, question4, question5, question6, question7];











//------------------------------------Experimental Code -----------------------------------------------------

//Function will run when page loads.
// function init() {
//     // Get stored scores from localStorage
//     var storedScores = JSON.parge(localStorage.getItem('scoreList'));
//     var storedInitials = JSON.parge(localStorage.getItem('initalList'));

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
// function listHighcores () {
//     if (storedScores !== null && highscoresMenu.style.display !== 'none') {

//         for (i=0; i<scoreList.length; i++) {
//             var storedScores
//             highscoreList.appendChild('li');



//         }
//     }
// }