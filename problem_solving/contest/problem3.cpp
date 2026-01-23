#include <bits/stdc++.h>
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main()
{
  int coinsNum;
  cin >> coinsNum;

  vector<int> count(101, 0);
  for (int i = 0; i < coinsNum; i++)
  {
    int value;
    cin >> value;
    count[value]++;
  };

  int maxPockets = *max_element(count.begin(), count.end());

  cout << maxPockets << endl;

  return 0;
}
