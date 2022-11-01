//Selecting HTML elements
var startbutton = document.querySelector('#start-menu');
var mainContent = document.querySelector('#quiz'); //Selects the main content container
var timer = document.querySelector('#timeLeft');
var question = document.querySelector('#question');
var answers = document.querySelectorAll('#answer');
    var answersArr = Array.prototype.slice.call(answers); //Combined answer node array
var result = document.querySelector('#result');

console.log(answersArr);
//Timer length
var secondsLeft = 100;



//Start button makes startpage invisible and makes main content visible
startbutton.addEventListener('click', function() {
    startbutton.classList.add('invisible');
    mainContent.classList.remove('invisible');

    //Calls startTime function
    startTime();
    //Calls for the first question
    nextPage();
});

//Timer
function startTime () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            //Call game over function
        }
        
    }, 1000);    
}

var pageCount = 0;

function nextPage () {

    pageCount++;

    if (pageCount === 1) {
        question.textContent = questionArray[0];
        for (i=1; i<contentLength.length; i++) {
            answersArr[i-1].textContent = content.P.questionAnswers[i];
            } 
    }
  
};


//------------------------------------------------------Questions and Answers---------------------------------------------------------------------------
[Symbol('age')]
var content = {
    
    P1: { Q1: 'What is Javascript?',
        [Symbol('A1')]: 'Webrogramming language for the web', //Correct
        [Symbol('A2')]: 'Type of coffee',
        [Symbol('A3')]: 'Meaning of life',
        [Symbol('A4')]: 'All of the above'},

    P: { Q1: 'What tag must be used to link Javascript to HTML?',
        [Symbol('A1')]: '<link>',
        [Symbol('A2')]: '<head>',
        [Symbol('A3')]: '<body>',
        [Symbol('A4')]: 'None of the above'},

    P: { Q1: '',
        [Symbol('A1')]: '',
        [Symbol('A2')]: '',
        [Symbol('A3')]: '',
        [Symbol('A4')]: ''},

    


}


//Makes an array of answers and questions-------------------------------------------------------
var questionArray = [];
var contentLength = Object.keys(content);
var questionAnswers = [];

console.log(questionArray);


//Creates an array of answers that exist in the content object 0-3
for (i=0; i<contentLength.length; i++) {
    questionAnswers[i] = Object.getOwnPropertySymbols(content.P);
}

//Creates an array of questions that exist in the content object
for (i=0; i<contentLength.length; i++) {
    questionArray[i] = (content[contentLength[i]].Q1);
}



/* -----------------------------------Saved experimental code------------------------------------- */

// var answerText = [];
// for (i=0; i<answersArr.length; i++) {
//     answerText.push(answersArr[i].textContent);// Combines text contents of answerArr into array
// }

// var arr = [];
// // arr.push(answer1, answer2, answer3, answer4);
// // console.log(arr); //["hello", "good"]


var pages = [];
for (i=0; i<content.length; i++) {
}

