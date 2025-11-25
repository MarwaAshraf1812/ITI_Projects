#include <iostream>
using namespace std;

class Base{
  protected:
    int a, b;

  public:
    Base() = default;
    Base(int n): a{n}, b{n} {}
    Base(int n, int nn): a{n}, b{nn} {}


    void setA(int val){ a = val; }
    void setB(int val){ b = val; }

    int getA() { return a; }
    int getB() { return b; }

    int calculateSum() { return a + b; }
};

class Derived : public Base{
  int c;
  public:
    Derived(int n): Base(n), c{n} {}
    Derived(int n, int nn, int nnn): Base(n, nn), c{nnn} {}

    void setC(int val){ c = val; }
    int getC() { return c; }

    int calculateSum() { return a + b + c; }

};
int main()
{
  cout << "===== Testing Base Class =====\n";
  Base baseObj(5, 10);
  cout << "A: " << baseObj.getA() << ", B: " << baseObj.getB() << endl;
  cout << "Sum of A and B: " << baseObj.calculateSum() << endl;
    cout << "-------------------------------\n";

  Base baseObj2(20);
  cout << "A: " << baseObj2.getA() << ", B: " << baseObj2.getB() << endl;
  cout << "Sum of A and B: " << baseObj2.calculateSum() << endl;
  cout << "-------------------------------\n";


  cout << "\n===== Testing Derived Class =====\n";
  Derived derivedObj(5, 10, 15);
  cout << "A: " << derivedObj.getA() << ", B: " <<  derivedObj.getB() << ", C: " << derivedObj.getC() << endl;
  cout << "Sum of A, B and C: " << derivedObj.calculateSum() << endl;
    cout << "-------------------------------\n";

  Derived derivedObj2(20);
  cout << "A: " << derivedObj2.getA() << ", B: " <<  derivedObj2.getB() << ", C: " << derivedObj2.getC() << endl;
  cout << "Sum of A, B and C: " << derivedObj2.calculateSum() << endl;
    cout << "-------------------------------\n";

  derivedObj2.setA(7);
  derivedObj2.setB(8);
  derivedObj2.setC(9);
  cout << "After setting new values:" << endl;
  cout << "A: " << derivedObj2.getA() << ", B: " <<  derivedObj2.getB() << ", C: " << derivedObj2.getC() << endl;
  cout << "Sum of A, B and C: " << derivedObj2.calculateSum() << endl;



  return 0;
}
