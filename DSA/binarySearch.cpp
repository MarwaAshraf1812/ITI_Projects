#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right,  int target)
{

  while (left <= right)
  {
    int mid = (left + right) / 2;
    if (arr[mid] == target)
      return mid;

    if (arr[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  return -1;
}


int recBinarySearch(int arr[], int left, int right, int target)
{
  if (left > right)
    return -1;

  int mid = (left + right) / 2;
  if (arr[mid] == target)
    return mid;

  if (arr[mid] < target)
    return recBinarySearch(arr, mid + 1, right, target);
  else
    return recBinarySearch(arr, left, mid - 1, target);

  return -1;
}

int main()
{
  int arr[] = {5, 10, 15, 20, 25};
  int left = 0;
  int right = sizeof(arr) / sizeof(arr[0]) - 1;


  int target1 = 15;
  int target2 = 5;
  int result1 = binarySearch(arr, left, right, target1);
  int result2 = recBinarySearch(arr, left, right, target2);

  cout << "Iterative Binary Search: " << result1 <<endl;
  cout << "recursive Binary Search: " << result2 <<endl;
  return 0;
}
