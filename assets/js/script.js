// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of quotes in the mariahQuoteArray)
	var number = Math.floor((Math.random() * mariahQuoteArray.length));
	// We display the fact from the mariahQuoteArray that is in the random position we just generated.
	$("#factText").text(mariahQuoteArray[number])
})

// This array holds all of Mariah's quotes!
var mariahQuoteArray = ["'Learn to be quiet enough to hear the genuine within yourself so that you can hear it in others'", "'Don't feel entitled to anything you didn't sweat and struggle for'", "'If things are too easy, life is a whole lot less interesting'", "You're not obligated to win. You're obligated to keep trying to do the best you can every day."]

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUB-tglFxCYsEiSmErxQPKjY72G8ILTUE",
    authDomain: "fir-bbd58.firebaseapp.com",
    databaseURL: "https://fir-bbd58.firebaseio.com",
    projectId: "fir-bbd58",
    storageBucket: "fir-bbd58.appspot.com",
    messagingSenderId: "1012219301290"
  };
  
  firebase.initializeApp(config);

var database = firebase.database();
// $('#submit').on("click",function() 
// {
//     console.log("empty submission");
//     event.preventDefault();
//     if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#message").val()) === "") {
//         alert('Please fill the boxes before submit!!!');
//     return false;
//     }
// });

$("#submit").on("click", function(event) {
  console.log("empty submission");
    event.preventDefault();
    if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#message").val()) === "") {
        alert('Please fill the boxes before submit!!!');
    return false;
    }
  console.log("you clicked submit");
  event.preventDefault();
  var name = $("#name")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var message = $("#message")
    .val()
    .trim();
  var newContact = {
    name: name,
    email: email,
    message: message
  };
  console.log(newContact);

  database.ref().push(newContact);
  console.log(newContact.name);
  console.log(newContact.email);
  console.log(newContact.message);

  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
});


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