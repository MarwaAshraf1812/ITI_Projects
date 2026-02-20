#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int t, n;
  cin >> n >> t;
  vector<int> books(n);
  int l = 0, r = 0, sum = 0, maxBooks = 0;

  for (int i = 0; i < n; i++)
  {
    cin >> books[i];
  }

  for (r = 0; r < n; r++)
  {
    sum += books[r];
    while (sum > t)
    {
      sum -= books[l];
      l++;
    }
    maxBooks = max(maxBooks, r - l + 1);
  }

  cout << maxBooks << endl;
  return 0;
}