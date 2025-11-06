#include <iostream>
#include <string>
#include <cstdlib>

using namespace std;

struct employee
{
  string name;
  double salary;
};

int main()
{
  system("clear");
  employee emp[5];

  cout << "\033[1;33m==== EMPLOYEE FORM ====\033[0m\n\n";

  cout << "\033[3;10HEnter employee name: \033[3;35H";
  cout << "\033[4;10HEnter employee salary: \033[4;35H";


  cout << "\033[3;35H\033[K"; 
  cin >> emp[0].name;

  cout << "\033[4;35H\033[K"; 
  cin >> emp[0].salary;


  cin.ignore();
  cout << "\033[5;10H----------------------------------------------\n";


  cout << "\n\n\033[1;32mEmployee data saved successfully!\033[0m\n\n";

  cout << "\033[1;32mEmployee data \033[0m\n\n";

    cout << "\033[0;36m " << "Name:  \033[0m" << emp[0].name << "\n";
    cout << "\033[0;36m " << "Salary:  \033[0m" << emp[0].salary << "\n";
    cout << "-----------------------\n";

  return 0;
}