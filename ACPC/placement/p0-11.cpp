#include <iostream>
using namespace std;

const long long  MOD = 10000007;
int main()
{
  int t;
  cin >>t;
  while(t--) {
    long long n;
    cin >>n;

    if (n >= MOD) {
      n =  MOD - 1;
    }

    long long fact = 1;
    long long sum = 1;

    for (long long i =1; i<=n; i++) {
      fact = (fact * i) % MOD;
      sum= (sum + fact) % MOD;
    }

    cout << sum << endl;
  }
  return 0;
}
