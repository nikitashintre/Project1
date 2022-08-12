
function populate(){
	if(quiz.isEnded()) {
		showScores();
	}
	else{
		//show question
		var element =document.getElementById("question");
		element.innerHTML= quiz.getQuestionIndex().text;
		
		//show options
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length; i++){
			var element =document.getElementById("choice"+i);
			element.innerHTML = choices[i];
			//guess("btn" + i, choices[i]);

		}
		
		//quiz.guess
		showProgress();
	}
};

const op1 = document.getElementById('btn0');
	const op2 = document.getElementById('btn1');
	const op3 = document.getElementById('btn2');
	const op4 = document.getElementById('btn3');
	var selected = "";

op1.addEventListener("click", () => {
		op1.style.backgroundColor = "#581845";
		op2.style.backgroundColor = "#6600cc";
		op3.style.backgroundColor = "#6600cc";
		op4.style.backgroundColor = "#6600cc";
		var element =document.getElementById("choice0");
		selected = quiz.getQuestionIndex().choices[0];
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "#6600cc";
		op2.style.backgroundColor = "#581845";
		op3.style.backgroundColor = "#6600cc";
		op4.style.backgroundColor = "#6600cc";
		selected = quiz.getQuestionIndex().choices[1];
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "#6600cc";
		op2.style.backgroundColor = "#6600cc";
		op3.style.backgroundColor = "#581845";
		op4.style.backgroundColor = "#6600cc";
		selected = quiz.getQuestionIndex().choices[2];
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "#6600cc";
		op2.style.backgroundColor = "#6600cc";
		op3.style.backgroundColor = "#6600cc";
		op4.style.backgroundColor = "#581845";
		selected = quiz.getQuestionIndex().choices[3];
	})

/*function guess(id,ch){
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(ch);
		//quiz.questionIndex++;
		
		populate();
	}
}*/
   var button= document.getElementById("next");
   button.onclick=function(){
	   quiz.guess(selected);
	   populate();
   }

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element= document.getElementById("progress");
	element.innerHTML="Question" + currentQuestionNumber + "of" +quiz.questions.length;
	
}
function showScores(){
	 var gameOverHtml= "<h1>Result</h1>";
	 gameOverHtml += "<h2 id='score'>Your scores:"+ quiz.score +"</h2>";
	 var element = document.getElementById("quiz");
	 element.innerHTML = gameOverHtml;
}

var questions =[
	new Question("HTML stands for __________",
	["HyperText Markup Language",
	"HyperText Machine Language",
	"HyperText Marking Language",
	"HighText Marking Language"],"HyperText Markup Language"),

	new Question("What is the correct syntax of doctype in HTML5?",
["&lt/doctype html &gt",
"&lt doctype html &gt",
"&lt doctype html! &gt",
"&lt !doctype html &gt"],"&lt !doctype html &gt"),

new Question("Which of the following is used to read an HTML page and render it?",
["Web server",
"Web network",
"Web browser",
"Web matrix"],"Web browser"),

new Question("Which of the following tag is used for inserting the largest heading in HTML?",
["head",
"&lt h1 &gt",
"&lt h6 &gt",
"heading"],"&lt h1 &g"),

new Question("Which element is used to get highlighted text in HTML5?",
["&lt u &gt",
"&lt mark &gt",
"&lt highlight &gt",
"&lt b &gt"],"&lt mark &gt")




];
/*const next = document.getElementsByClassName('btn-lg');
next.addEventListener("click", () => {
	if(selected=="")
	{
			alert("pelese select option");
	}
	else{
	quiz.guess(selected);
	populate();
	}
}*/
var quiz = new Quiz(questions);
//var check = new Question(text, choices, answer)
populate();