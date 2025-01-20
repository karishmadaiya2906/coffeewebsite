/*if(jQuery)
{                                     
  console.log('ready');
}
else {
  console.log('not ready');
}*/


/*$(document).ready(function(){
  $(".two").click(function(){
    $("#startAnimation").hide();
  })
});
$(document).ready(function(){
  $(".three").click(function(){
    $("#start").slideToggle(5000);
  })
});
$(document).ready(function(){
  $(".one").click(function(){
    $("#onee").fadeTo(1000,0.5,myFunction);
  })
});
$(document).ready (function(){m
  $(".hello").click(function(){
    $("#slidein").slideup(1000);
  })
})*/


$(document).ready(function() {
  // Event delegation for dynamically added li elements
  $('ul').on("click", "li", function(event) {
    $(this).html("clicked"); 
  });

  // Click event for div elements
  $("div").click(function() {
    // Assuming 'a' is a variable or a value you want to append
    var a = "some value"; // Replace this with your actual value
    $("ul").append("<li>" + a + "</li>");
  });
});





