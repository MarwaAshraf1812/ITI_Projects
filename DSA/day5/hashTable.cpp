#include <iostream>
#include <vector>
#include <list>
#include <functional>
#include <string>

using namespace std;

template<class keyType, class valueType>
class MapEntity {
  keyType key;
  valueType value;
public:
  MapEntity(keyType k, valueType v) {key = k; value = v;}
  keyType getKey() const {return key;}
  valueType getValue() const {return value;}
};

template<class keyType, class valueType>
class HashTable {
  vector<list<MapEntity<keyType, valueType>>> lists;
  int currentSize;

protected:
  int HashLocater(const keyType& k) const {
    hash<keyType> hashMaker;
    return hashMaker(k) % lists.size();
  }

public:
  explicit HashTable(int size = 50): lists(size) {
    currentSize = 0;
  }

  bool FindKey(const keyType &k) const {
    int indexLocation = HashLocater(k);
    const auto & Bucket = lists[indexLocation];
    auto itr = Bucket.begin();
    while (itr != Bucket.end()) {
      if (itr->getKey() == k) return true;
      itr++;
    }
    return false;
  }

  bool Insert(const keyType& k, const valueType & v) {
    if (FindKey(k)) return false;
    int indexLocation = HashLocater(k);
    lists[indexLocation].push_back(MapEntity<keyType, valueType>(k, v));
    currentSize++;
    return true;
  }

  bool RemoveEntity(const keyType& k) {
    int indexLocation = HashLocater(k);
    auto & Bucket = lists[indexLocation];
    auto itr = Bucket.begin();
    while (itr != Bucket.end()) {
      if (itr->getKey() == k) { 
          Bucket.erase(itr);
          currentSize--;
          return true;
        }
      itr++;
    }
    return false;
  }

  void MakeEmpty() {
    for (auto & lst: lists) lst.clear();
    currentSize = 0;
  }

  void Rehash() {
    vector<list<MapEntity<keyType, valueType>>> oldLists = lists;
    lists.resize(oldLists.size() * 2);
    for (auto & lst: lists) lst.clear();
    currentSize = 0;
    for (auto & lst: oldLists) {
      for (auto & entry: lst) {
        Insert(entry.getKey(), entry.getValue());
      }
    }
  }

  valueType LookUp(const keyType& k) const {
    int indexLocation = HashLocater(k);
    const auto & Bucket = lists[indexLocation];
    for (auto it = Bucket.begin(); it != Bucket.end(); it++) {
      if (it->getKey() == k) return it->getValue();
    }
    throw std::runtime_error("Key not found");
  }
};

int main() {
    HashTable<int, string> employees;
    employees.Insert(101, "Ahmed");
    employees.Insert(102, "Sara");

    cout << "Employee 101: " << employees.LookUp(101) << endl;
    
    if (employees.FindKey(102)) cout << "Sara is found!" << endl;

    employees.RemoveEntity(101);
    cout << "After removing 101, is he there? " << (employees.FindKey(101) ? "Yes" : "No") << endl;

    return 0;
}