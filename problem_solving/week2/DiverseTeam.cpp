#include <bits/stdc++.h>
#include <iostream>
#include <vector>
#include <set>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n, k;
  cin >> n >> k;
  vector<bool>ratings(n+1, false);
  vector<int>teamIndices;

  for(int i=1; i<=n; i++) {
    int current;
    cin>>current;
    if(!ratings[current]) {
      ratings[current] = true;
      teamIndices.push_back(i);
    }
  }
  if(teamIndices.size() >= k) {
    cout<<"YES" <<endl;;
    for(int j=0; j<k; j++) {
      cout<<teamIndices[j] <<endl;
    }
  } else {
    cout<<"NO"<<endl;
  }
  return 0;
}