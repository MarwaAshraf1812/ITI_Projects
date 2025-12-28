let message = prompt("Enter a message");

  for (var i = 1; i <= 6; i++) {
    document.write(
      "<h" + i + ">"+ message + "</h" + i + ">",
    )
  }
