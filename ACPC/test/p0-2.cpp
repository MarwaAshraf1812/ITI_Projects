#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
  int t, n, a, b, c;
  cin >> t;

  while (t--)
  {
    cin >> n >> a >> b >> c;
    if ((a + b + c) > n)
  {
    cout << -1;
  }
    int maxColor = max(a, max(b, c));
    if(maxColor > (n-maxColor) + 1) {
      cout << -1 << endl;
      continue;
    }
  }

  return 0;
}
