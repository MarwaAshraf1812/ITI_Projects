$(document).ready(function() {
  $("#start").click(function() {
    $("#car").animate(
      {left: "400px"},
      {
        duration: 4000,

        step: function(nw) {
          let realLeft = parseInt(nw);
          $(".code").text('<img src="car.png" style="left: ' + realLeft + 'px"/>');
        }
      }
    )
  })
})