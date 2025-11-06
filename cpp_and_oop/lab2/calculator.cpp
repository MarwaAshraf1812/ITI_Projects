#include <iostream>
using namespace std;

int main()
{
  cout << "Simple Calculator" << endl;

  char wantToContinue;
  do
  {

  int number1, number2;
  char option;
  cout << "Enter number 1: ";
  cin >> number1;
  cout << "Enter number 2: ";
  cin >> number2;


  cout << "Enter an option:\n";
  cout << "a: Add\nb: Subtract\nc: Multiply\nd: Divide\ne: Exit\n";
  cout << "Your choice: ";
  cin >> option;

  switch (option) {
  case 'a':
      cout << "Result: " << number1 + number2 << endl;
    break;
  case 'b':
    cout << "Result: " << number1 - number2 << endl;
    break;
  case 'c':
    cout << "Result: " << number1 * number2 << endl;
    break;
  case 'd':
    if (number2 != 0)
      cout << "Result: " << number1 / number2 << endl;
    else
      cout << "Error: Division by zero" << endl;
    break;
  case 'E':
  case 'e':
    
    cout << "Exiting the calculator." << endl;
    return 0;
  default:
    cout << "Invalid option! Please try again." << endl;
    break;
  }

  cout << "\nDo you want to perform another operation? (Y to continue / E to exit): ";
  cin >> wantToContinue;
  
  if (wantToContinue == 'E' || wantToContinue == 'e') {
    cout << "Exiting the calculator." << endl;
    break;
  }

} while (wantToContinue != 'e' || wantToContinue != 'E');

return 0;
}
