#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
  int t;
  cin >> t;

  while (t--)
  {
    long double xa, ya, xg, yg, s;
    cin >> xa >> ya >> xg >> yg >> s;

    long double dx = xg - xa;
    long double dy = yg - ya;
    long double d = sqrt(dx * dx + dy * dy);
    long double R = sqrt(s);
    long double result = pow(R - d, 2)/2.0;
  
    cout << fixed << setprecision(6) << result << endl;
  }
  return 0;
}
