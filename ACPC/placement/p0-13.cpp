#include <iostream>

using namespace std;

int main()
{
  int t;
  cin >> t;

  while (t--)
  {
    long long x;
    cin >> x;

    long long ans = 0;
    long long powerBit = 1;

    while (x > 0)
    {
      if ((x & 1) == 0)
      {
        ans += powerBit;
      }

      x >>= 1;
      powerBit <<= 1;
    }
    cout << ans << endl;
  }
  return 0;
}
