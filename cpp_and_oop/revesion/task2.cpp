#include <iostream>
using namespace std;

class String
{
  char* data;
  int length;

  public:
  int getLength(const char* str){
    for (int i = 0; str[i] != '\0'; i++){
      length++;
    }
    return length;
  }


  char* copyString(const char* source, char* dest)
  {
    char *ptr = dest;
    while(*source != '\0')
    {
      *ptr++ = *source++;
    }
    *ptr = '\0';
    return dest;
  }
  String(const char* str)
  {
    length = getLength(str);
    data = new char[length + 1];
    copyString(str, data);
  }

  String(const String& other)
  {
    length = other.length;
    data = new char[length + 1];
    copyString(other.data, data);
  }

  char* getData() const { return data; }

  ~String()
  {
    delete[] data;
  }
};


int main()
{

  String str1("HelloWorld!");
  String str2 = str1;
  cout << "String 1: " << str1.getData() << endl;
  cout << "String 2 (copied): " << str2.getData() << endl;
  return 0;
}
