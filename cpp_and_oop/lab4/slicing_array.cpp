#include <iostream>
#include <array>
#include <span>
using namespace std;

//https://cpp.sh/


int main()
{
  array<int, 8> arr;
  
  cout << "Enter 8 integers: ";
  for (int i = 0; i < arr.size(); i++)
  {
    cin >> arr[i];
  }

  int mid_index = (arr.size() - 1) / 2;

  auto first_sliced_half = span(arr).subspan(0, mid_index + 1);
  auto second_sliced_half = span(arr).subspan(mid_index + 1);

  for (int &num : first_sliced_half)
  {
    num = 1;
  }

  for (int &num : second_sliced_half)
  {
    num = 0;
  }

  cout << "Modified array: ";
  for (int &num : arr)
  {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
