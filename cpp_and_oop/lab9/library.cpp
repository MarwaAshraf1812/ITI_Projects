#include <iostream>
#include <string>
#include <vector>
using namespace std;


//part
class Author {
  public:
    string name;
    string nationality;
    Author(string n, string nat) : name(n), nationality(nat) {
      cout << "Author " << name << " Added." << endl;
    }

    string getName() { return name;}
    string getNationality() { return nationality;}
};
/*
Composition between book and author
Book يمتلك Author على ال
Heap ويشيلها في الـ destructor. لو الكتاب اتشال، المؤلف كمان اتشال.*/
class Book {
  public:
    string title;
    string year;
    Author* author;

    Book(string t, string y, string aName, string aNationality) : title(t), year(y), author(new Author(aName, aNationality))
    {
      cout << "Book " << title << " Added." << endl;
    }

    // copy constructor
    Book(const Book& other) : title(other.title), year(other.year) {
      /**
       * b2 = b1;
       * new object from existing object
       * */
      this->author = new Author(*other.author);
      cout << "Book " << title << " Copied." << endl;
    }

    // copy assignment operator
    Book& operator=(const Book& other) {
      /**
       * b3 = b1;
       * existing object from existing object
       */
      if(this != &other) {
        title = other.title;
        year = other.year;


        delete this->author;
        this->author = new Author(*other.author);
        cout << "Book " << title << " Assigned." << endl;
      }
      return *this;
    }


    void getAuthorName() {
      cout << "Author Name: " << author->name << endl;
    }

    void getBookTitle() {
      cout << "Book Title: " << title << endl;
    }

    ~Book() {
      cout << "Book " << title << " Removed." << endl;
      delete author;
    }
};
// Association between member and book
/*Member عنده Book* في vector. الكتاب موجود حتى لو العضو مش مستعيره.
*/
class Member {
  public:
    string name;
    vector<Book*> books;

    Member(string n) : name(n) {
      cout << "Member " << name << " Added." << endl;
    }


    void borrowBook(Book* b) {
      books.push_back(b);
      cout << "Member " << name << " borrowed book " << b->title << endl;
    }

    void listBorrowedBooks() {
      if (books.empty()) {
        cout << "Member " << name << " has not borrowed any books." << endl;
        return;
      }
      cout << "Books borrowed by " << name << ":" << endl;
      for(auto b : books) {
        cout << "- " << b->title << endl;
      }
    }

    ~Member() {
      cout << "Member " << name << " Removed." << endl;
    }
};

// Aggregation between Library and Book, Member
/* Library عنده Book* وMember*. المكتبة تعرفهم
، لكن مش مسؤولة عن إنشاءهم أو حذفهم (في هذا البرنامج destructor فاضي).
*/
class Library {

  vector<Book*> books;
  vector<Member*> members;

  public:
    void addBook(Book * b) {
      books.push_back(b);
    }

    void addMember(Member * m) {
      members.push_back(m);
    }

    void showLibraryContents() {
      cout << "Library Contents:" << endl;
      cout << "Books:" << endl;
      for(auto b : books) {
        cout << "- " << b->title << " by " << b->author->name << endl;
      }
      cout << "Members:" << endl;
      for(auto m : members) {
        cout << "- " << m->name << endl;
      }
    }

    ~Library() {}
};

int main()
{
    cout << "--- Step 1: Create Books ---" << endl;
    //static objs && dynamic obj of authors inside books
    Book b1("1984", "1949", "George", "British");
    Book b2("Brave New World", "1932", "Aldous", "British");
    Book b3("Fahrenheit 451", "1953", "Ray", "American");
    cout << "=======================================\n";



    cout << "--- Step 2: Copy Constructor Test ---" << endl;
    Book b4 = b1; // copy constructor
    cout << "[Check Titles] b1: " << b1.title << ", b3: " << b3.title << endl;
    cout << "[Check Authors] b1: " << b1.author->name << ", b3: " << b3.author->name << endl << endl;

    cout << "--- Step 3: Copy Assignment Operator Test ---" << endl;
    b2 = b1; // copy assignment
    cout << "[Check Titles] b1: " << b1.title << ", b2: " << b2.title << endl;
    cout << "[Check Authors] b1: " << b1.author->name << ", b2: " << b2.author->name << endl << endl;

    Library myLib;
    myLib.addBook(&b1);
    myLib.addBook(&b2);
    myLib.addBook(&b3);

    cout << "\n=== Step 1: Register Members ===" << endl;
    Member m1("Ahmed");
    Member m2("Sara");

    myLib.addMember(&m1);
    myLib.addMember(&m2);

    cout << "\n=== Step 2: Members Borrow Books ===" << endl;
    m1.borrowBook(&b1);
    m2.borrowBook(&b3);

    cout << "\n=== Step 3: List Borrowed Books ===" << endl;
    m1.listBorrowedBooks();
    m2.listBorrowedBooks();
    cout << "\n=== Library Contents ===" << endl;
    myLib.showLibraryContents();

    // Add members to library logic
    myLib.addMember(&m1);
    myLib.addMember(&m2);
  return 0;
}
