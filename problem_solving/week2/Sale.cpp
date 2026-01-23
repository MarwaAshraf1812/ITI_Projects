#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n, m, total = 0;
  cin >>n>>m;
  vector<int> prices(n);
  for(int i =0; i < n; i++){
    cin>>prices[i];
  }
  sort(prices.begin(), prices.end());

  for (int i =0; i <n && i < m; i++) {
    if(prices[i] < 0) {
      total += abs(prices[i]);
    } else {
      break;
    }
  }
  cout << total;
  return 0;
}