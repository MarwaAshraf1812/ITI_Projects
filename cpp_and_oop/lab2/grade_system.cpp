#include <iostream>
  using namespace std;
int main()
{
  int grade;
  cout << "Enter your grade: ";
  cin >> grade;


  if (grade >=85 && grade <=100)
  {
    cout << "your grade is A" << endl;
  }
  else {
    if (grade >=75 && grade <=84)
    {
      cout << "your grade is B" << endl;
    }
    else {
      if (grade >=65 && grade <=74)
      {
        cout << "your grade is C" << endl;
      }
      else {
        if (grade >= 60 && grade <=64)
        {
          cout << "your grade is D" << endl;
        }
        else { 
          if (grade < 60) {
            cout << "your grade is F" << endl;
          }
        }
        }
    }
  }
  
  return 0;
}
