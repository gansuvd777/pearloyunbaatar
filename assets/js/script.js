$(document).ready(function(){
    $(".img-thumbnail").mouserover(function(){
        $(this).attr("src", "coder.jpg");
    })
})

$("img").mouseover(function(){
    $(this).attr("src", imgList[ $(this).attr("id") ]["over"]);
  }

  $("img").mouseout(function(){
    $(this).attr("src", imgList[ $(this).attr("id") ]["out"]);
  }