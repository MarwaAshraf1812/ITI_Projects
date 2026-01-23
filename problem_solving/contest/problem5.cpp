#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  int n;
  cin >> n;

  int m; 
  cin >> m;

  vector <int> cities(n);
  vector <int> towers(m);

  for(int i = 0; i < n; i++) {
    cin >> cities[i];
  }

  for(int i = 0; i < m; i++) {
    cin >> towers[i];
  }


  long long totalDistance = 0;
  return 0;
}
