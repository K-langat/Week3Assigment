console.log("Testing")

$(document).ready(function() {
    $("img").click(function() {
      $(".design-showing").toggle();
      $(".design-hiden").toggle();
    });
    $("p").click(function(){
    $(".design-showing").toggle();
    $(".design-hiden").toggle();
    });
  });