#include <bits/stdc++.h>
#include <iostream>
#include <string>
#include <set>
using namespace std;


int main()
{
  string username;
  cin >> username;
  if (username.empty())
  {
    return -1;
  }
  set<char> distinctChars;

  for(char cha : username) {
    distinctChars.insert(cha);
  }

  if (distinctChars.size() % 2 == 0) {
    cout << "CHAT WITH HER!";
  } else {
        cout << "IGNORE HIM!";
    }
  
  return 0;
}

