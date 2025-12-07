#include <iostream>
using namespace std;

void swap(int &a, int &b)
{
  int temp = a;
  a = b;
  b = temp;
}

void stoogeSearch(int arr[], int low, int high)
{
  if (low >= high)
    return;

  if (arr[low] > arr[high])
    swap(arr[low], arr[high]);

  if (high - low + 1 > 2)
  {
    int t = (high - low + 1) / 3;
    stoogeSearch(arr, low, high - t);
    stoogeSearch(arr, low + t, high);
    stoogeSearch(arr, low, high - t);
  }
}

int main()
{
  int arr[] = {2, 4, 5, 3, 1};
  int size = sizeof(arr) / sizeof(arr[0]);
  stoogeSearch(arr, 0, size - 1);

  cout << "Sorted array: \n";
  for (int i = 0; i < size; i++)
    cout << arr[i] << " ";


  return 0;
}
