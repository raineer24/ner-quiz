function Quiz() {
 this.score = 0;
 this.questions = questions;
 this.questionIndex = 0;

}

Quiz.prototype.getQuestionIndex = function () {

 return this.questions[this.questionIndex];

}


Quiz.prototype.guess = function (answer) {
 if (this.getQuestionIndex().isCorrectAnswer(answer)) {
  this.score++;
 }
 this.questionIndex++;

}

Quiz.prototype.isEnded = function () {
 return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
 this.text = text;
 this.choices = choices;
 this.answer = answer;
}



Question.prototype.isCorrectAnswer = function (choice) {
 console.log(this.answer)
 return this.answer === choice;

}

function populate() {
 if (quiz.isEnded()) {
  showScores();

 } else {
  let questionElement = document.getElementById("question");
  questionElement.innerHTML = quiz.getQuestionIndex().text;

  //showOptions

  let choices = quiz.getQuestionIndex().choices;
  for (let i = 0; i < choices.length; i++) {
   let elementChoice = document.getElementById("choice" + i);
   elementChoice.innerHTML = choices[i];
   //console.log(elementChoice.innerHTML);

   guess("btn" + i, choices[i]);
  }
  showProgress();
 }

};

function guess(id, guess) {
 let button = document.getElementById(id);
 button.onclick = function () {
  quiz.guess(guess);
  populate();
 }

};

function showProgress() {
 let currentQuestionNumber = quiz.questionIndex + 1;
 //console.log(currentQuestionNumber);
 let element = document.getElementById('progress');
 element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;

};

function showScores() {
 let gameOVerHtml = `<h1>Result</h1>`;
 gameOVerHtml += `<h2 id='score'> Your scores: ${quiz.score} </h2>`;
 let element = document.getElementById('quiz');
 element.innerHTML = gameOVerHtml;

}

let questions = [
 new Question("Which superhero has an assistant called Robin?", ["Wolverine", "Superman", "Aquaman", "Batman"], "Batman"),
 new Question("Which is the largest ocean of the world?", ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean", ], "Pacific Ocean"),
 new Question("Which is the tallest mammal of the world?", ["Elephant", "Giraffe", "Bear", "Tiger"], "Giraffe"),
 new Question("Where is Niagara Falls located?", ["Canada", "Chicago", "Russia", "Italy"], "Canada"),
 new Question("Which programming language is the best?", ["PHP", "C#", ".NET", "JAVASCRIPT"], "JAVASCRIPT")
];

let quiz = new Quiz(questions);
console.log(quiz);

populate();