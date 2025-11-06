#include <iostream>
using namespace std;

const int MAX_STUDENTS = 10;
const int MAX_COURSES = 4;

struct course
{
  string crs_name;
  int crs_grade;
};

struct student
{
  string st_name;
  course courses[MAX_COURSES];
};

int main()
{

  int number_of_students, number_of_courses;
  cout << "Enter number of students: ";
  cin >> number_of_students;
  cout << "Enter number of courses: ";
  cin >> number_of_courses;

  student students[number_of_students];
  course courses[number_of_courses];

  cout << "\nEnter course names:\n";
  for (int j = 0; j < number_of_courses; j++) {
      cout << "Course " << j + 1 << ": ";
      cin >> courses[j].crs_name;
  }



  for (int i = 0; i < number_of_students; i++)
  {
    cout << "Enter name of student " << i + 1 << ": ";
    cin >> students[i].st_name;

    for (int j = 0; j < number_of_courses; j++)
    {
      students[i].courses[j].crs_name = courses[j].crs_name;
      cout << "Enter grade of  " << students[i].st_name << " in " << courses[j].crs_name << ": ";
      cin >> students[i].courses[j].crs_grade;
    }
  }

  cout << "\n==============================\n";

  cout << "\nTotal grades for each student:\n";
  for (int i = 0; i < number_of_students; i++)
  {
    double sum = 0;
    for (int j = 0; j < number_of_courses; j++)
    {
      sum += students[i].courses[j].crs_grade;
    }
    cout << "Total grade of " << students[i].st_name << " is: " << sum << "\n";
  }


  cout << "\n==============================\n";
  cout << "\nAverage grade for each course:\n";
  for (int i =0; i < number_of_courses; i++)
  {
    double sum = 0;
    for (int j = 0; j < number_of_students; j++)
    {
      sum += students[j].courses[i].crs_grade;
    }

    double average = (double)sum / number_of_students;
    cout << "Average grade in " << courses[i].crs_name << " is: " << average << "\n";
  }

  return 0;
}
