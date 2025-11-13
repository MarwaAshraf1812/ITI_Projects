#include <iostream>
#include <memory>
using namespace std;


int main()
{
  cout << "pointer to pointer example" << endl;
  char str = 'c';
  char *ptr1 = &str;
  char **ptr2 = &ptr1;


  cout << "Value of str: " << str << endl;
  cout << "Value using ptr1: " << &ptr1 << endl;
  cout << "Value using ptr2: " << ptr2 << endl;



  cout << "make unique example" << endl;
  auto str_up = make_unique<char>('c');
  auto ptr1_up = &str_up;
  auto ptr2_up = &ptr1_up;


  cout << "Value of str: " << *str_up << endl;
  cout << "Value using ptr1: " << &ptr1_up << endl;
  cout << "Value using ptr2: " << ptr2_up << endl;
  
  return 0;
}
