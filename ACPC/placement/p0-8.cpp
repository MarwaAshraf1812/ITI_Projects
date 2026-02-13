#include <iostream>
#include <string>
#include <set>
using namespace std;

int main()
{
  string year;
  cin >> year;

  set<char> distinct_year;

  for (char c : year)
  {
    distinct_year.insert(c);
  }

  if (distinct_year.size() <= 3)
  {
    cout << "YES";
  }
  else
  {
    cout << "NO";
  }
  return 0;
}
