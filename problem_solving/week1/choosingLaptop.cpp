#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Laptop {
  int speed;
  int ram;
  int hdd;
  int cost;
  int id;
  bool isOutdated;
};

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;
  vector<Laptop> laptops(n);

  for(int i=0; i <n; i++) {
    cin>>laptops[i].speed >> laptops[i].ram >> laptops[i].hdd >> laptops[i].cost;
    laptops[i].id = i + 1;
    laptops[i].isOutdated = false;
  }

  for(int i=0; i <n; i++){
    for(int j=0; j<n; j++) {
      if (laptops[i].speed < laptops[j].speed &&
          laptops[i].ram < laptops[j].ram &&
          laptops[i].hdd < laptops[j].hdd &&
          laptops[i].cost < laptops[j].cost
        ) {
          laptops[i].isOutdated = true;
      }
    }
  }

  int minCost = 3000;
  int choosenId = -1;

  for(int i=0; i <n; i++) {
    if(!laptops[i].isOutdated) {
      if(laptops[i].cost < minCost) {
        minCost = laptops[i].cost;
        choosenId = laptops[i].id;
      }
    }
  }

  cout << choosenId << endl;
  return 0;
}
