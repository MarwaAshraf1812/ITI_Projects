#include <iostream>
using namespace std;

template <typename T>
class VectorSimulation
{
private:
  int size;
  int capacity;
  T *arr;

  void reSize(int newCapacity)
  {
    T *newArr = new T[newCapacity];

    for (int i = 0; i < size; i++)
    {
      newArr[i] = arr[i];
    }

    delete[] arr;

    arr = newArr;
    capacity = newCapacity;
  }

public:
  VectorSimulation()
  {
    size = 0;
    capacity = 2;
    arr = new T[capacity];
  }

  VectorSimulation(const VectorSimulation &other)
  {
    this->size = other.size;
    this->capacity = other.capacity;

    this->arr = new T[this->capacity];
    for (int i = 0; i < size; i++)
    {
      this->arr[i] = other.arr[i];
    }
  }

  VectorSimulation *operator=(const VectorSimulation &other)
  {
    if (this == &other)
      return *this;
    delete[] this->arr;

    this->size = other.size;
    this->capacity = other.capacity;
    this->arr = new T[this->capacity];
    for (int i = 0; i < size; i++)
    {
      this->arr[i] = other.arr[i];
    }

    return *this;
  }
  
  int getSize() const { return size; }
  
  int getCapacity() const { return capacity; }

  void print()
  {
    for (int i = 0; i < size; i++)
    {
      cout << arr[i] << " ";
    }
    cout << endl;
  }

  void PushBack(T value)
  {
    if (size == capacity)
    {
      reSize(capacity * 2);
    }

    arr[size] = value;
    size++;
  }

  void Insert(int index, T value)
  {
    if (index < 0 || index > size)
    {
      cout << "Error: Index out of bounds!" << endl;
      return;
    }
    if (size == capacity)
    {
      reSize(capacity * 2);
    }
    for (int i = size; i > index; i--)
    {
      arr[i] = arr[i - 1];
    }
    arr[index] = value;
    size++;
  }

  void RemoveAt(int index)
  {
    if (index < 0 || index >= size)
    {
      cout << "Error: Index out of bounds!" << endl;
      return;
    }
    for (int i = index; i < size; i++)
    {
      arr[i] = arr[i + 1];
    }
    size--;
  }

  void Remove(T value)
  {
    for (int i = 0; i < size; i++)
    {
      if (arr[i] == value)
      {
        RemoveAt(i);
        return;
      }
    }
    cout << "Element not found!" << endl;
  }

  void pop_back()
  {
    if (size > 0)
    {
      size--;
    }
  }

  void trim()
  {
    if(capacity > size)
    {
      capacity = size;
      T* newArr = new T[capacity];
      for(int i =0; i < size; i++)
      {
        newArr[i] = arr[i];
      }
      delete[] arr;
      arr = newArr;
    }
  }

  T& operator[](int index)
  {
    if(index < 0 || index >= size) {
      throw out_of_range("Index out of range");
    }
    return arr[index];
  }
  
  ~VectorSimulation() { delete[] arr; }
};

int main()
{
  VectorSimulation<int> v;

  cout << "PushBack 10, 20, 30: ";
  v.PushBack(10);
  v.PushBack(20);
  v.PushBack(30);
  v.print(); //10 20 30

  cout << "Insert 99 at index 1: ";
  v.Insert(1, 99);
  v.print(); // 10 99 20 30
  v.print();
  cout << "RemoveAt index 2 (val 20): ";
  v.RemoveAt(2);

  v.print(); // 10 99 30

  cout << "Copy Constructor Test: ";
  VectorSimulation<int> v2 = v;
  v2.print(); //10 99 30
  
  cout << "Before trim: ";
  cout << v.getCapacity() << endl;
  cout << v.getSize() << endl;

  v.trim();

  cout << "Aftr trim: ";
  cout << v.getCapacity() << endl;
  cout << v.getSize() << endl;
  
  
  return 0;
}
