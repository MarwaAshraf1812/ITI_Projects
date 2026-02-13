#include <iostream>
#include <string>
using namespace std;

int main()
{
  string s;
  cin >> s;
  int d;
  int n = s.length();

  int newwPass;

  while(true) {
    int charsLen = to_string(newwPass).length();
    if(newwPass == n + charsLen) {
      break;
    }
    newwPass = n + charsLen;
  }

  cout << s << newwPass;
  return 0;
}
