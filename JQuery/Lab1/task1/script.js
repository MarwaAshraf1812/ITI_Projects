$(document).ready(function () {
  
  $("nav > ul > li").on("click", function (e) {
    $(".content-box").hide();
    var btn = $(this).attr("id");
    var sectionId = "#" + btn + "Sec";
    $(sectionId).fadeIn();


    if (btn == "services") {
    $(this).find(".subMenu").slideToggle();
  } else {
    $(".subMenu").slideUp();
  }

    $(".submenu li").click(function(e){
      e.stopPropagation();
  });
  });


  var gallaryImgs = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
  ]
  var counter = 0;

  $("#nextBtn").click(function() {
    counter++;

    if(counter >= gallaryImgs.length) {
      counter = 0;
    }

    $("#slideImg").attr("src",  gallaryImgs[counter]);
  })

  $("#prevBtn").click(function() {
    counter--;

    if(counter < 0) {
      counter = gallaryImgs.length -1;
    }

    $("#slideImg").attr("src",  gallaryImgs[counter]);
  })


  $("#sendBtn").click(function() {
    var name = $("#userName").val();
    var email = $("#userEmail").val();
    var phone = $("#userPhone").val();
    var compText = $("#complainText").val();

    $("#previewName").text(name);
    $("#previewPhone").text(phone);
    $("#previewEmail").text(email);
    $("#previewText").text(compText);
    $("#formContainer").hide();
    $("#previewContainer").fadeIn();
  });


  $("#editBtn").click(function() {
    $("#previewContainer").hide();
    $("#formContainer").fadeIn();
  });

});
