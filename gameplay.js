// // alert ("you are sane!");

// //on click of button: 

// // create if statement so that when it's true then runner 2 can go: <= Not sure if necessary
// // (Another way: using Jquery's .hasClass(), .addClass, or .removeClass) Will look into this if there's time.

// Create truth and Dare arrays

var truth = ["Have you ever had a threesome?", 
			"Have you ever let someone take the blame for something you did? Tell the story.", 
			"What\'s the most shocking thing your kids/friends/relatives don\'t know about you?",
			"If you could punch anyone in this room in the face and get away with it, who would it be?",
			"What do you suck at doing? If possible, do it.",
			"What was one embarassing thing your mom caught you doing?",
			"How many people have you boned?"];

var dare = ["Give your opponent a lap dance for 30 seconds.",
			"Take 1 article of clothing off.",
			"Take a body shot off of your opponent (any style).",
			"Sing a song from the 80\'s or 90\'s very loudly.",
			"Dance hardcore without music for 1 minute.",
			"Do a trust fall off a table.",
			"Order a drink with different accent.",
			"Do a beer waterfall.",
			"Take a shot with no hand.",
			"Recite a song lyric dramatically.",
			"Do a dramatic reading of ingredients list."];


//Modal for player 1:

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("button1");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


//function for ASK ME button
function changeQuestionTruth1(){
	
	//picking random number:
	var pickedNumber = Math.floor(Math.random() * truth.length);

	//use random number to get item from truth array
	randomTruth = truth[pickedNumber];

	//appending to modal body
	$('#questionContent').append("<br><br>" + randomTruth);

	//taking out the index # that's already been played.
	truth.splice(pickedNumber, 1);
}

//Function for DARE ME button
function changeQuestionDare1(){


	//picking random number
	var pickedNumber = Math.floor(Math.random() * dare.length);
	//use random number to get item from dare array
	randomDare = dare[pickedNumber];
	//appending to modal body
	$('#questionContent').append("<br><br>" + randomDare);

	//taking out the index number thats already played
	dare.splice(pickedNumber, 1);
}


// create a button click function for COMPLETED task:

let addMargin1 = 0;

$('#runner1Completed').on('click', function(){
	addMargin1 += 100;
//add addMargin to runner1's left margin in CSS:
	$('#runner1').css('margin-left', addMargin1 + ("px"));

//giving alert of completion or moving forward
	if(addMargin1 >= 1100) {
		alert("Congrats! You've sucessfully brought Hurricane Ashley home. Now let's relax and watch the News.");
		window.location.href='https://www.youtube.com/watch?v=xWQN5-Top6g'
	} else {
		alert("Yay! You advance a step. Now, it\'s Kevin\'s turn");
	}

//reseting modal body to "Choose Truth or Dare"
	$('#questionContent').text("Choose Truth or Dare:");

//Closing Modal automatically after completed button click
	$('#myModal').slideUp(500);

});

//

$('#runner1Failed').on('click', function(){

//img stays in place if addMargin = 0
	if(addMargin1 === 0) {
		$('#runner1').css('margin-left', 0 + ("px"));
	} else {

//subtract addMargin from runner1's left margin in CSS:

		addMargin1 -= 100;
		$('#runner1').css('margin-left', addMargin1 + ("px"));
	}

	if (addMargin1 == 0) {
		alert("You don't advance. Now, it\'s Kevin\'s turn");
	} else if (addMargin1 >= 10) {
		alert("You move back a step. Now, it\'s Kevin\'s turn");
	}

	$('#questionContent').text("Choose Truth or Dare:");

	$('#myModal').slideUp(500);

});


//Modal for player 2:

// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("button2");

// Get the <span> element that closes the modal
var span2 = document.getElementById("close2");

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

//function for ASK ME button
function changeQuestionTruth(){
	
	//picking random number:
	var pickedNumber = Math.floor(Math.random() * truth.length);

	//use random number to get item from truth array
	randomTruth = truth[pickedNumber];

	//appending to modal body
	$('#questionContent2').append("<br><br>" + randomTruth);

	//taking out the index # that's already been played.
	truth.splice(pickedNumber, 1);
}

//Function for DARE ME button
function changeQuestionDare(){


	//picking random number
	var pickedNumber = Math.floor(Math.random() * dare.length);
	//use random number to get item from dare array
	randomDare = dare[pickedNumber];
	//appending to modal body
	$('#questionContent2').append("<br><br>" + randomDare);

	//taking out the index number thats already played
	dare.splice(pickedNumber, 1);
}

// create button click function for COMPLETED task:

let addMargin2 = 0;

$('#runner2Completed').on('click', function(){
	addMargin2 += 100;

//add addMargin to runner2's left margin in CSS:
	$('#runner2').css('margin-left', addMargin2 + ("px"));
	if(addMargin2 >= 1100) {
		alert("Congrats! You brought Kevin back home!");
	} else {
		alert("Yay! You advance a step. Now, it\'s Ashley\'s turn");
	}

	$('#questionContent2').text("Choose Truth or Dare:");

	$('#myModal2').slideUp(500);
});

$('#runner2Failed').on('click', function(){

//img stays in place if addMargin = 0

	if(addMargin2 === 0) {
		$('#runner2').css('margin-left', 0 + ("px"));
	} else {

//subtract addMargin from runner2's left margin in CSS:
		addMargin2 -= 100;
		$('#runner2').css('margin-left', addMargin2 + ("px"));
	}

	if (addMargin2 === 0) {
		alert("You don't advance. Now, it\'s Ashley\'s turn");
	} else if (addMargin2 >= 10) {
		alert("You move back a step. Now, it\'s Ashley\'s turn");
	}

	$('#questionContent2').text("Choose Truth or Dare:");

	$('#myModal2').slideUp(500);

});


















