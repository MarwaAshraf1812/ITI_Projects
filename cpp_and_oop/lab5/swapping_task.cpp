#include <iostream>
#include <array>
using namespace std;


void swap_by_address(int* x, int* y)
{
  int temp = *x;
  *x = *y;
  *y = temp;
  cout << "After swapping: " << *x << " " << *y << endl;
}


void swap_by_refrence(int& x, int& y)
{
  int temp = x;
  x = y;
  y = temp;
  cout << "After swapping: " << x << " " << y << endl;
}




int main()
{
  int a, b;
  cout << "Enter two integers: ";
  cin >> a >> b;

  cout << "Before swapping by address: " << a << " " << b << endl;
  swap_by_address(&a, &b);
  cout << "After swapping by address in main: " << a << " " << b << endl;

  cout << "Before swapping by reference: " << a << " " << b << endl;
  swap_by_refrence(a, b);
  cout << "After swapping by reference in main: " << a << " " << b << endl;
  return 0;
}
