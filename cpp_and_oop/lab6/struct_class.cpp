#include <iostream>
using namespace std;

struct student_struct
{
  float marks;

  string name;
  int age;
  void setmarks(float m)
  {
    marks = m;
  }
};

class student
{
  float marks;

  public:
    string name;
    int age;

    void setmarks(float m)
    {
      marks = m;
    }
};

int main()
{

  student s1;
  s1.name = "Yara";
  s1.age = 21;
  s1.setmarks(95.5);


  cout << "Accessing class members:" << endl;
  cout << "Name: " << s1.name << endl;
  cout << "Age: " << s1.age << endl;
  // cout << "Marks: " << s1.marks << endl;


  cout << "------------------------" << endl;
  student_struct s2;  
  s2.name = "Lina";
  s2.age = 22;
  s2.setmarks(89.5);
  

  cout << "Accessing struct members:" << endl;
  cout << "Name: " << s2.name << endl;
  cout << "Age: " << s2.age << endl;
  cout << "Marks: " << s2.marks << endl;

  return 0;
}
