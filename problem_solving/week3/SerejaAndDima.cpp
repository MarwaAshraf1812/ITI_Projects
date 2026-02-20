#include <bits/stdc++.h>
#include <iostream>
#include <vector>
using namespace std;

int main()
{
  
  int n;
  cin >> n;
  int l = 0, r = n-1;

  int d = 0;
  int s = 0;
  int turn = 0;
  int maxCard =0;
  vector<int> cards(n);
  for(int i=0; i <n; i++) {
    cin>>cards[i];
  }

  while(l <= r) {
    if(cards[l] > cards[r]) {
      maxCard = cards[l];
      l++;
    }
    else {
      maxCard = cards[r];
      r--;
    }

    if(turn % 2 == 0) {
      s += maxCard;
    } else {
      d += maxCard;
    }
    turn++;
  }
  cout << s << " " << d << endl;
  return 0;
}