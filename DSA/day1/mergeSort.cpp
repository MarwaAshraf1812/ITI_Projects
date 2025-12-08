#include <iostream>
using namespace std;


void merge(int arr[], int leftFirst, int leftEnd,  int rightFirst, int rightEnd)
{
  int tempArr[50];
  int index =  leftFirst;
  int saveIndex =  leftFirst;

  while ((leftFirst <= leftEnd) && (rightFirst <= rightEnd))
  {
    if (arr[leftFirst] <= arr[rightFirst])
    {
      tempArr[index++] = arr[leftFirst++];
    }
    else
    {
      tempArr[index++] = arr[rightFirst++];
    }
  }

  while (leftFirst <= leftEnd)
  {
    tempArr[index++] = arr[leftFirst++];
  }

  while (rightFirst <= rightEnd)
  {
    tempArr[index++] = arr[rightFirst++];
  }

  for (int i = saveIndex; i <= rightEnd; i++)
  {
    arr[i] = tempArr[i];
  }
}

void mergeSort(int arr[], int left, int right)
{
  if (left < right)
  {
    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, mid + 1, right);
  }
}

int main()
{
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int size = sizeof(arr) / sizeof(arr[0]);
  mergeSort(arr, 0, size - 1);
  cout << "Sorted array: \n";
  for (int i = 0; i < size; i++)
    cout << arr[i] << " ";
  return 0;
}
