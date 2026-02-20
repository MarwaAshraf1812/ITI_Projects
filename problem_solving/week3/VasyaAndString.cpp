#include <bits/stdc++.h>
#include <iostream>
#include <algorithm>
using namespace std;

int solve(char target, int n, int k, string s) {
  int l = 0, r = 0, changes = 0, maxStr = 0;
  for (r = 0; r < n; r++)
  {
    if(s[r] != target) changes++;
    while (changes > k)
    {
      if(s[l] != target) changes--;
      l++;
    }
    maxStr = max(maxStr, r-l+1);
  }
  return maxStr;

}

int main()
{
  int n, k;
  cin >> n >>k;
  string str;
  cin >> str;
  
  int maxStrLenA = solve('a', n, k, str);
  int maxStrLenB = solve('b', n, k, str);

  cout << max(maxStrLenA, maxStrLenB);

  return 0;
}