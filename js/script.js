function submitAnswers(){
	var total = 5;
	var score = 0;

	//Get user input 
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//validation 
	
	for(i = 1; i <= total;i++){
		if(eval('q'+i)== null || eval('q'+i)==''){
		alert("You misssed Question "+ i);
		return false;
	}

	}
	// set Correct Answers
	var answers = ["b","a","d","b","d"];
	// check the answers 
	for(i = 1; i <= total;i++){
		if (eval('q'+i) == answers[i - 1]){
		score++;
	}
	}
	
	// Display results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+ score+'</span> out of <span>'+total+'</span></h3>';
	alert("You scored "+ score+" out of "+total);

	return false;

}