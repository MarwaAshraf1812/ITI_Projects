#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    int n, row, col, next_row, next_col;

    cout << "Enter odd n (e.g. 3,5,7): ";
    if (!(cin >> n))
        return 0;

    if (n <= 0 || n % 2 == 0) {
        cout << "Error: n must be a positive odd integer.\n";
        return 0;
    }

    //clear screen
    cout << "\033[2J\033[H";
    cout.flush();


    int n_squared = n * n;
    int cell_width = to_string(n_squared).length() + 1;
    row = 0;
    col = n / 2;

    const int start_row_cell = 4;
    const int start_col_cell = 4;

    cout << "Magic Square of size " << n << ":\n\n";

    for (int num = 1; num <= n_squared; num++) {
        int screen_col = (col * cell_width) + start_col_cell;
        int screen_row = row + start_row_cell;

        cout << "\033[" << screen_row << ";" << screen_col << "H";
        cout.flush();

        cout << setw(cell_width - 1) << num;

        next_row = row - 1;
        next_col = col + 1;

        if (next_row < 0)
            next_row = n - 1;
        if (next_col == n)
            next_col = 0;

        if (num % n == 0) {
            row = (row + 1) % n;
        } else {
            row = next_row;
            col = next_col;
        }
    }

    cout << "\033[" << (start_row_cell + n + 2) << ";1H";
    cout << "\nDone!\n";

    return 0;
}
