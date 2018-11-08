// When the factButton is clicked...
// $("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of quotes in the mariahQuoteArray)
	// var number = Math.floor((Math.random() * mariahQuoteArray.length));
	// We display the fact from the mariahQuoteArray that is in the random position we just generated.
// 	$("#factText").text(mariahQuoteArray[number])
// })

// This array holds all of Mariah's quotes!
// var mariahQuoteArray = ["'Learn to be quiet enough to hear the genuine within yourself so that you can hear it in others'", "'Don't feel entitled to anything you didn't sweat and struggle for'", "'If things are too easy, life is a whole lot less interesting'", "You're not obligated to win. You're obligated to keep trying to do the best you can every day."]

$("#factButton").on("click", function() {
    var quoteUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';
  
  $.ajaxSetup({
    dataType: "json",
    url: quoteUrl,
    cache:false,
  });
  $.getJSON( quoteUrl, function(data) {
    $("#factText").text(data[0].content + " --- " + data[0].title)
  });
});

// $("#getQuote").on("click", function(){
//   var quoteUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';

// $.ajaxSetup({
//   dataType: "json",
//   url: quoteUrl,
//   cache:false,
// });

// $.getJSON( quoteUrl, function(data) {
//   $(".message").html(data[0].content + " - " + data[0].title)
// });
// });

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



$("#submit").on("click", function(event) {
  // var validations ={
  //   email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
  // };
  //   // Check all the input fields of type email. This function will handle all the email addresses validations
  //   $("input[type=email]").change( function(){
  //       // Set the regular expression to validate the email 
  //       validation = new RegExp(validations['email'][0]);
  //       // validate the email value against the regular expression
  //       if (!validation.test(this.value)){
  //           // If the validation fails then we show the custom error message
  //           this.setCustomValidity(validations['email'][1]);
  //           return false;
  //       } else {
  //           // This is really important. If the validation is successful you need to reset the custom error message
  //           this.setCustomValidity('');
  //       }
  //   });
  console.log("empty submission");
    // event.preventDefault();
    if ($.trim($("#name").val()) === "" || $.trim($("#email").val()) === "" || $.trim($("#message").val()) === "") {
        alert('Please fill the boxes before submit!!!');
    return false;
    }
  console.log("you clicked submit");
  event.preventDefault();
  alert("Thank you!");
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