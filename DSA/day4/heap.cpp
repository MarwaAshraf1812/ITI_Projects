#include <iostream>
#include <vector>
#include <limits>
#include <algorithm>
#include <stdexcept>

using namespace std;

template <typename T>
class BinaryHeap
{
private:
  vector<T> heap;
  int currentSize;

  int parent(int i) { return i / 2; }
  int leftChild(int i) { return 2 * i; }
  int rightChild(int i) { return 2 * i + 1; }
  
  bool isEmpty() const {
    return currentSize == 0;
  }

  void fixUp(int i)
  {
    while (i > 1 && heap[i] < heap[parent(i)])
    {
      swap(heap[i], heap[parent(i)]);
      i = parent(i);
    }
  }

  void fixDown(int i)
  {
    while (leftChild(i) <= currentSize)
    {
      int child = leftChild(i);
      // بنختار الابن الأصغر عشان نبدل معاه
      if (child + 1 <= currentSize && heap[child + 1] < heap[child])
      {
        child++;
      }

      if (heap[i] > heap[child])
      {
        swap(heap[i], heap[child]);
        i = child;
      }
      else
      {
        break;
      }
    }
  }

public:
  explicit BinaryHeap(int capacity = 100)
  {
    currentSize = 0;
    heap.reserve(capacity + 1);
    heap.push_back(std::numeric_limits<T>::min()); // Sentinel at index 0
  }

  T &findMin() { return heap[1]; }

  void insert(const T &value)
  {
    heap.push_back(value);
    currentSize++;
    fixUp(currentSize);
  }

  void deleteMin()
  {
    if (currentSize == 0)
    {
      cout << "Heap is empty!" << endl;
      return;
    }

    heap[1] = heap.back();
    heap.pop_back();
    currentSize--;

    if (currentSize > 0)
      fixDown(1);
  }

  T& operator[] (int index)
  {
    if (index < 1 || index > currentSize) {
        throw out_of_range("Index out of bounds");
    }
        return heap[index];
  }

  void print()
  {
    cout << "Heap: ";
    for (int i = 1; i <= currentSize; i++)
      cout << heap[i] << " ";
    cout << endl;
  }
};

int main()
{
  BinaryHeap<int> h;
  
  h.insert(10);
  h.insert(5);
  h.insert(30);
  h.insert(2); 
  h.print(); // 2 5 30 10
  
  cout << "Min is: " << h.findMin() << endl; // 2

  h.deleteMin(); // 2
  
  h.print(); // root = 5 badl 2
  
  return 0;
}