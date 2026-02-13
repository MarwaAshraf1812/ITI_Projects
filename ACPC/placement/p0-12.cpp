#include <iostream>

using namespace std;

int main()
{
  int n;
  cin >> n;

  int t = n / 10;
  int o = n % 10;

  if (t % 2 == 0 && o % 2 == 0) cout << "YES";
  else cout << "NO";
  return 0;
}
