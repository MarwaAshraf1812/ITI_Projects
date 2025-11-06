#include <iostream>
using namespace std;

int main()
{
  system("clear");
  string emp_name;
  double emp_salary;

  cout << "\033[1;33m==== EMPLOYEE FORM ====\033[0m\n\n";
  cout << "\033[3;10HEnter employee name: \033[3;35H";
  cin >> emp_name;

  cout << "\033[3;10HEnter employee salary: \033[3;35H";
  cin >> emp_salary;

  cout << "\033[1;32mEmployee data saved successfully!\033[0m\n\n";



    cout << "\033[1;32mEmplyee data \033[0m\n\n";
    cout << "Name: " << emp_name << "\n";
    cout << "Salary: " << emp_salary << "\n";

  return 0;
}
