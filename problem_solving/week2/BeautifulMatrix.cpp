#include <bits/stdc++.h>
#include <iostream>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  int count = 0;
  int value;
  for(int i=0; i<5; i++) {
    for(int j=0; j<5; j++) {
      cin>>value;
      if(value == 1) {
        count = abs(i - 2) + abs(j - 2);
      }
    }
  }
  cout<<count <<endl;
  return 0;
}