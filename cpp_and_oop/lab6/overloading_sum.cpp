#include <iostream>
using namespace std;

int sum (int a, int b)
{
  return a + b;
}


double sum (double a, double b)
{
  return a + b;
}

double sum (double a, int b)
{
  return a + b;
}

double sum (int a, double b)
{
  return a + b;
}


int main()
{
  int a = 5, b = 10;
  double x = 5.5, y = 10.5;

  cout << "Sum of integers: " << sum(a, b) << endl;
  cout << "Sum of doubles: " << sum(x, y) << endl;
  cout << "Sum of double and integer: " << sum(a, y) << endl;
  
  return 0;
}
