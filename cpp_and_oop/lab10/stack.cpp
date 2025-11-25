#include <iostream>
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
    // cout << "Complex number created (uniform): " << ++counter << endl;
  }

  complex(float r, float i)
  {
    real = r;
    image = i;
    counter += 1;
    // cout << "Complex number created: " << counter << endl;
  };

  complex(float r)
  {
    real = r;
    image = 0;
    counter += 1;
    // cout << "Complex number created: " << counter << endl;
  }

  // Copy Constructor
  complex(const complex &other)
  {
    this->real = other.real;
    this->image = other.image;
    counter++;
  }

  ~complex()
  {
    counter -= 1;
    // cout << "Complex number destroyed. Remaining: " << counter << endl;
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


template <class T>
class stack
{
  int top;
  int capacity;
  T *stPtr;
  static int counter;

public:
  stack(int cap = 5) : top{0}, capacity{cap} {
    stPtr = new T[capacity];
    counter += 1;
    cout << "Stack created. Total stacks: " << counter << endl;
  }

  // copy constructor
  stack(const stack &other) : top(other.top), capacity(other.capacity) 
  {
    this->stPtr = new T[other.capacity];
    for (int i = 0; i < other.top; i++)
    {
      this->stPtr[i] = other.stPtr[i];
    }
    counter += 1;
    cout << "Stack copied. Total stacks: " << counter << endl;
  }

  // move constructor
  stack (stack && other) noexcept :top(other.top), capacity(other.capacity)
  {
    this->stPtr = other.stPtr;
    counter += 1;

    other.top = 0;
    other.capacity = 0;
    other.stPtr = nullptr;
    cout << "Stack moved and the old resources freed. Total stacks: " << counter << endl;
  }

  stack& push_stack(T value)
  {
    if (top == capacity)
    {
      cout << "stack overflow" << endl;
    }
    else
    {
      stPtr[top] = value;
      top++;
    }

    return *this;
  }

  stack& pop_stack()
  {
    if (top == 0)
    {
      cout << "The stack is empty" << endl;
    }
    else {
      top--;
    }

    return *this;
  }


  static void display_counter()
  {
    cout << "The counter: " << counter << endl;
  }

  void display_stack_elements()
  {
    if(top==0)
    {
      cout << "The stack is empty" << endl;
    }
    else {
      cout <<" The stack elements are: ";
      for (int i =0; i < top; i++)
      {
        cout << stPtr[i] << " ";
      }
      cout << endl;
    }
  }

  ~stack()
  {
    delete[] stPtr;
    counter -= 1;
    cout << "Stack destroyed. Remaining stacks: " << counter << endl;
  }

  // copy assignment operator =
  stack & operator=(const stack &other)
  {
    if (this == &other) return *this;

    delete[] stPtr;


    this->top = other.top;
    this->capacity = other.capacity;
    this->stPtr = new T[other.capacity];
    for (int i = 0; i < other.top; i++)
    {
      this->stPtr[i] = other.stPtr[i];
    }

    cout << "Copy assignment called" << endl;
    return *this;
  }

  // move assignment operator =
  stack & operator=(stack && other) noexcept
  {
    if (this == &other) return *this;

    delete[] stPtr;


    this->top = other.top;
    this->capacity = other.capacity;
    this->stPtr = other.stPtr;

    other.top = 0;
    other.capacity = 0;
    other.stPtr = nullptr;

    cout << "Move assignment called" << endl;
    return *this;
  }

  T& operator[] (int index)
  {
    if (index < 0 || index >= top)
    {
      cout << "Index out of bounds, returning first element!" << endl;
      return stPtr[0];
      //exit(1);
    }
    return stPtr[index];
  }


  
};

template<class T>
int stack<T>::counter = 0;

template<class T>
T sum(T a, T b)
  {
    return a + b;
}

int main()
{
    cout << "=========== Start ===========\n";

    cout << "\n--- test int type stack ---\n";
    stack<int> s1(3);
    s1.push_stack(10).push_stack(20).push_stack(30);

    stack<int> s2 = s1;
    s2.display_stack_elements();

    stack<int> s3 = std::move(s1);
    s3.display_stack_elements();

    stack<int> s4;
    s4 = s3;
    s4.display_stack_elements();

    stack<int> s5;
    s5 = std::move(s3); 
    s5.display_stack_elements();
    stack<int>::display_counter();
    cout << "\n--- End of int type stack test ---\n";

    cout << "\n--- test string type stack ---\n";
    stack<string> names(2);
    names.push_stack("Maro").push_stack("Aseel");

    stack<string> n2 = names;
    n2.display_stack_elements();
    stack<string>::display_counter();
    cout << "\n--- End of string type stack test ---\n";

    cout << "\n--- test float type stack ---\n";
    stack<float> fs(3);
    fs.push_stack(1.1).push_stack(2.2);
    fs.display_stack_elements();
    stack<float>::display_counter();
    cout << "\n--- End of float type stack test ---\n";

    cout << "\n--- test complex type stack ---\n";
    stack<complex> cs(2);
    complex c1(1,2);
    complex c2(3,4);
    cs.push_stack(c1).push_stack(c2);
    cs.display_stack_elements();

    stack<complex>::display_counter();
    cout << "\n--- End of complex type stack test ---\n";

    cout << "\n--- test char type stack ---\n";
    stack<char> chs(4);
    chs.push_stack('A').push_stack('B').push_stack('C');
    chs.display_stack_elements();
    stack<char>::display_counter();
    cout << "\n--- End of char type stack test ---\n";

    cout << "\n--- test sum function template ---\n";
    int intSum = sum<int>(10, 20);
    cout << "Sum of integers: " << intSum << endl; 
    float floatSum = sum<float>(10.5f, 20.3f);
    cout << "Sum of floats: " << floatSum << endl;

    double doubleSum = sum<double>(15.5, 25.5);
    cout << "Sum of doubles: " << doubleSum << endl;

    complex comp1(1, 2);
    complex comp2(3, 4);
    complex complexSum = sum<complex>(comp1, comp2);
    cout << "Sum of complex numbers: " << complexSum << endl;
    cout << "\n--- End of sum function template test ---\n";



    cout << "\n=========== End ===========\n";

    return 0;

}