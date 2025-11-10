#include <iostream>
#include <unistd.h>
#include <termios.h>
#include <cctype>
#include <string>
using namespace std;

const string COLOR_BLUE = "\e[34m";
const string BG_GRAY_FG_BLUE = "\e[47;34m";
const string COLOR_RESET = "\e[0m";
const int START_OFFSET = 20;
const int MIN_WIDTH = 30;

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


void print_horizontal_border(int width) {
    cout << "\033[10G";
    cout << COLOR_BLUE << "+";
    for (int i = 0; i < width; i++) {
        cout << "-";
    }
    cout << "+" << COLOR_RESET << endl;
}

void print_line(char line[], int line_length, int cursor_position)
{

  cout << "\r";
  cout << "\033[10G";

  cout << COLOR_BLUE << "|" << flush;
  cout << BG_GRAY_FG_BLUE;

  for (int i = 0; i < line_length; i++)
  {
    cout << line[i];
  }

  int padding = MIN_WIDTH - line_length;
  if (padding > 0)
  {
    for (int i = 0; i < padding; i++)
    {
      cout << " ";
    }
  }

  cout << COLOR_RESET << COLOR_BLUE << "|";

  cout << "\e[K";

  int chars_to_move_back = line_length - cursor_position;
  if (chars_to_move_back > 0)
  {
    cout << "\e[" << chars_to_move_back << "D";
  }
  cout << flush;

}


void print_rectangle_with_text(char line[], int line_length, int cursor_position)
{
    print_horizontal_border(MIN_WIDTH);
    print_line(line, line_length, cursor_position);
    cout << endl;
    print_horizontal_border(MIN_WIDTH);
}

bool process_input(char pressed_key, char line[], int &line_length, int &cursor_position)
{
  if (pressed_key == '\n')
  {
    line[line_length] = '\0';
    return true;
  }
  if (pressed_key == 3)
  {
    cout << "\nExiting...." << endl;
    return true;
  }

  if (pressed_key == 127 && cursor_position > 0)
  {
    for (int i = cursor_position - 1; i < line_length - 1; i++)
    {
      line[i] = line[i + 1];
    }
    cursor_position--;
    line_length--;
    line[line_length] = '\0';

    print_line(line, line_length, cursor_position);
  }

  if (pressed_key == 27)
  {
    char next_pressed_1 = getch();
    char next_pressed_2 = getch();
    if (next_pressed_1 == '[')
    {
      if (next_pressed_2 == 'D' && cursor_position > 0)
      {
        cursor_position--;
      }
      else if (next_pressed_2 == 'C' && cursor_position < line_length)
      {
        cursor_position++;
      }
      print_line(line, line_length, cursor_position);
    }
  }

  if (isprint(pressed_key) && line_length < 99)
  {
    if (cursor_position < line_length)
    {
      for (int i = line_length; i > cursor_position; i--)
      {
        line[i] = line[i - 1];
      }
    }
    line[cursor_position] = pressed_key;
    line_length++;
    cursor_position++;

    print_line(line, line_length, cursor_position);
  }

  return false;
}

int main()
{
  char line[100];
  char pressed_key;

  int line_length = 0;
  int cursor_position = 0;

  for (int i = 0; i < 100; i++)
  {
    line[i] = '\0';
  }

  cout << COLOR_BLUE << endl;
  cout << "\033[5G";
  cout << flush;



  while (true)
  {
    pressed_key = getch();

    if (process_input(pressed_key, line, line_length, cursor_position))
    {
      print_rectangle_with_text(line, line_length, cursor_position);
      break;
    }
  }

  cout << COLOR_RESET << endl;
  return 0;
}