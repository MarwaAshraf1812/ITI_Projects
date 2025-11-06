#include <iostream>
#include <unistd.h>
#include <termios.h>
using namespace std;


char getch() {
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

int main() {
    string menu_options[] = {"New", "Display", "Display All", "Exit"};
    int options_size = 4;
    int user_choice = 0;
    char pressed_key;

    while (true) {
        system("clear");
        cout << "\033[1;33m==== MAIN MENU ====\033[0m\n\n";

        for (int i = 0; i < options_size; i++) {
            if (i == user_choice) {
                cout << "\033[1;31m> " << menu_options[i] << " <\033[0m\n";
            } else {
                cout << "  " << menu_options[i] << "\n";
            }
        }

        pressed_key = getch();


        if (pressed_key == '\033') {
            getch();
            pressed_key = getch();
            if (pressed_key == 'A') {
                user_choice--;
                if (user_choice < 0)
                    user_choice = options_size - 1;
            } else if (pressed_key == 'B') { 
                user_choice++;
                if (user_choice >= options_size)
                    user_choice = 0;
            }
        } else if (pressed_key == '\n') {
            system("clear");
            if (menu_options[user_choice] == "Exit") {
                cout << "Exiting the program. Goodbye!\n";
                break;
            } else {
                if (menu_options[user_choice] == "New") {
                    cout << "You selected New option\n";
                } else {
                    if (menu_options[user_choice] == "Display") {
                        cout << "You selected Display option\n";
                    } else {
                        if (menu_options[user_choice] == "Display All") {
                            cout << "Those are all data\n";
                        } else {
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
