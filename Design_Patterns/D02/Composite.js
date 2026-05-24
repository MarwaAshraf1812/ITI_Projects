// Composite Pattern: Composes objects into tree structures to represent part-whole hierarchies.
// It lets clients treat individual objects (Leaf) and compositions (Composite) uniformly.

// Layer 1: The Component (Interface) 
// Defines the common operations for both simple and complex objects.
class Component {
  getPages() {}
  showHirerachy() {}
}

// Layer 2: The Leaf 
// Represents the simple objects that have no children.
class Book extends Component {
  constructor(title, pages) {
    super();
    this.title = title;
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }

  showHirerachy(indent = 0) {
    return ' '.repeat(indent) + " " + this.title; 
  }
}


// Layer 3: The Composite 
// Represents complex objects that may have children (Leaves or other Composites).
class Box extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

   getPages() {
    let totalPages = 0; 
    for(let child of this.children) {
      totalPages += child.getPages(); 
    }
    return totalPages;
   }

   showHirerachy(indent = 0) {
    let hierarchy = ' '.repeat(indent) + " " + this.name + '\n';
    for(let child of this.children) {
      hierarchy += child.showHirerachy(indent + 2) + '\n';
    }
    return hierarchy;
   } 
}

// client code 
const jsBook = new Book("js book", 300);
const designPatternsBook = new Book("design patterns book", 250);
const solidPrinciplesBook = new Book("solid principles book", 150);

const programmingBooksBox = new Box("programming books box");
programmingBooksBox.add(jsBook);
programmingBooksBox.add(designPatternsBook);
programmingBooksBox.add(solidPrinciplesBook);

console.log(programmingBooksBox.getPages());
console.log(programmingBooksBox.showHirerachy());

const mainBigBox = new Box("main big box");
mainBigBox.add(jsBook);
mainBigBox.add(designPatternsBook);
mainBigBox.add(solidPrinciplesBook);

console.log(mainBigBox.getPages());
console.log(mainBigBox.showHirerachy());