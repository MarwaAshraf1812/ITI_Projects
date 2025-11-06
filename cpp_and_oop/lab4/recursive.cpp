#include <iostream>
using namespace std;

int Fibonacci(int n) {

  if (n <= 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  
  return Fibonacci(n - 1) + Fibonacci(n - 2);
  /**
   * لو دخلنا 4
   * هتستدعي الفانكسن مرتين
   * الاولى ب 3
   * التانيه ب 2
   * الفانكسن اللي ب 3 هتستدعي مرتين برضو
   * الاولى ب 2
   * التانيه ب 1
   * الفانكسن اللي ب 2 هتستدعي مرتين
   * و هكذا لحد ما تفضل تكرر ده و تجمع الرقمين و في الاخر هتطلعلك الناتج
   * يبقي 0 1 1 2 3 5 8 ...
   * الناتج هيبقي 3
   */
}

void printDecimalToBinary(int n) {
  if (n == 0) {
    return;
  }
  if (n > 0) {
    printDecimalToBinary(n / 2);
    cout << (n % 2);
  }

/**
 * و ليكن دخلنا رقم 4
 * تاني مره هتستدعي الفانكسن بس المره دي هتكون الرقم ب 2
 * بعدين هتقسم 2 علي 2 هتديك 1
 * بعدين 1 علي 2 هتديك 0
 * لما توصل ل 0 هتخرج من الفانكسن و ترجع لل 1
 * و تطبع 1 % 2 = 1
 * بعدين ترجع لل 2 و تطبع 2 % 2 = 0
 * بعدين ترجع لل 4 و تطبع 4 % 2 = 0
 * يبقي الناتج 100
 */
}


int main() {
  int n;
  cout << "Enter a positive integer: ";
  cin >> n;

  cout << "The " << n << "-th Fibonacci number is: ";
  cout << Fibonacci(n) << endl; 
  cout << endl;

  cout << "---------------------------------------\n";


  cout << "Binary representation of " << n << " is: ";
  printDecimalToBinary(n);
  cout << endl;
  
  return 0;
}