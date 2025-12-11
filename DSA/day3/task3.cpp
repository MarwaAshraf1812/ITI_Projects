#include <iostream>
using namespace std;
#include <algorithm>

struct Employee
{
  int ID;
  char name[50];
};

class Node
{
public:
  Employee data;
  Node *pLeft;
  Node *pRight;

  Node(const Employee &emp) : data(emp), pLeft(nullptr), pRight(nullptr) {}
};

class BST
{
private:
  Node *pTree;
  Node *AllocateNewNode(const Employee &emp)
  {
    Node *newNode = new Node(emp);
    if (newNode == nullptr)
      exit(1);

    newNode->pLeft = nullptr;
    newNode->pRight = nullptr;
    return newNode;
  }

  void DestroyTree(Node *pRoot)
  {
    if (pRoot != nullptr)
    {
      DestroyTree(pRoot->pLeft);
      DestroyTree(pRoot->pRight);
      delete pRoot;
    }
  }

  Node *_SearchNode(Node *pRoot, int ID)
  {
    if (pRoot == nullptr)
    {
      return nullptr;
    }

    if (pRoot->data.ID == ID)
    {
      return pRoot;
    }
    else if (ID < pRoot->data.ID)
    {
      return _SearchNode(pRoot->pLeft, ID);
    }
    else
    {
      return _SearchNode(pRoot->pRight, ID);
    }
  }

  void _InsertNodeRef(Node *&pRoot, const Employee emp)
  {
    if (pRoot == nullptr)
    {
      pRoot = AllocateNewNode(emp);
      return;
    }
    if (emp.ID == pRoot->data.ID)
    {
      cout << "Error: Employee ID " << emp.ID << " is a duplicate. Insertion aborted." << endl;
      return;
    }
    else if (emp.ID < pRoot->data.ID)
      _InsertNodeRef(pRoot->pLeft, emp);
    else if (emp.ID > pRoot->data.ID)
      _InsertNodeRef(pRoot->pRight, emp);
  }

  void _InsertWithPTR(Node *pParent, Node *pLeaf, Node *pNew)
  {
    if (pLeaf == nullptr)
    {
      if (pParent != nullptr)
      {
        if (pNew->data.ID < pParent->data.ID)
          pParent->pLeft = pNew;
        else
          pParent->pRight = pNew;
      }
      else
      {
        pTree = pNew;
      }
      return;
    }
    else if (pNew->data.ID == pLeaf->data.ID)
    {
      cout << "Error: Employee ID " << pNew->data.ID << " is a duplicate. Insertion aborted." << endl;
      delete pNew;
      return;
    }
    else if (pNew->data.ID < pLeaf->data.ID)
      _InsertWithPTR(pLeaf, pLeaf->pLeft, pNew);
    else if (pNew->data.ID > pLeaf->data.ID)
      _InsertWithPTR(pLeaf, pLeaf->pRight, pNew);
  }

  void _TraverseTree(Node *pRoot)
  {
    if (pRoot != nullptr)
    {
      _TraverseTree(pRoot->pLeft);
      cout << "ID: " << pRoot->data.ID << ", Name: " << pRoot->data.name << endl;
      _TraverseTree(pRoot->pRight);
    }
  }

  int _CountNodes(Node *pRoot)
  {
    if (pRoot == nullptr)
      return 0;
    return _CountNodes(pRoot->pLeft) + 1 + _CountNodes(pRoot->pRight);
  }

  int _Height(Node *PRoot)
  {
    if (PRoot == nullptr)
      return 0;
    int leftHeight = _Height(PRoot->pLeft);
    int rightHeight = _Height(PRoot->pRight);
    return max(leftHeight, rightHeight) + 1;
  }

  int _CountLevels(Node *pRoot)
  {
    if (pRoot == nullptr)
      return 0;
    if (pRoot->pLeft == nullptr && pRoot->pRight == nullptr)
      return 1;
    return _CountLevels(pRoot->pLeft) + _CountLevels(pRoot->pRight);
  }

  void _SearchAndDestroy(Node *&pRoot, int ID)
  {
    if (pRoot == nullptr)
      return;
    if (ID < pRoot->data.ID)
      _SearchAndDestroy(pRoot->pLeft, ID);
    else if (ID > pRoot->data.ID)
      _SearchAndDestroy(pRoot->pRight, ID);
    else
      _PerformDeletion(pRoot);
  }
  
  Node *_FindMax(Node *pRoot)
  {
    while (pRoot->pRight != nullptr)
      pRoot = pRoot->pRight;
    return pRoot;
  }

  void _PerformDeletion(Node *&pRoot)
  {
    Node *pDelete = pRoot;
    if (pRoot->pLeft == nullptr && pRoot->pRight == nullptr)
    {
      pRoot = nullptr;
      delete pDelete;
      return;
    }
    else if (pRoot->pLeft == nullptr)
    {
      pRoot = pRoot->pRight;
      delete pDelete;
      return;
    }
    else if (pRoot->pRight == nullptr)
    {
      pRoot = pRoot->pLeft;
      delete pDelete;
      return;
    }
    else
    {
      Node *pMax = _FindMax(pRoot->pLeft);
      pRoot->data = pMax->data;
      _SearchAndDestroy(pRoot->pLeft, pMax->data.ID);
    }
  }

  int _GetBalanceFactor(Node *pRoot)
  {
    if (pRoot == nullptr)
      return 0;
    return _Height(pRoot->pLeft) - _Height(pRoot->pRight);
  }

  bool _IsBalancedTree(Node *pRoot)
  {
    if (pRoot == nullptr)
      return true;

    int balancedFactor = _GetBalanceFactor(pRoot);

    // الشرط: الفرق يكون -1 أو 0 أو 1، وكما ولادها يكونوا موزونين
    if (abs(balancedFactor) <= 1 && _IsBalancedTree(pRoot->pLeft) && _IsBalancedTree(pRoot->pRight))
      return true;
    return false;
  }

  void _StoreInOrder(Node *pRoot, vector<Employee> &employees)
  {
    if (pRoot == nullptr)
      return;
    _StoreInOrder(pRoot->pLeft, employees);
    employees.push_back(pRoot->data); // store employees in vector
    _StoreInOrder(pRoot->pRight, employees);
  }

  Node *_BuiltBalancedTree(vector<Employee> &employees, int start, int end)
  {
    if (start > end)
      return nullptr;

    int mid = (start + end) / 2;
    Node *newNode = AllocateNewNode(employees[mid]);
    newNode->pLeft = _BuiltBalancedTree(employees, start, mid - 1);
    newNode->pRight = _BuiltBalancedTree(employees, mid + 1, end);
    return newNode;
  }

public:
  BST() : pTree(nullptr) {};

  void Insert(Employee emp)
  {
    _InsertNodeRef(pTree, emp);
  }

  void Insert_V2(Employee emp)
  {
    Node *newNode = AllocateNewNode(emp);
    // في البداية: Parent = null, Leaf = pTree (Root)
    _InsertWithPTR(nullptr, pTree, newNode);
  }

  void DisplayAll()
  {
    cout << "--- Tree Contents ---" << endl;
    _TraverseTree(pTree);
    cout << "---------------------" << endl;
  }

  Node *Search(int ID)
  {
    return _SearchNode(pTree, ID);
  }

  int GetCount() { return _CountNodes(pTree); }
  int GetHeight() { return _Height(pTree); }
  int GetLevels() { return _CountLevels(pTree); }

  void Delete(int ID)
  {
    _SearchAndDestroy(pTree, ID);
  }

  bool CheckBalance()
  {
    return _IsBalancedTree(pTree);
  }

  void ReBalance()
  {
    if (CheckBalance()) {
        cout << "Tree is already balanced." << endl;
        return;
    }
    cout << "Re-balancing tree..." << endl;

    vector<Employee> allEmployees;
    _StoreInOrder(pTree, allEmployees);

    DestroyTree(pTree);
    pTree = nullptr;

    pTree = _BuiltBalancedTree(allEmployees, 0, allEmployees.size() - 1);

    cout << "Tree has been re-balanced successfully!" << endl;
  }
  ~BST()
  {
    DestroyTree(pTree);
  }
};

/*int main()
{
  BST companyTree;

  cout << "========== Phase 1: Building Tree ==========" << endl;
  Employee e1 = {50, "CEO (Root)"};
  Employee e2 = {30, "Manager 1"};
  Employee e3 = {70, "Manager 2"};
  Employee e4 = {20, "Staff A"};
  Employee e5 = {40, "Staff B"};
  Employee e6 = {60, "Staff C"};
  Employee e7 = {80, "Staff D"};

  companyTree.Insert(e1);    // Root
  companyTree.Insert(e2);    // Left
  companyTree.Insert(e3);    // Right
  companyTree.Insert_V2(e4); // Left-Left (Using PTR method)
  companyTree.Insert_V2(e5); // Left-Right (Using PTR method)
  companyTree.Insert(e6);    // Right-Left
  companyTree.Insert(e7);    // Right-Right

  // Tree Structure now:
  //       50
  //     /    \
  //   30      70
  //  /  \    /  \
  // 20  40  60  80

  companyTree.DisplayAll();

  cout << "\n========== Phase 2: Statistics ==========" << endl;
  cout << "Total Nodes (Should be 7): " << companyTree.GetCount() << endl;
  cout << "Tree Height (Should be 3): " << companyTree.GetHeight() << endl;

  cout << "\n========== Phase 3: Duplicates ==========" << endl;
  Employee e_dup = {20, "Duplicate"};
  companyTree.Insert(e_dup);    // Should Error
  companyTree.Insert_V2(e_dup); // Should Error

  cout << "\n========== Phase 4: Searching ==========" << endl;
  int searchID = 40;
  Node *result = companyTree.Search(searchID);
  if (result)
    cout << "Found ID " << searchID << ": " << result->data.name << endl;
  else
    cout << "ID " << searchID << " Not Found!" << endl;

  result = companyTree.Search(99); // Not existing
  if (result)
    cout << "Found ID 99" << endl;
  else
    cout << "ID 99 Not Found (As Expected)" << endl;

  cout << "\n========== Phase 5: Deletion Logic ==========" << endl;

  // Case A: Delete Leaf Node (e.g., 20)
  cout << "[Delete 20] (Leaf Node)..." << endl;
  companyTree.Delete(20);
  companyTree.DisplayAll(); // Expect: 20 is gone.
    // Tree Structure now:
  //       50
  //     /    \
  //   30      70
  //  /  \    /  \
  // null  40  60  80

  // Case B: Delete Node with 1 Child
  // Let's add a node to make 80 have a child
  Employee e8 = {90, "Intern"};
  companyTree.Insert(e8);
  cout << "[Delete 80] (Node with 1 Right Child)..." << endl;
  companyTree.Delete(80); // Should be replaced by 90
  companyTree.DisplayAll();

  // Tree Structure now:
  //       50
  //     /    \
  //   30      70
  //  /  \    /  \
  // 20  40  60   90


  // Case C: Delete Node with 2 Children (e.g., 30)
  // 30 has 20(deleted) and 40? No wait, 20 is deleted.
  // Let's Insert 35 to give 30 two children again (Left was null, Right is 40)
  // Actually, currently 30 has only Right child (40). Let's use 70.
  // 70 has 60 and 90 (since 80 was replaced by 90).
  cout << "[Delete 70] (Node with 2 Children: 60 & 90)..." << endl;
  companyTree.Delete(70);
  // Expect: 70 replaced by max of left (which is 60), and 60 deleted from bottom.
  companyTree.DisplayAll();


  // Tree Structure now:
  //       50
  //     /    \
  //   30      60
  //  /  \      \
  // 20  40     90

  // Case D: Delete Root (50) with 2 children
  cout << "[Delete 50] (The Root)..." << endl;
  companyTree.Delete(50);
  companyTree.DisplayAll();

  cout << "Total Nodes: " << companyTree.GetCount() << endl;

  return 0;
}*/

int main() {
    BST companyTree;

    companyTree.Insert({ 10, "A" });
    companyTree.Insert({ 20, "B" });
    companyTree.Insert({ 30, "C" });
    companyTree.Insert({ 40, "D" });
    companyTree.Insert({ 50, "E" });

    cout << "Height before balancing: " << companyTree.GetHeight() << endl;
    
    if (companyTree.CheckBalance())
        cout << "Status: Balanced" << endl;
    else
        cout << "Status: Not Balanced!" << endl;

    companyTree.ReBalance();

    cout << "\nHeight after balancing: " << companyTree.GetHeight() << endl;
    
    if (companyTree.CheckBalance())
        cout << "Status: Balanced" << endl;
    else
        cout << "Status: Not Balanced!" << endl;

    companyTree.DisplayAll();

    return 0;
}

