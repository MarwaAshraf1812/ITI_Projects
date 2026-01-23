#include <bits/stdc++.h>
#include <iostream>
#include <string>
#include <set>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n, m;
  cin >>n >> m;
  long long totalTime = 0;
  int current_position = 1;
  for (int i = 0; i < m; i++) {
    int target;
    cin >> target;
    if(target >= current_position) {
      totalTime += target - current_position;
    } else {
      totalTime += (n - current_position) + target;
    }
    current_position = target;
  }

  cout << totalTime << endl;
  return 0;
}