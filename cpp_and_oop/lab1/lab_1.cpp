#include <iostream>
using namespace std;

int main()
{
  // Task 1: Write a program that prints your name, age, and city using std::cout.
  string name, city;
  int age;
  cout << "Enter your name: \n";
  cin >> name ;
  cout << "Enter your age: \n";
  cin >> age ; 
  cout << "Enter your city: \n";
  cin >> city;
  cout << "Hello " << name <<", you are " <<age<< " years old and live in " << city << "\n";

  //Task 2: Write a program that reads two integers as input and displays their sum, difference, and average.
  int number1, number2;
  cout << "Enter number 1: ";
  cin >> number1;
  cout << "Enter number 2: ";
  cin >> number2;
  cout << "The sum is = " << number1 + number2 << "\n";
  cout << "The difference is = " << number1 - number2 << "\n";
  cout << "The average is = " << (number1 + number2) / 2 << "\n";


  //  Task3 : Write a program that takes a decimal number and displays its hexadecimal and octal values.
  int num;
  cout << "Enter a decimal number: ";
  cin >> num;
  // oct, hex are manipulators (change the base of number representation)
  cout << "The octal value is: " << oct << num << "\n";
  cout << "The hexadecimal value is: " << hex << num << "\n";

  // Task 4: Write a program that reads a character and displays its ASCII value.
  char character;
  cout << "Enter a character: ";
  cin >> character;
  int ascii_val = int(character);
  cout << "The ASCII value of " << character << " is: " << ascii_val << "\n";

  return 0;
}