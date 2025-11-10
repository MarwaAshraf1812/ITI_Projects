#include <iostream>
#include <array>
#include <string>
#include <memory>
#include <unistd.h>
#include <termios.h>



using namespace std;


struct employee
{
  string name;
  float salary;
};



void display_employee(const unique_ptr<employee[]> &employees, int size);
void display_employee_by_index(const unique_ptr<employee[]> &employees, int size);
void add_new_employee(unique_ptr<employee[]> &employees, int &employee_count, int max_size);
void print_menu(const string menu_options[], int options_size, int user_choice);

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
    /*array<employee, 10> employees = { {
      {"Ahmed", 50000.0},
      {"Joud", 60000.0},
      {"Ilias", 55000.0},
      {"Marwa", 70000.0},
      {"Maryam", 48000.0},
      {"Karma", 53000.0},
      {"Alice", 59000.0},
      {"Judy", 61000.0}
    } };

  int employee_count = employees.size();*/

  int size ;
  cout << "\033[10G";
  cout << "\033[1;34m Enter number of employees to manage (max 10): " << "\033[0m";

  cin >> size;
  if (size <= 0) {
      cout << "Invalid size. Exiting program.\n";
      return 1;
  }

  auto employees = make_unique<employee[]>(size);
  int employee_count = 0; 

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
          add_new_employee(employees, employee_count, size);
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

void display_employee(const unique_ptr<employee[]> &employees, int size)
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

void display_employee_by_index(const unique_ptr<employee[]> &employees, int size)
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


void add_new_employee(unique_ptr<employee[]> &employees, int &employee_count, int max_size)
{
  cout << "\033[1;32m========================================\033[0m\n";
  cout << "\033[1;32m       Add New Employee(s)\033[0m\n";
  cout << "\033[1;32m========================================\033[0m\n\n";
  
  if (employee_count >= max_size) {
    cout << "\033[1;31m✗ Error: Maximum capacity reached!\033[0m\n";
    cout << "\033[1;31m  Cannot add more employees.\033[0m\n";
    return;
  }
  
  int remaining = max_size - employee_count;
  cout << "\033[1;33m Current employees: " << employee_count << "|" << max_size << "\033[0m\n";
  cout << "\033[1;33m Available slots: " << remaining << "\033[0m\n\n";
  cout << "----------------------------------------------\n";
  cout << "How many employees do you want to add? ";
  int count;
  cin >> count;
  
  if (count <= 0) {
    cout << "\033[1;31m✗ Invalid number!\033[0m\n";
    return;
  }
  
  if (count > remaining) {
    cout << "\033[1;33m Warning: Only " << remaining << " positions available.\033[0m\n";
    cout << "\033[1;33m  Adding " << remaining << " employee(s) instead.\033[0m\n";
    count = remaining;
  }
  
  cin.ignore();
  
  cout << "\n\033[1;36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\033[0m\n\n";
  
  for (int i = 0; i < count; i++) {
    cout << "\033[1;34m┌─ Employee #" << (employee_count + 1) << " ─────────────────────────┐\033[0m\n";
    cout << "\033[1;34m│\033[0m\n";
    cout << "\033[1;34m│\033[0m  Enter employee name: ";
    getline(cin, employees[employee_count].name);
    cout << "\033[1;34m│\033[0m  Enter employee salary: ";
    cin >> employees[employee_count].salary;
    cin.ignore(); // Clear buffer after reading salary
    cout << "\033[1;34m│\033[0m\n";
    cout << "\033[1;34m└──────────────────────────────────────┘\033[0m\n";
    
    if (i < count - 1) {
      cout << "\n";
    }
    
    employee_count++;
  }

  cout << "\n\033[1;32m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\033[0m\n";
  cout << "\033[1;32m✓ Success: " << count << " employee(s) added!\033[0m\n";
  cout << "\033[1;32m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\033[0m\n";
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
