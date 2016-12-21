$(document).ready(function() {

  $("#toggleMenu").on("click", function () {
      $(".row ul").slideToggle("slow");
  });

  $("#menuOut").on("click", function () {
      $(".row ul").slideToggle("slow");
  });

});
