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


//Timers
var timerCount = 100;

//Score
var currentScore = 0; //
var scoreList = []; //Makes an array for saved scores

//Questions
var currentQuestion = 0;

var question1 = {
    question: 'What method is used to print to the console',
    answers: ['.push()', '.pop()', '.concat()', 'console.log()'],
    correctAnswer: 'console.log()'
};

var question1 = {
    question: 'What statement creates a loop that executes as long as the condition is (!true)?',
    answers : ['for', 'do while', 'while', 'if else']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}

var question1 = {
    question: '',
    answers : ['', '', '', '']
}




