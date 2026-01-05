#include <bits/stdc++.h>
#include <iostream>
using namespace std;


int main()
{
  int limakWeight = 0;
  int bobWeight = 0;
  int years = 0;

  cin >> limakWeight;
  cin >> bobWeight;
  


  while (limakWeight <= bobWeight) {
    bobWeight = bobWeight * 2;
    limakWeight = limakWeight * 3;
    years++;
  }

  cout << years << endl;
  return 0;
}

