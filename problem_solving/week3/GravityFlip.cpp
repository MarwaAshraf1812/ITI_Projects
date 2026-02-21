#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{

  int n;
  cin>> n;

  vector<int> gravityNums(n);
  for (int i = 0; i < n; i++)
  {
    cin >> gravityNums[i];
  }

  sort(gravityNums.begin(), gravityNums.end());

  for (int i = 0; i < n; i++)
  {
    cout << gravityNums[i] << " ";
  }
  cout << endl;
  return 0;
}