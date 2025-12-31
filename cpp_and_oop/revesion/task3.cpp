#include <iostream>
using namespace std;

class Shape{
  protected:
    virtual void draw() = 0;
    virtual double area() = 0;

    virtual ~Shape(){}
};


class Circle: public Shape{
  double radius;
  public:
  Circle(double r): radius(r) {}
  void draw() override {
    cout << "Drawing Circle with radius: " << radius << endl;
  }
  double area() override {
    return 3.14159 * radius * radius;
  }
};


class Rectangle: public Shape{
  double length, width;

  public:
    Rectangle(double l, double w) : length(l), width(w) {}

    void draw() override {
      cout << "Drawing Rectangle with length and width : " << length << " , " << width << endl;
    }

    double area() override {
      return length * width;
    }

};

void printOptions(char choice){
  cout<<"choose the shape"<<endl;
  switch (choice)
  {
  case 'c':
    
    break;
  
  default:
    break;
  }
}

int main()
{
  Shape* arr[4];
  for(int i = 0; i < 4; i++) {
    cout<<"";
  }
  return 0;
}
