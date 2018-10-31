// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of quotes in the mariahQuoteArray)
	var number = Math.floor((Math.random() * mariahQuoteArray.length));
	// We display the fact from the mariahQuoteArray that is in the random position we just generated.
	$("#factText").text(mariahQuoteArray[number])
})

// This array holds all of Mariah's quotes!
var mariahQuoteArray = ["'Learn to be quiet enough to hear the genuine within yourself so that you can hear it in others'", "'Don't feel entitled to anything you didn't sweat and struggle for'", "'If things are too easy, life is a whole lot less interesting'", "You're not obligated to win. You're obligated to keep trying to do the best you can every day."]



// $(document).ready(function(){
//     $(".img-thumbnail").mouserover(function(){
//         $(this).attr("src", "coder.jpg");
//     })
// })

// $("img").mouseover(function(){
//     $(this).attr("src", imgList[ $(this).attr("id") ]["over"]);
//   }

//   $("img").mouseout(function(){
//     $(this).attr("src", imgList[ $(this).attr("id") ]["out"]);
//   }