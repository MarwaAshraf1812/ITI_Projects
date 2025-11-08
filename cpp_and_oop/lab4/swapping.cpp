#include <iostream>
#include <array>
using namespace std;

void swap(int& num1 , int& num2)
{
  int temp = num1;
  num1 = num2;
  num2 = temp;
}

int main()
{
  /*array<int, 6> arr = {10, 20, 30, 40, 50, 60};

  cout << "Original array: ";
  for (int &num : arr)
  {
    cout << num << " ";
  }
  cout << endl;

  cout << "Swapping first and last elements..." << endl;


  
  swap(arr[0], arr[arr.size() - 1]);
  
  cout << "Array after swapping: ";
  for (int &num : arr)
  {
    cout << num << " ";
  }
  cout << endl;
  */

  int x,y;
  cout << "Enter two integers: ";
  cin >> x >> y;
  cout << "Before swapping: ";
  cout << x << " " << y << endl;
  
  swap(x,y);

  cout << "After swapping: ";
  cout << x << " " << y << endl;

  return 0;
}
