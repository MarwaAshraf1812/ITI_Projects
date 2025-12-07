#include <iostream>
using namespace std;

int sortedSeqSearch(int arr[], int size, int target)
{
  for (int i = 0; i < size; i++)
  {
    if (arr[i] ==  target)
    {
      return i;
    }
    else if (arr[i] > target)
    {
      break;
    }
  }
  return -1;
}

int main()
{
  int arr[] = {11, 12, 22, 25, 34, 64, 90};
  int size = sizeof(arr) / sizeof(arr[0]);
  int target = 25;
  int result = sortedSeqSearch(arr, size, target);

  if (result != -1)
    cout << "Element found at index: " << result << endl;
  else
    cout << "Element not found in the array." << endl;
  
  return 0;
}
