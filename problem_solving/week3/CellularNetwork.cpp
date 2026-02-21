#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  int n, m;
  cin >> n >> m;
  vector<int> cities(n);
  vector<int> towers(m);
  long long maxDistance = 0;
  int j = 0;

  for (int i = 0; i < n; i++)
  {
    cin >> cities[i];
  }
  for (int i = 0; i < m; i++)
  {
    cin >> towers[i];
  }

  for(int i=0; i<n; i++)
  {
    while(j < m-1 && abs(towers[j+1] - cities[i]) <= abs(towers[j] - cities[i]))
    {
      j++;
    }
    maxDistance = max(maxDistance, (long long)abs(towers[j] - cities[i]));
  }
  cout<<maxDistance<<endl;
  return 0;
}