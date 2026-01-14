#include <iostream>
using namespace std;
#include <vector>

// int main()
// {
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);

//   int n;
//   cin >> n;
//   int solvedProblems = 0;

//   vector<vector<int>> teams(n, vector<int>(3));
//   for(int i = 0; i < n; i++) {
//     int suredQuestions = 0;
//     for(int j = 0; j <3; j++) {
//       cin >> teams[i][j];
//       if(teams[i][j] == 1) {
//         suredQuestions += 1;
//       }
//     }
//     if (suredQuestions >= 2) {
//       solvedProblems+=1;
//     }
//   }

//   cout << solvedProblems;

//   return 0;
// }

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;
  int solvedProblems = 0;
  int first, second, third;

  for(int i =0; i <n; i++ ) {
    cin >> first >> second >> third;

    if((first + second + third) >= 2) {
      solvedProblems +=1;
    }
  }

  cout << solvedProblems;

  return 0;
}
