#include <iostream>
#include <array>
#include <string>
#include <unistd.h>
#include <termios.h>

struct employee;

using namespace std;

void display_employee(const array<employee, 10> &employees, int size);
void display_employee_by_index(const array<employee, 10> &employees, int size);
void add_new_employee(array<employee, 10> &employees, int &size);
void print_menu (const string menu_options[], int options_size, int user_choice);

struct employee
{
  string name;
  float salary;
};

char getch()
{
  char buf = 0;
  struct termios old = {0};
  if (tcgetattr(0, &old) < 0)
    perror("tcsetattr()");
  old.c_lflag &= ~ICANON;
  old.c_lflag &= ~ECHO;
  if (tcsetattr(0, TCSANOW, &old) < 0)
    perror("tcsetattr ICANON");
  if (read(0, &buf, 1) < 0)
    perror("read()");
  old.c_lflag |= ICANON;
  old.c_lflag |= ECHO;
  if (tcsetattr(0, TCSADRAIN, &old) < 0)
    perror("tcsetattr ~ICANON");
  return buf;
}

int main()
{
    array<employee, 10> employees = { {
      {"Ahmed", 50000.0},
      {"Joud", 60000.0},
      {"Ilias", 55000.0},
      {"Marwa", 70000.0},
      {"Maryam", 48000.0},
      {"Karma", 53000.0},
      {"Alice", 59000.0},
      {"Judy", 61000.0}
    } };

  int employee_count = employees.size();

  string menu_options[] = {"New", "Display", "Display All", "Exit"};
  int options_size = 4;
  int user_choice = 0;
  char pressed_key;

  while (true)
  {
    system("clear");
    cout << "\033[1;33m==== MAIN MENU ====\033[0m\n\n";

    print_menu(menu_options, options_size, user_choice);

    pressed_key = getch();

    if (pressed_key == '\033')
    {
      getch();
      pressed_key = getch();
      if (pressed_key == 'A')
      {
        user_choice--;
        if (user_choice < 0)
          user_choice = options_size - 1;
      }
      else if (pressed_key == 'B')
      {
        user_choice++;
        if (user_choice >= options_size)
          user_choice = 0;
      }
    }
    else if (pressed_key == '\n')
    {
      system("clear");
      if (menu_options[user_choice] == "Exit")
      {
        cout << "Exiting the program. Goodbye!\n";
        break;
      }
      else
      {
        if (menu_options[user_choice] == "New")
        {
          add_new_employee(employees, employee_count);
        }
        else
        {
          if (menu_options[user_choice] == "Display")
          {
            display_employee_by_index(employees, employee_count);
          }
          else
          {
            if (menu_options[user_choice] == "Display All")
            {
              display_employee(employees, employee_count);
            }
            else
            {
              cout << "Invalid Option\n";
            }
          }
        }
      }
      cout << "\nPress any key to return to the menu...";
      getch();
    }
  }

  return 0;
}

void display_employee(const array<employee, 10> &employees, int size)
{
  cout << "\033[34m====  Employee List ====\033[0m\n\n";

  for (int i = 0; i < size; i++)
  {
    if (employees[i].name.empty()) continue;
    cout << "\033[0;36m " << "Name:  \033[0m" << employees[i].name ;
    cout << "\033[40G";
    cout << "\033[0;36m" << "Salary:   \033[0m" << employees[i].salary << "\n";
    cout << "-----------------------\n";
  }
}

void display_employee_by_index(const array<employee, 10> &employees, int size)
{
  cout << "\033[1;35m====  Employee Data ====\033[0m\n\n";
  cout << "----------------------------------------------\n";
  cout << "Enter employee index [0 -> " << size - 1 << "]: ";
  int index;
  cin >> index;
  cout << "----------------------------------------------\n";

  if (index >= 0 && index < size) {
      cout << "\033[0;36m " << "Name:  \033[0m" << employees[index].name ;
      cout << "\033[40G";
      cout << "\033[0;36m" << "Salary:   \033[0m" << employees[index].salary << "\n";
      cout << "-----------------------\n";
  } else {
      cout << "\033[1;31m Error: Invalid index!\033[0m\n";
  }
}

void add_new_employee(array<employee, 10> &employees, int &size)
{
  cout << "\033[1;32m====  Employee Data ====\033[0m\n\n";
  cout << "----------------------------------------------\n";
  cout << "Enter employee name: ";
  cin >> employees[size].name;
  cout << "Enter employee salary: ";
  cin >> employees[size].salary;
  size++;

  cout << "----------------------------------------------\n";
  cout << "\033[1;36m New employee added successfully!\033[0m\n";
  cout << "----------------------------------------------\n";
  cout << "\033[1;36m Employee Data !\033[0m\n";
  cout << "\033[0;36m " << "Name:  \033[0m" << employees[size - 1].name ;
  cout << "\033[40G";
  cout << "\033[0;36m" << "Salary:   \033[0m" << employees[size - 1].salary << "\n";
}

void print_menu (const string menu_options[], int options_size, int user_choice)
{
  for (int i = 0; i < options_size; i++)
    {
      if (i == user_choice)
      {
        cout << "\033[1;31m> " << menu_options[i] << " <\033[0m\n";
      }
      else
      {
        cout << "  " << menu_options[i] << "\n";
      }
    }

}

/**
 * int take_user_choice(int& user_choice, int options_size, const string menu_options[], struct employee employees[], int &employee_count){
      char pressed_key = getch();

        if (pressed_key == '\033')
        {
          getch();
          pressed_key = getch();
          if (pressed_key == 'A')
          {
            user_choice--;
            if (user_choice < 0)
              user_choice = options_size - 1;
          }
          else if (pressed_key == 'B')
          {
            user_choice++;
            if (user_choice >= options_size)
              user_choice = 0;
          }
        }
        else if (pressed_key == '\n')
        {
          system("clear");
          if (menu_options[user_choice] == "Exit")
          {
            cout << "Exiting the program. Goodbye!\n";
            return 0;
          }
          else
          {
            if (menu_options[user_choice] == "New")
            {
              add_new_employee(employees, employee_count);
            }
            else
            {
              if (menu_options[user_choice] == "Display")
              {
                display_employee_by_index(employees, employee_count);
              }
              else
              {
                if (menu_options[user_choice] == "Display All")
                {
                  display_employee(employees, employee_count);
                }
                else
                {
                  cout << "Invalid Option\n";
                }
              }
            }
          }
          cout << "\nPress any key to return to the menu...";
          getch();
        }

      return user_choice;
    }


 */
