#include <iostream>
using namespace std;
#include <vector>

int main()
{

  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;
  vector<int> nums(n);

  vector<int> evens;
  vector<int> odds;

  for(int i =0; i <n; i++) {
    cin>>nums[i];
    if (nums[i] % 2 == 0) {
      evens.push_back(i + 1);
    }
    if (nums[i] % 2 != 0) {
      odds.push_back(i + 1);
    } 
  }

  if(evens.size() == 1) {
    cout << evens[0];
  } else {
    cout << odds[0];
  }
  return 0;
}
