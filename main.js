$(document).ready(function() {
    $("#dashbtn").click(function() {
      $("#home-collapse").toggleClass("show row d-grid").css({
        "align-items": "start",
        "justify-items": "stretch",
        "transition": "2s"
      }).fadeIn(2000);
  
      $("#direction", this).toggleClass("fa-chevron-down fa-chevron-right").css("transition", "2s");
    });
  });
  