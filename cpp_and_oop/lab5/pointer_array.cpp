#include <iostream>
using namespace std;

int main()
{
  const int SIZE = 4;
  int arr[SIZE];
  int *ptrCurr;

  ptrCurr = arr;

  cout << "Enter " << SIZE << " integers: " << endl;

  for (int i = 0; i < SIZE; i++)
  {
    cout << "Enter Number " << (i + 1) << ": ";
    cin >> *ptrCurr;
    ptrCurr++;
  }

  cout << "\nThe numbers you entered are: " << endl;
  ptrCurr = arr;
  for (int i = 0; i < SIZE; i++)
  {
    cout << *ptrCurr << " ";
    ptrCurr++;
  }
  cout << endl;

  return 0;
}
