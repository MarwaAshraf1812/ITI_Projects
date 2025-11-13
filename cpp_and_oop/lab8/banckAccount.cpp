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
    BankAccount() : accountHolderName("Unnamed"), accountNumber(nextIdentifier), balance(0.0)
    {
        nextIdentifier++;
        counter++;
        cout << "Default Account Created." << endl;
    }

    BankAccount(string name, double bal): accountHolderName(name), accountNumber(nextIdentifier), balance(bal)
    {
        nextIdentifier++;
        counter++;
        cout << "Account Created for: " << accountHolderName << endl;
    }


    // Delete copy constructor and copy assignment operator
    BankAccount(const BankAccount &other) = delete;
    BankAccount& operator=(const BankAccount &other) = delete;


    // Move constructor
    BankAccount(BankAccount &&other) noexcept
    {
        this->accountHolderName = other.accountHolderName;
        this->accountNumber = other.accountNumber;
        this->balance = other.balance;

        other.accountHolderName = "MovedAccount";
        other.accountNumber = 0;
        other.balance = 0.0;

        counter++;
    }


    // Move assignment operator
    BankAccount& operator=(BankAccount &&other) noexcept
    {
        if (this == &other) return *this;
        this->accountHolderName = other.accountHolderName;
        this->accountNumber = other.accountNumber;
        this->balance = other.balance;

        other.accountHolderName = "MovedAccount";
        other.accountNumber = 0;
        other.balance = 0.0;

        cout <<"Account Moved." << endl;
        return *this;
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


    ~BankAccount()
    {
        counter--;
        if (accountNumber != 0) {
            cout << "Account " << this->accountNumber << " (" << this->accountHolderName << ") closed." << endl;
        }
    }


    friend ostream &operator<<(ostream &out, const BankAccount &acc);
    friend istream& operator>>(istream& in, BankAccount& acc);

};


ostream &operator<<(ostream &out, const BankAccount &acc)
{
    out << "Account Holder: " << acc.accountHolderName << "\n";
    out << "Account Number: " << acc.accountNumber << "\n";
    out << "Balance: " << acc.balance << "\n";
    return out;
}

istream& operator>>(istream& in, BankAccount& acc) {
    cout << "Enter Account Holder Name: ";
    in >> acc.accountHolderName;
    cout << "Enter Initial Balance: ";
    in >> acc.balance;
    return in;
    }

int BankAccount::counter = 0;
int BankAccount::nextIdentifier = 1000;

int main()
{
    cout << "=== 1. Creating Accounts ===" << endl;
    BankAccount acc1("Ahmed Ali", 5000);
    BankAccount acc2("Sara Mohamed", 3000);

    cout << "\n=== 2. Checking Counter ===" << endl;
    BankAccount::getNumberOfAccounts();

    cout << "\n=== 3. Testing Move Constructor ===" << endl;
    BankAccount acc3 = move(acc2);
    cout << "Acc3 now has " << acc3 << endl;
    acc3.showAccount();

    cout << "Acc2 (After move): " << acc2 << endl;
    acc2.showAccount();

    cout << "\n=== 5. Operations ===" << endl;
    acc3.deposit(500).withdraw(200);
    acc3.showAccount();

    cout << "\n=== 6. End of Program ===" << endl;

    return 0;
}