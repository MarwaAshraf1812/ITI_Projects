#include <bits/stdc++.h>
#include <iostream>
#include <vector>

using namespace std;

int main()
{
  int n , h;
  cin >> n >> h;
  vector<int> friends(n);
  int sum = 0;
  for (int i = 0; i < n; i++)
  {
    cin >> friends[i];
  }
  for (int i = 0; i < n; i++)
  {
    if (friends[i] <= h) {
      sum++;
    } else {
      sum+= 2;
    }
  }
  cout << sum<<endl;
  return 0;
}