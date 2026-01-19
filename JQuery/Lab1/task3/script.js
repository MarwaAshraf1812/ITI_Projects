$(document).ready(function() {

  $("#rabbit").draggable({
    revert:"invalid",
    cursor:"move"
  });

  $("#hole").droppable({
    accept: "#rabbit",

    drop: function(event, ui) {
      ui.draggable.fadeOut(500);
    }
  });

})