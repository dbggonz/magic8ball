$(document).ready(function(){

	var eightball = {};
var answer;
	eightball.listOfAnswers = ["yes", "no", "maybe", "ask later"];
	//listofAnswers(answers);
$("#answer").hide(answer);


// Making sense of the answer array
eightball.askQuestion = function(question) {

     var randomNumber = Math.random();
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
     var answer = this.listOfAnswers[randomIndex];
	 $("#answer").text(answer);
	 $("#answer").fadeIn(4000);
	 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
     console.log(question, answer);
};

// Prompt for Question
// eightball.question = function () {

//   	var question = prompt("Ask a yes/no question");

// };

// Click Ask Button for an answer from Eightball
var onClick = function() {

	$("#answer").hide();


	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#8ball").effect("shake");
	setTimeout(

    function() {
		var question = prompt("Ask a yes/no question: ");
       	eightball.askQuestion(question);
       }, 500);
 
};

$("#questionButton").click( onClick );
});
