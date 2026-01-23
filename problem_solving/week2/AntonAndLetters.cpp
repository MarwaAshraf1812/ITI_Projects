#include <bits/stdc++.h>
#include <iostream>
#include <string>
#include <set>
using namespace std;

int main()
{
  string str;
  getline(cin, str);
  set<char> distinctLetters;

  for(char c: str) {
    if(c >= 'a' && c <='z') {
      distinctLetters.insert(c);
    }
  }
  cout<<distinctLetters.size() <<endl;
  return 0;
}