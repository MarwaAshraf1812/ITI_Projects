#include <bits/stdc++.h>
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int main()
{
  int n;
  cin >> n;

  vector<int> worms(n);
  unordered_map<int, int> map;

  for (int i = 0; i < n; i++)
  {
    cin >> worms[i];
    map[worms[i]] = i;
  }

  for (int j = 0; j < n; j++) {
        for (int k = j + 1; k < n; k++) {
          int current = worms[j] + worms[k];

          if (map.count(current)) {
            int i = map[current];

            if (i != j && i != k) {
              cout << i + 1 << " " << j + 1 << " " << k + 1 << endl;
              return 0;
            }
          }
        }
      }
      cout << -1 << endl;
  return 0;
}
