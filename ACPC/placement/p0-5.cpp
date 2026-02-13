#include <iostream>
using namespace std;

int main()
{
  int a, h;
  cin >> a >> h;

  if (a > h)
    cout << "A";
  else if (h > a)
  {
    cout << "H";
  }
  else
  {
    cout << "D";
  }
  return 0;
}
