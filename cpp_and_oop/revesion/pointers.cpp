#include <iostream>
#include <string>
using namespace std;

struct Question {
    string text;
    string options[3];
    int correctOption;
};

int main() {
    int a = 1, b = 2, c = 3;
    int *arr[] = {&a, &b, &c};
    cout << *arr[1];
    cout << arr[1];
    return 0;
}