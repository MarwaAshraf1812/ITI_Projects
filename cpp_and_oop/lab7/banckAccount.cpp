#include <iostream>
using namespace std;

class BankAccount
{
    string accountHolderName;
    int accountNumber;
    double balance;
    static int counter;
    static int nextIdentifier;

public:
    BankAccount()
    {
        accountHolderName = " ";
        accountNumber = nextIdentifier;
        nextIdentifier++;
        balance = 0.0;
        counter++;
    }

    BankAccount(string name, double bal)
    {
        accountHolderName = name;
        accountNumber = nextIdentifier;
        nextIdentifier++;
        balance = bal;
        counter++;
    }

    BankAccount &deposit(double deb)
    {
        if (deb > 0)
            balance += deb;
        return *this;
    }

    BankAccount &withdraw(double val)
    {
        if( val > 0 && val <= balance)
            balance -= val;
        return *this;
    }

    void showAccount()
    {
        cout << "------------" << this->accountHolderName << "'s account------------\n";
        cout << "\nAccount Number: " << this->accountNumber;
        cout << "\nBalance: " << this->balance << endl;
    }

    void getBalance()
    {
        cout << "------------" << this->accountNumber << "'s account------------\n";
        cout << "Current Balance: " << this->balance << endl;
    }

    static void getNumberOfAccounts()
    {
        cout << "Number of accounts created: " << counter << endl;
    }
};

int BankAccount::counter = 0;
int BankAccount::nextIdentifier = 1000;

int main()
{
    BankAccount a1("Marwa", 500);
    BankAccount a2("Sara", 1000);

    a1.showAccount();
    cout << "-----------------------------------------------\n\n";
    a2.showAccount();

    cout << "-----------------------------------------------\n\n";

    a1.deposit(200).withdraw(100);
    a1.getBalance();

    cout << "-----------------------------------------------\n\n";

    a2.withdraw(300).deposit(500);
    a2.getBalance();


    cout << "===============================================\n";

    BankAccount::getNumberOfAccounts();

    return 0;
}
