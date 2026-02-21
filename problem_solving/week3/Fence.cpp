#include <bits/stdc++.h>
#include <iostream>
#include <vector>

using namespace std;

int main()
{
  int n, k;
  cin >>n>>k;
  vector<int> heights(n);
  for (int i = 0; i < n; i++)
  {
    cin >> heights[i];
  }

  int current_sum = 0;
  int index = 1;

  for(int i=0; i<k; i++)
  {
    current_sum += heights[i]; 
  }
  int min_sum = current_sum;
  int inddex = 1;
  for(int i=k; i<n; i++)
  {
    current_sum = current_sum - heights[i-k] + heights[i];
    if (current_sum < min_sum)
    {
      min_sum = current_sum;
      index = i - k + 2;
    }
  }

  cout << index<<endl;
  return 0;
}