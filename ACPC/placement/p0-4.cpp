#include <iostream>
using namespace std;
#include <vector>

int main()
{
  int n;
  cin>>n;
  string s;
  cin >> s;

  int maxP =0;

  vector<int> freqP(26,  0);
  for (char c: s) {
    freqP[ c - 'a'] ++;
  }


  for(int i=0; i<26; i++) {
    maxP += freqP[i] /2;
  }

  cout << maxP;

  return 0;
}
