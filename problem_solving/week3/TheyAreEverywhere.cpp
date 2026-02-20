#include <bits/stdc++.h>
#include <iostream>
#include <set>
#include <map>
#include <algorithm>
using namespace std;
int main()
{
  int n;
  cin >> n;
  string s;
  cin >> s;
  set<char>all_types(s.begin(), s.end());
  int total_types = all_types.size();

  map<char, int> counts;
  int l = 0, r = 0, types_found =0, minLen = n;

  for(r=0; r<n; r++)
  {
    if(counts[s[r]] == 0) types_found++;
    counts[s[r]]++;

    while(types_found == total_types) {
      minLen= min(minLen, r-l+1);
      counts[s[l]]--;
      if(counts[s[l]] ==0) types_found--;
      l++;
    }
  }
  cout << minLen << endl;
  return 0;
}