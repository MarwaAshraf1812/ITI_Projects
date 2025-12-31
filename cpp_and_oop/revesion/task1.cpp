#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int> &arr)
{
  int * start = &arr[0];
  int *end = &arr[arr.size() -1];
  while(start < end)
  {
    swap(*start, *end);
    start++;
    end--;
  }
}

int main()
{
  int size;
  cout << "Enter the size of the array: ";
  cin >> size;
  vector<int> arr(size);
  cout << "Enter the elements of the array: ";
  for (int i = 0; i < size; i++)
  {
    cin >> arr[i];
  }

  reverseArray(arr);

  cout << "Reversed array: ";
  for (const int &num : arr)
      cout << num << " ";
  cout << endl;

  return 0;
}
