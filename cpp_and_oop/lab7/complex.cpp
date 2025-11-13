#include <iostream>
using namespace std;

class complex
{
  float real;
  float image;
  static int counter;

public:
  complex() = default;

  complex(float r, float i)
  {
    real = r;
    image = i;
    counter += 1;
    cout << "Complex number created: " << counter << endl;
  };

  complex(float r)
  {
    real = r;
    image = 0;
    counter += 1;
    cout << "Complex number created: " << counter << endl;
  }

  ~complex()
  {
    counter -= 1;
    cout << "Complex number destroyed. Remaining: " << counter << endl;
  }

  static void showCounter()
  {
    cout << "Current complex number count: " << counter << endl;
  }

    void printComplex()
    {
        if (real == 0 && image == 0)
            cout << "0" << endl;
        else if (real == 0)
        {
            if (image == 1)
                cout << "i" << endl;
            else if (image == -1)
                cout << "-i" << endl;
            else
                cout << image << "i" << endl;
        }
        else
        {
            if (image == 0)
                cout << real << endl;
            else if (image == 1)
                cout << real << "+i" << endl;
            else if (image == -1)
                cout << real << "-i" << endl;
            else if (image > 0)
                cout << real << "+" << image << "i" << endl;
            else
                cout << real << image << "i" << endl;
        }
    }

};
int complex::counter = 0;

int main()
{
  complex::showCounter();
  cout << "-------------------------------------------------\n"<< endl;

  complex c1(5, 7);    // 5+7i
  complex c2(-3, -3);  // -3-3i
  complex c3(0, -8);   // -8i
  complex c4(0, 8);    // 8i
  complex c5(0, -9);   // -9i
  complex c6(-9, 3);   // -9+3i
  complex c7(8, 1);    // 8+i
  complex c8(8);      // 8

  cout << "-------------------------------------------------\n"<< endl;
  c1.printComplex();
  c2.printComplex();
  c3.printComplex();
  c4.printComplex();
  c5.printComplex();
  c6.printComplex();
  c7.printComplex();
  c8.printComplex();


  cout << "\n-------------------------------------------------\n"<< endl;
  complex::showCounter();
  return 0;
}
