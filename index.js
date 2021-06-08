var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.yellowBright('Welcome To Test Your English Quiz!! '));

var userName = readlineSync.question(chalk.blackBright.red('Give your name: '));

console.log(chalk.blackBright.red('Welcome', userName, 'Let us start the Quiz!!'));

console.log(chalk.yellowBright('Rules and Instructions:'));
console.log(chalk.bgCyan('1.', userName, 'There are 10 Questions on English and all are Compulsory.'));
console.log(chalk.bgCyan('2. You will get 2 points on each Right Answer.'));
console.log(chalk.bgCyan('3. One Point will be deducted if the Answer is Wrong.'));

var scoreBoard =[
  {name :"minni ", score: "10"},
  {name :"rajesh", score: "07" },
  {name :"ravi  ", score: "07" }
];

console.log(chalk.red.underline('scoreBoard:'));
console.log(chalk.green.underline('Name    Score'));
for(var i = 0; i<scoreBoard.length; i++){
  console.log(chalk.greenBright(scoreBoard[i].name, scoreBoard[i].score));
}


var score = 0;

function quiz(questions, answers){
  var userEntered = readlineSync.question(questions)

  if (userEntered.toLowerCase() === answers.toLowerCase()){
    console.log(chalk.cyanBright("You were right!"));
    score = score + 2;
  } else {
    console.log(chalk.cyanBright("You were wrong!"));
    score = score + 0;
    console.log(chalk.blue('The Correct Answer is: ',answers))
  }
    console.log(chalk.bgYellowBright("score is: ", score));
}

var quizSheet =[
  {
    questions : `Good morning! _____ and shine!`,
    answers   : `Rise`,
  },
  {
    questions :`Work _______ challenging but i like it.`,
    answers   :`is always`,
  },
  {
    questions :`Bob is _____ than tom.`,
    answers   :`Richer`,
  },
  {
    questions :`She is not really crying those are ______ tears because it is bedtime.`,
    answers   :`Crocodile`,
  }
];


function quizMcq(question, answer){
  var userEntered = readlineSync.question(question)

  if (userEntered.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.cyanBright("You were right!!"));
    score = score + 2;
  } else {
    console.log(chalk.cyanBright("You were wrong!!"));
    score = score - 1;
    console.log(chalk.blue('The Correct Answer is: ',answer))
  }
    console.log(chalk.bgYellowBright('score is: ', score));
}

var quizListMcq =[
  {
   question :`
	Do you have ------- brothers or sister?
	a: some
	b: the
	c: any\n`,
   answer :"c" 
  },
  {
   question :`
  I do not have my own house. I _____ one.
  a: hire
  b: rent
  c: let\n`,
   answer :"b"
  },
  {
   question :`
  I have never been very good ______ chess.
  a: in
  b: at
  c: on\n`,
   answer :"b"
  },
  {
   question :`
	Do you ______ if i close the window? it is cold!
	a: bother
	b: refuse
	c: mind\n`,
   answer :"c"
  },
  {
   question :`
	I get _______ when i have nothing to do
	a: bored
	b: bore
	c: boring\n`,
   answer :"a"
  },
  {
   question :`
	I always bite my nails i need to ______ the habit.
	a: punch
	b: hit
	c: kick\n`,
   answer :"c"
  }
];


for(var i = 0; i<quizSheet.length; i++){
  console.log(chalk.cyanBright('Question',i+1));
  quiz(quizSheet[i].questions, quizSheet[i].answers);
}


var j = 5;
for(var i = 0; i<quizListMcq.length; i++){
  console.log(chalk.cyanBright('Question',j++));
  quizMcq(quizListMcq[i].question, quizListMcq[i].answer);
}

console.log(chalk.cyanBright.italic.underline('Congratulations,',userName,'your Total Score is: ',score));

console.log(chalk.cyanBright.italic.underline('Thanks for Solving the Quiz,if you have beaten the score that is on the scoreBoard than Please take the Screenshot of the Score and Send it to Ashish'));

