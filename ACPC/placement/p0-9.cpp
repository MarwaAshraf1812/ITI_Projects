#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
  int h1, h2, h3;
  cin >> h1 >> h2 >> h3;

  cout << max(h1, max(h2, h3));
  return 0;
}
