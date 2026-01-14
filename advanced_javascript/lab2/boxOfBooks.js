function Book(title, chapters, author, pages, publisher, copies) {
  this.title = title;
  this.numofChapters = chapters;
  this.author = author;
  this.numofPages = pages;
  this.publisher = publisher;
  this.numofCopies = copies;
}

function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;

  this.content = [];
  this.volume = height * width * length;

  this.addBook = function (title, chapters, author, pages, publisher, copies) {
    
    for (let i = 0; i < this.content.length; i++) {
      if (title == this.content[i].title) {
        this.content[i].numofCopies += 1;
        console.log("Book exists, copies updated.");
        return;
      }
    }

    var newBook = new Book(title, chapters, author, pages, publisher, copies);
    this.content.push(newBook);
  };

  this.countBooks = function () {
    return this.content.length;
  };

  this.deleteBook = function (bookTitle) {
    for (let i = 0; i < this.content.length; i++) {
      if (bookTitle == this.content[i].title) {
        this.content.splice(i, 1);
        console.log("Book deleted: " + bookTitle);
        return;
      }
    }
    console.log("Book not found");
  };


  this.getNumOfCopies =function (title) {
    for (let i = 0; i < this.content.length; i++) {
      if (title == this.content[i].title) {
        console.log(this.content[i].numofCopies)
        return  this.content[i].numofCopies;
      }
    }
  }
}


try {
  var newBox = new Box(10, 20, 30, "Wood");

  newBox.addBook("JS Basics", 5, "Marwa", 200, "ITI", 1);
  console.log("Box's content:", newBox.content);


  newBox.addBook("JS Basics", 5, "Marwa", 200, "ITI");
  console.log("Number of copies:", newBox.getNumOfCopies("JS Basics"))

  newBox.addBook("Advanced Js", 5, "Marwa", 200, "ITI", 1);
  console.log("Box's content:", newBox.content);

  newBox.addBook("html", 5, "Marwa", 200, "ITI", 1);
  console.log("Box's content:", newBox.content);

  newBox.addBook("html", 5, "Marwa", 200, "ITI", );
  console.log("Box's content:", newBox.content);

  newBox.deleteBook("html");
  console.log("Box's content:", newBox.content);

} catch(e) {
  console.log(e.message);
}
