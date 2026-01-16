#include <iostream>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;
  bool stranger = false;
  int arr[6][6] = {0};


  for (int i = 0; i<n; i++) {
    int x, y;
    cin>>x >> y;

    arr[x][y] = 1;
    arr[y][x] = 1;
  }

  for (int i =1; i <=5; i++) {
    for(int j=i +1; j <=5; j++) {
      for(int k=j + 1; k <=5; k++) {
        bool friends = (arr[i][j] == 1 && arr[i][k] == 1 && arr[j][k] == 1);
        bool strangers = (arr[i][j] == 0 && arr[i][k] == 0 && arr[j][k] == 0);

        if (friends || strangers) {
          cout <<"WIN";
          return 0;
        }
      }
    }
  }
  cout << "FAIL";

  return 0;
}
