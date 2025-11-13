#include <iostream>
using namespace std;

class stack
{
  int top;
  int capacity;
  int *stPtr;
  static int counter;

public:
  stack(int cap = 5) : top{0}, capacity{cap} {
    stPtr = new int[capacity];
    counter += 1;
    cout << "Stack created. Total stacks: " << counter << endl;
  }

  // copy constructor
  stack(const stack &other) : top(other.top), capacity(other.capacity) 
  {
    this->stPtr = new int[other.capacity];
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

  stack& push_stack(int value)
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
    this->stPtr = new int[other.capacity];
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

  int& operator[] (int index)
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

int stack::counter = 0;

int main()
{
  cout << "=========== Start ===========\n";

    stack s1(3);
    s1.push_stack(10).push_stack(20).push_stack(30);
    s1.display_stack_elements();

    cout << "\n--- Copy Constructor ---\n";
    stack s2 = s1;
    s2.display_stack_elements();

    cout << "\n--- Move Constructor ---\n";
    stack s3 = std::move(s1);
    s3.display_stack_elements();
    s1.display_stack_elements();

    cout << "\n--- Copy Assignment ---\n";
    stack s4(2);
    s4 = s2;
    s4.display_stack_elements();

    cout << "\n--- Move Assignment ---\n";
    stack s5(2);
    s5 = std::move(s2);
    s5.display_stack_elements();
    s2.display_stack_elements();

    stack::display_counter();

    cout << "\n=========== End ===========\n";
    return 0;
}