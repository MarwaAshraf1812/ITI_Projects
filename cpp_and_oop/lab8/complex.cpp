#include <iostream>
#include <cmath>
using namespace std;

class complex
{
  float real;
  float image;
  static int counter;

public:
  // complex() = default; // default constructor compiler generated
  complex() : real{0.0}, image{0.0} // user defined default constructor by initializer list
  {
    cout << "Complex number created (uniform): " << ++counter << endl;
  }

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
  complex(const complex &other)
  {
    this->real = other.real;
    this->image = other.image;
    counter++;
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

  // ----------------- Arithmetic with Float -----------------
  complex operator+(float val)
  {
    complex result;
    result.real = this->real + val;
    result.image = this->image;
    return result;
  }

  complex operator-(float val)
  {
    complex result;
    result.real = this->real - val;
    result.image = this->image;
    return result;
  }

  complex operator*(float val)
  {
    complex result;
    result.real = this->real * val;
    result.image = this->image;
    return result;
  }

  complex operator/(float val)
  {
    complex result;
    if (val != 0)
    {
      result.real = this->real / val;
      result.image = this->image;
    }
    else
    {
      cout << "Division by zero is not allowed." << endl;
      result.real = 0;
      result.image = 0;
    }
    return result;
  }

  // ----------------- Relational Operators -----------------
  bool operator>(complex &other)
  {
    return this->real > other.real;
  }

  bool operator<(complex &other)
  {
    return this->real < other.real;
  }

  // Prefix increment
  complex operator++()
  {
    this->real += 1;
    return *this;
  }

  // ----------------- Increment/Decrement -----------------
  // post increment
  complex operator++(int)
  {
    complex temp = *this;
    this->real += 1;
    return temp;
  }

  // Prefix decrement
  complex operator--()
  {
    this->real -= 1;
    return *this;
  }

  // post decrement
  complex operator--(int)
  {
    complex temp = *this;
    this->real -= 1;
    return temp;
  }

  // ----------------- Arithmetic with Complex------------------------------
  complex operator+(const complex &other)
  {
    complex result;
    result.real = this->real + other.real;
    result.image = this->image + other.image;
    return result;
  }

  complex operator-(const complex &other)
  {
    complex result;
    result.real = this->real - other.real;
    result.image = this->image - other.image;
    return result;
  }

  complex operator*(const complex &other)
  {
    complex result;
    result.real = this->real * other.real;
    result.image = this->image * other.image;
    return result;
  }

  complex operator/(const complex &other)
  {
    complex result;
    if (other.real != 0)
    {
      result.real = this->real / other.real;
      result.image = this->image / other.image;
    }
    else
    {
      cout << "Division by zero is not allowed." << endl;
      result.real = 0;
      result.image = 0;
    }
    return result;
  }

  // ----------------- Casting & Friends -----------------

  operator float()
  {
    return this->real;
  }
  friend ostream &operator<<(ostream &oot, const complex &c);
  friend std::istream &operator>>(std::istream &in, complex &c);
};

ostream &operator<<(ostream &out, const complex &c)
{
  out << c.real;

  if (c.image >= 0)
  {
    out << "+";
  }
  else
  {
    out << "-";
  }

  out << abs(c.image) << "i";

  return out;
}

istream &operator>>(std::istream &in, complex &c)
{
  cout << "Enter the real part: ";
  in >> c.real;
  cout << "Enter the imaginary part: ";
  in >> c.image;

  cout << "You entered: " << c << endl;
  return in;
}

int complex::counter = 0;

int main()
{
  cout << "=== 1. Testing Constructors & I/O ===\n"
       << endl;
  complex c1(3, 7);
  complex c2(3, 2);
  complex c3; // 0+ 0i default constructor

  cout << "\n==================================================" << endl;
  cout << "c1: " << c1 << endl;
  cout << "c2: " << c2 << endl;
  cout << "\n==================================================" << endl;

  cout << "\n=== 2. Testing Arithmetic (Complex + Complex) ===\n"
      << endl;
  c3 = c1 + c2; // c3 = 4 + 7i
  cout << "c3 = c1 + c2: " << c3 << endl;

  cout << "\n--------------------------------------------------" << endl;
  c3 = c1 - c2; // c3 = 2 - 7i
  cout << "c3 = c1 - c2: " << c3 << endl;

  cout << "\n--------------------------------------------------" << endl;

  c3 = c1 * c2; // c3 = 3 * 1 + 7i
  cout << "c3 = c1 * c2: " << c3 << endl;
  cout << "\n--------------------------------------------------" << endl;
  c3 = c1 / c2; // c3 = 3 / 1 + 7i
  cout << "c3 = c1 / c2: " << c3 << endl;
  cout << "\n==================================================" << endl;

  cout << "\n=== 3. Testing Arithmetic (Complex + Float) ===" << endl;
  /**
   * f
   * السي بلص بلص لو دخلت اي رقم ديسيمال  الكومبايلر بيعتبره
   * double
   * بالتالي لازم نحوله لفلوت
   * بدل ما يحصل Implicit
   * و احيانا ده بييطلع ورنينج
   */
  c3 = c1 + 5.0f; // c3 = 8 + 7i
  cout << "c3 = c1 + 5.0: " << c3 << endl;
  cout << "\n==================================================" << endl;

  cout << "\n=== 5. Testing Increment (++, --) ===" << endl;
  cout << " Original c1: " << c1 << endl;
  cout << " prefix ++c1: " << ++c1 << endl;
  cout << " postfix c1++: " << c1++ << endl;
  cout << " After postfix, c1: " << c1 << endl;
  cout << " prefix --c1: " << --c1 << endl;
  cout << " postfix c1--: " << c1-- << endl;
  cout << " After postfix, c1: " << c1 << endl;
  cout << "\n==================================================" << endl;

  cout << "\n=== 6. Testing Type Casting ===" << endl;
  float f = (float)c1;
  cout << "Casting c1 to float gives: " << f << endl;
  cout << "\n==================================================" << endl;

  cout << "\n=== 7. Counter Check ===" << endl;
  complex::showCounter();
  cout << "\n==================================================" << endl;

  return 0;
}