#include <iostream>
using namespace std;

struct Employee
{
  int ID;
  char name[50];
  double salary;
};

class Node
{
public:
  Employee data;
  Node *pNext;
  Node *pPrev;

  Node(const Employee &emp) : data(emp), pNext(nullptr), pPrev(nullptr) {}

  ~Node() {}
};

class DLL
{
protected:
  Node *pHead;
  Node *pTail;

public:
  DLL() : pHead(nullptr), pTail(nullptr) {}
  DLL(const DLL &other)
  {
    pHead = pTail = nullptr;

    Node *pCurrent = other.pHead;
    while (pCurrent != nullptr)
    {
      addNode(pCurrent->data);
      pCurrent = pCurrent->pNext;
    }
  }

  void addNode(const Employee &emp)
  {
    Node *newNode = new Node(emp);

    if (pHead == nullptr)
    {
      pHead = pTail = newNode;
    }
    else
    {
      pTail->pNext = newNode;
      newNode->pPrev = pTail;
      pTail = newNode;
    }
  }

  bool DeleteNode(int ID)
  {
    Node *pCurrent = pHead;

    while (pCurrent != nullptr)
    {
      if (pCurrent->data.ID == ID)
        break;
      pCurrent = pCurrent->pNext;
    }
    if (pCurrent == nullptr)
      return false; // not found

    if (pHead == pTail)
      pHead = pTail = nullptr;  // only one element
    else if (pCurrent == pHead) // delete start node
    {
      pHead = pHead->pNext;
      pHead->pPrev = nullptr;
    }
    else if (pCurrent == pTail)
    {
      pTail = pTail->pPrev;
      pTail->pNext = nullptr;
    }
    else
    {
      pCurrent->pPrev->pNext = pCurrent->pNext;
      pCurrent->pNext->pPrev = pCurrent->pPrev;
    }
    delete pCurrent;
    return true;
  }

  Node *SearchList(int ID)
  {
    Node *pSearch = pHead;

    while (pSearch != nullptr)
    {
      if (pSearch->data.ID == ID)
        break;
      pSearch = pSearch->pNext;
    }
    return pSearch;
  }

  void DisplayNode(int ID)
  {
    Node *pDisplay = SearchList(ID);

    if (pDisplay != nullptr)
    {
      cout << "ID: " << pDisplay->data.ID << ", Name: " << pDisplay->data.name << ", Salary: " << pDisplay->data.salary << endl;
    }
  }

  void DisplayALL()
  {
    Node *pDisplayyAll = pHead;
    while (pDisplayyAll != nullptr)
    {
      cout << "ID: " << pDisplayyAll->data.ID << ", Name: " << pDisplayyAll->data.name << ", Salary: " << pDisplayyAll->data.salary << endl;
      pDisplayyAll = pDisplayyAll->pNext;
    }
  }

  int NodeNumber()
  {
    Node *pCount = pHead;
    int count = 0;

    while (pCount != nullptr)
    {
      count++;
      pCount = pCount->pNext;
    }
    return count;
  }

  Employee &operator[](const int index)
  {
    Node *pCurrent = pHead;

    if (index < 0)
    {
      cout << "Index out of range";
      exit(1);
    }
    for (int i = 0; i < index; i++)
    {
      if (pCurrent == nullptr)
      { // to stop if index is out of range
        cout << "Index out of range";
        exit(1);
      }
      pCurrent = pCurrent->pNext;
    }
    if (pCurrent == nullptr)
    {
      cout << "Index out of range";
      exit(1);
    }
    return pCurrent->data;
  }

  DLL &operator=(const DLL &other)
  {

    if (this == &other)
      return *this;

    while (pHead != nullptr)
    {
      Node *temp = pHead;
      pHead = pHead->pNext;
      delete temp;
    }
    pHead = pTail = nullptr;

    Node *pCurrent = other.pHead;
    while (pCurrent != nullptr)
    {
      addNode(pCurrent->data);
      pCurrent = pCurrent->pNext;
    }
    return *this;
  }

  virtual ~DLL()
  {
    Node *pTemp;
    while (pHead != nullptr)
    {
      pTemp = pHead;
      pHead = pHead->pNext;
      delete pTemp;
    }
    pTail = nullptr;
  }
};

class SortedDDL
{
  Node *pHead;
  Node *pTail;

public:
  SortedDDL() : pHead(nullptr), pTail(nullptr) {}

  SortedDDL(const SortedDDL &other)
  {
    pHead = pTail = nullptr;

    Node *pCurrent = other.pHead;
    while (pCurrent != nullptr)
    {
      insertNode(pCurrent->data);
      pCurrent = pCurrent->pNext;
    }
  }

  void insertNode(const Employee &emp)
  {
    Node *newNode = new Node(emp);

    if (pHead == nullptr)
    {
      pHead = pTail = newNode;
      return;
    }
    if (emp.ID < pHead->data.ID)
    {
      newNode->pNext = pHead;
      pHead->pPrev = newNode;
      pHead = newNode;
      return;
    }

    if (emp.ID >= pTail->data.ID)
    {
      pTail->pNext = newNode;
      newNode->pPrev = pTail;
      pTail = newNode;
      return;
    }

    Node *pCurrent = pHead->pNext;
    while (pCurrent != nullptr)
    {
      if (emp.ID < pCurrent->data.ID)
      {
        newNode->pNext = pCurrent;
        newNode->pPrev = pCurrent->pPrev;

        pCurrent->pPrev->pNext = newNode;
        pCurrent->pPrev = newNode;
        return;
      }
      pCurrent = pCurrent->pNext;
    }
  }

  bool DeleteNode(int ID)
  {
    Node *pCurrent = pHead;

    while (pCurrent != nullptr)
    {
      if (pCurrent->data.ID == ID)
        break;
      pCurrent = pCurrent->pNext;
    }
    if (pCurrent == nullptr)
      return false; // not found

    if (pHead == pTail)
      pHead = pTail = nullptr;  // only one element
    else if (pCurrent == pHead) // delete start node
    {
      pHead = pHead->pNext;
      pHead->pPrev = nullptr;
    }
    else if (pCurrent == pTail)
    {
      pTail = pTail->pPrev;
      pTail->pNext = nullptr;
    }
    else
    {
      pCurrent->pPrev->pNext = pCurrent->pNext;
      pCurrent->pNext->pPrev = pCurrent->pPrev;
    }
    delete pCurrent;
    return true;
  }

  Node *SearchList(int ID)
  {
    Node *pSearch = pHead;

    while (pSearch != nullptr)
    {
      if (pSearch->data.ID == ID)
        break;
      pSearch = pSearch->pNext;
    }
    return pSearch;
  }

  void DisplayNode(int ID)
  {
    Node *pDisplay = SearchList(ID);

    if (pDisplay != nullptr)
    {
      cout << "ID: " << pDisplay->data.ID << ", Name: " << pDisplay->data.name << ", Salary: " << pDisplay->data.salary << endl;
    }
  }

  void DisplayALL()
  {
    Node *pDisplayyAll = pHead;
    while (pDisplayyAll != nullptr)
    {
      cout << "ID: " << pDisplayyAll->data.ID << ", Name: " << pDisplayyAll->data.name << ", Salary: " << pDisplayyAll->data.salary << endl;
      pDisplayyAll = pDisplayyAll->pNext;
    }
  }

  int NodeNumber()
  {
    Node *pCount = pHead;
    int count = 0;

    while (pCount != nullptr)
    {
      count++;
      pCount = pCount->pNext;
    }
    return count;
  }

  Employee &operator[](int index)
  {
    Node *pIndexNode = pHead;

    for (int i = 0; i < index; i++)
    {
      if (pIndexNode == nullptr)
      {
        cout << "Index out of range";
        exit(1);
      }
      pIndexNode = pIndexNode->pNext;
    }
    if (pIndexNode == nullptr)
    {
      cout << "Index out of range";
      exit(1);
    }
    return pIndexNode->data;
  }

  SortedDDL &operator=(const SortedDDL &other)
  {
    if (this == &other)
      return *this;

    while (pHead != nullptr)
    {
      Node *temp = pHead;
      pHead = pHead->pNext;
      delete temp;
    }

    pTail = nullptr;

    Node *pCurrent = other.pHead;

    while (pCurrent != nullptr)
    {
      this->insertNode(pCurrent->data);
      pCurrent = pCurrent->pNext;
    }
    return *this;
  }

  ~SortedDDL()
  {
    Node *pTemp;
    while (pHead != nullptr)
    {
      pTemp = pHead;
      pHead = pHead->pNext;
      delete pTemp;
    }
    pTail = nullptr;
  }
};

class StackDLL : public DLL
{
public:
    void Push(const Employee &emp)
    {
        addNode(emp);
    }

    Employee Pop()
    {
        if (pTail != nullptr)
        {
            Employee emp = pTail->data;
            DeleteNode(pTail->data.ID);
            return emp;
        }
        else
        {
            cout << "Stack is empty!" << endl;
            exit(1);
        }
    }

    Employee Peek()
    {
        if (pTail != nullptr)
            return pTail->data;
        else
        {
            cout << "Stack is empty!" << endl;
            exit(1);
        }
    }
};



class Queue : public DLL
{
  public:
    void EnQ(const Employee &emp)
    {
        addNode(emp);
    }

    Employee Peek()
    {
        if (pHead != nullptr)
            return pHead->data;
        else
        {
            cout << "Queue is empty!" << endl;
            exit(1);
        }
    }

    Employee DeQ()
    {
        if (pHead != nullptr)
        {
            Employee emp = pHead->data;
            DeleteNode(pHead->data.ID);
            return emp;
        }
        else
        {
            cout << "Queue is empty!" << endl;
            exit(1);
        }
    }
};

int main()
{
  cout << "\n=== [1] Testing Standard DLL ===" << endl;
  DLL list1;

  cout << "--- Adding Employees ---" << endl;
  list1.addNode({101, "Ahmed", 5000});
  list1.addNode({102, "Mona", 7000});
  list1.addNode({103, "Ali", 4500});
  list1.DisplayALL();
  cout << "Total Nodes: " << list1.NodeNumber() << endl;

  cout << "\n--- Testing operator[] ---" << endl;
  cout << "Employee at Index 1 is: " << list1[1].name << " (Expected: Mona)" << endl;

  cout << "\n--- Testing Deep Copy (=) ---" << endl;
  DLL list2;
  list2 = list1;
  list2.DisplayALL();
  cout << "List 2 Count: " << list2.NodeNumber() << endl;

  cout << "Deleting ID 101 from List 1..." << endl;
  list1.DeleteNode(101);

  cout << "List 1 Count: " << list1.NodeNumber() << endl;
  cout << "List 2 Count: " << list2.NodeNumber() << endl;

  cout << "\n\n=== [2] Testing Sorted DLL ===" << endl;
  SortedDDL sortedList;

  cout << "--- Inserting---" << endl;

  sortedList.insertNode({50, "yara", 5000});
  sortedList.insertNode({10, "Ahmed", 2000});
  sortedList.insertNode({90, "Omar", 9000});

  cout << "Sorted Content:" << endl;
  sortedList.DisplayALL();

  cout << "\n--- Testing Search ---" << endl;
  Node *searchResult = sortedList.SearchList(30);
  if (searchResult)
    cout << "Found: " << searchResult->data.name << endl;
  else
    cout << "Not Found!" << endl;

  cout << "\n--- Testing Delete ---" << endl;
  cout << "Deleting 50 (Middle node)..." << endl;
  sortedList.DeleteNode(50);
  sortedList.DisplayALL();

  cout << "\nDeleting 10 (Head node)..." << endl;
  sortedList.DeleteNode(10);
  sortedList.DisplayALL();


  cout << "\n==================================================\n";
  cout << "\n=== Testing Stack (LIFO) ===" << endl;
  cout << "\n=== [1] Testing Stack (LIFO) ===" << endl;
  StackDLL myStack;


    cout << "Pushing" << endl;
    myStack.Push({10, "Ahmed", 5000});
    myStack.Push({20, "Mona", 7000});
    myStack.Push({30, "Ali", 4000}); 

    cout << "Top element is: " << myStack.Peek().name << " (Expected: Ali)" << endl;

    cout << "\nPopping elements:" << endl;
    
    Employee p1 = myStack.Pop();
    cout << "Popped: " << p1.name << " (Expected: Ali)" << endl;
    cout << "\n\n=== [2] Testing Queue (FIFO) ===" << endl;
    Queue myQueue;

    cout << "Enqueuing" << endl;
    myQueue.EnQ({1, "Ziad", 3000});
    myQueue.EnQ({2, "Sara", 5000});
    myQueue.EnQ({3, "Omar", 8000});

    cout << "Front element is: " << myQueue.Peek().name << " (Expected: Ziad)" << endl;

    cout << "\nDequeuing elements:" << endl;

    Employee q1 = myQueue.DeQ();
    cout << "Served: " << q1.name << " (Expected: Ziad)" << endl;

    Employee q2 = myQueue.DeQ();
    cout << "Served: " << q2.name << " (Expected: Sara)" << endl;

    Employee q3 = myQueue.DeQ();
    cout << "Served: " << q3.name << " (Expected: Omar)" << endl;

  return 0;
}
