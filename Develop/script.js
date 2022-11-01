//Selecting HTML elements
var startbutton = document.querySelector('#start-menu');
var mainContent = document.querySelector('#quiz');
var timer = document.querySelector('#timeLeft');
var question = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var result = document.querySelector('#result');

var secondsLeft = 100;

console.log(answer2.textContent);


//Start button functionality
startbutton.addEventListener('click', function() {
    startbutton.classList.add('invisible');
    mainContent.classList.remove('invisible');

    //Calls startTime function
    startTime();
    page1();
});

//Timer
function startTime () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {

        }
    }, 1000);
    
}


function page1 () {
    
    question.textContent = questionList.Q1;
    answer1.textContent = questionList.Q1A1;
    answer2.textContent = questionList.Q1A2;
    answer3.textContent = questionList.Q1A3;
    answer4.textContent = questionList.Q1A4;
    
};


//Questions and Answers
var questionList = {
    
    Q3:'',
    Q4:'',
    Q5:'',
    Q6:'',
    Q7:'',
    Q8:'',
    Q9:'',
    Q10:'',

    Q1: 'What is Javascript?',
        Q1A1: 'Webrogramming language for the web', //Correct
        Q1A2: 'Type of coffee',
        Q1A3: 'Meaning of life',
        Q1A4: 'All of the above',

    Q2:'',
        Q2A1: '',
        Q2A2: '',
        Q2A3: '',
        Q2A4: '',
}
