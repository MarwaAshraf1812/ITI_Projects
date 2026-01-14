#include <iostream>
using namespace std;
#include <set>

int main()
{

  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;
  if (n < 26)
  {
    cout << "NO";
    return 0;
  }

  string str;
  cin>>str;

  set<char>letters;

  for(int i=0; i <n; i++) {
    letters.insert(tolower(str[i]));
  }

  if(letters.size() == 26) {
    cout << "YES";
  } else {
    cout << "NO";
  }
  
  return 0;
}
