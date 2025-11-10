#include <iostream>
#include <unistd.h>
#include <termios.h>
#include <algorithm>
#include <string>
using namespace std;

const string COLOR_BLUE = "\e[34m";
const string BG_GRAY_FG_BLUE = "\e[47;34m";
const string COLOR_RESET = "\e[0m";
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

void print_horizontal_border(int width);
void print_line(char line[], int line_length, int cursor_position);
void print_rectangle_with_text(char line[], int line_length, int cursor_position);
bool process_input(char pressed_key, char line[], int &line_length, int &cursor_position);

int main()
{
  char line[100] = {0};
  int line_length = 0;
  int cursor_position = 0;
  int pressed_key;

  while (true)
  {
    pressed_key = getch();
    
    while (true)
    {
      pressed_key = getch();

      if (process_input(pressed_key, line, line_length, cursor_position))
      {
        break;
      }

      print_line(line, line_length, cursor_position);
    }
   
      }
  return 0;
}
    

// process inputs
bool process_input(char pressed_key, char line[], int &line_length, int &cursor_position)
{
  // handle Enter key
  if (pressed_key == '\n')
  {
    line[line_length] = '\0';
    cout << "\n\nEnter ctrl - c to exit" << endl;
    return true;
  }

  // handle Ctrl + C
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

    /**و ليكن المؤشر كان عند حرف d
     * و انا مسحت ال d
     * كده المفروش المؤشر يرجع خطوه لورا عشان يكون واقف بعد ال c
     * و كمان طول السطر يقل واحد عشان حرف اتشال
     */
    cursor_position--;
    line_length--;
    line[line_length] = '\0';
  }

  if (pressed_key == 27)
  {
    // “ESC [ D”, left arrow key , "ESC [ C”, right arrow key
    char next_pressed_1_type = getch();
    char next_pressed_2_type = getch();

    if (next_pressed_1_type == '[')
    {
      if (next_pressed_2_type == 'D' && cursor_position > 0)
      {
        cursor_position--;
      }
      else if (next_pressed_2_type == 'C' && cursor_position < line_length)
      {
        cursor_position++;
      }
    }
  }

  // handle printable characters
  if (isprint(pressed_key) && line_length < 90)
  {
    if (cursor_position < line_length)
    {
      for (int i = line_length; i > cursor_position; i--)
      {
        /*han7arak cell wa7da ll right
        bs a7na hnabda mn el akher 3ashan ma n7otsh 7aga 3la 7aga
        fa law 3ayzin n7ot el z f el makan bta3 el
        c , han7arak el d w el e w el f ll right
        */
        line[i] = line[i - 1];
      }
    }
    line[cursor_position] = pressed_key;
    line_length++;
    cursor_position++;
  }
  return false;
}

// print line inside the rectangle
void print_line(char line[], int line_length, int cursor_position)
{
  cout << "\r";

  cout << "\033[10G";

  cout << BG_GRAY_FG_BLUE << "│ ";

  for (int i = 0; i < line_length; i++)
  {
    cout << line[i];
  }

  /*
  de al padding eli hatetla3 fel rectangle 3ashan lw el line_length a2al mn el MIN_WIDTH
  */
  int padding = MIN_WIDTH - line_length;
  if (padding > 0)
  {
    for (int i = 0; i < padding; i++)
    {
      cout << " ";
    }
  }

  cout << COLOR_RESET << COLOR_BLUE << " │";
  cout << "\e[K";

  cout << "\r"; 
  cout << "\033[10G";
  cout << "\e[" << (cursor_position + 2) << "C";
  cout << flush;


  cout << flush;
}

// print_horizontal_border
void print_horizontal_border(int width)
{
  cout << "\033[10G";
  cout << COLOR_BLUE << "+";
  for (int i = 0; i < width + 4; i++)
  {
    cout << "-";
  }
  cout << "+" << COLOR_RESET << endl;
}

// draw a rectangle with the line of text
void print_rectangle_with_text(char line[], int line_length, int cursor_position)
{
  print_horizontal_border(max(MIN_WIDTH, line_length));

  print_line(line, line_length, cursor_position);
  cout << endl;
  print_horizontal_border(max(MIN_WIDTH, line_length));

}
