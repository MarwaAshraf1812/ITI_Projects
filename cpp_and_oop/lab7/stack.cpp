#include <iostream>
using namespace std;

class stack
{
  int top;
  int capacity;
  int *stPtr;
  static int counter;

public:
  stack()
  {
    top = 0;
    capacity = 2;
    stPtr =  new int[capacity];
  }

  stack(int cap)
  {
    top = 0;
    capacity = cap;
    stPtr = new int[capacity];
    counter += 1;
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
  }

  
};

int stack::counter;

int main()
{

  stack st(5);

  st.push_stack(10).push_stack(20).push_stack(30).display_stack_elements();
  st.pop_stack().display_stack_elements();



  stack::display_counter();

  return 0;
}
