class DocumentPrototype {
  constructor(header, footer, pages, text) {
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }

  clone() {
    return new Document(this.header, this.footer, this.pages, this.text);
  }
}

const baseDoc = new DocumentPrototype(
    "Header", 
    "Page1", 
    10, 
    "footer"
);

const doc1 = baseDoc.clone();
doc1.text = "This is the first document.";

const doc2 = baseDoc.clone();
doc2.text = "This is the second document.";

console.log(doc1);
console.log(doc2);