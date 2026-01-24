#include <bits/stdc++.h>
#include <iostream>
#include <vector>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n, m;
  cin >> n >> m;

  vector<bool> coveredSegments(m+1, false);

  for(int i=0; i <n; i++) {
    int l, r;
    cin >> l >> r;
    for(int j=l; j<=r; j++) {
      coveredSegments[j] = true;
    }
  }

  vector<int> missingSegments;

  for(int i=1; i <=m; i++) {
    if(!coveredSegments[i]) {
      missingSegments.push_back(i);
    }
  }


  cout << missingSegments.size() << endl;
  for(int seg: missingSegments) {
    cout << seg << " ";
  }
  cout << endl;
  return 0;
}