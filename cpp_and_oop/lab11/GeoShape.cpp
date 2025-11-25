#include <iostream>
#include <cmath>
#include <algorithm>

using namespace std;

class Geoshape {
protected:
    float dim1;
    float dim2;

public:
    Geoshape() {
        dim1 = 0;
        dim2 = 0;
    }

    Geoshape(float d1, float d2) {
        dim1 = d1;
        dim2 = d2;
    }

    void setDim1(float d) { dim1 = d; }
    void setDim2(float d) { dim2 = d; }
    float getDim1() { return dim1; }
    float getDim2() { return dim2; }

    virtual float calcArea() = 0;
    
    virtual float calcPerimeter() {
        return 0;
    }

    virtual float calcVolume() {
        return 0;
    }

    // for comparing two shapes based on area
    bool operator==(Geoshape& other) {
        return this->calcArea() == other.calcArea();
    }

    virtual ~Geoshape() {}
};

class Rect : public Geoshape {
public:
    Rect(float w, float h) : Geoshape(w, h) {}

    float calcArea() override {
        return dim1 * dim2;
    }

    float calcPerimeter() override {
        return 2 * (dim1 + dim2);
    }


};

class Circle : public Geoshape {
public:
    Circle(float r) : Geoshape(r, 0) {}

    float calcArea() override {
        return 3.14159 * dim1 * dim1;
    }

    float calcPerimeter() override {
        return 2 * 3.14159 * dim1;
    }
};

class Triangle : public Geoshape {
public:
    Triangle(float b, float h) : Geoshape(b, h) {}

    float calcArea() override {
        return 0.5 * dim1 * dim2;
    }

    float calcPerimeter() override {
        float hypotenuse = sqrt(pow(dim1 / 2, 2) + pow(dim2, 2)); 
        return dim1 + 2 * hypotenuse; 
    }
};

class Rhombus : public Geoshape {
public:
    Rhombus(float d1, float d2) : Geoshape(d1, d2) {}

    float calcArea() override {
        return 0.5 * dim1 * dim2;
    }

    float calcPerimeter() override {
        float side = sqrt(pow(dim1 / 2, 2) + pow(dim2 / 2, 2));
        return 4 * side;
    }
};

class Cube : public Geoshape {
public:
    Cube(float s) : Geoshape(s, s) {}

    float calcArea() override {
        return 6 * dim1 * dim1;
    }

    float calcVolume() override {
        return dim1 * dim1 * dim1;
    }

    float calcPerimeter() override {
        return 12 * dim1;
    }
};

void compareShapes(Geoshape* s1, Geoshape* s2) {
    if (s1->calcArea() > s2->calcArea()) {
        cout << "Shape 1 is larger than Shape 2" << endl;
    } else if (s1->calcArea() < s2->calcArea()) {
        cout << "Shape 2 is larger than Shape 1" << endl;
    } else {
        cout << "Both shapes have equal area" << endl;
    }
}

bool compareArea(Geoshape* s1, Geoshape* s2) {
    return s1->calcArea() < s2->calcArea();
};

int main() {
    Geoshape* shapes[4];

    shapes[0] = new Rect(10, 20);
    shapes[1] = new Circle(7);
    shapes[2] = new Triangle(10, 5);
    shapes[3] = new Cube(3);

    cout << "--- Initial Areas ---" << endl;
    for (int i = 0; i < 4; i++) {
        cout << "Shape " << i + 1 << " Area: " << shapes[i]->calcArea();
        if (shapes[i]->calcVolume() > 0) {
            cout << " | Volume: " << shapes[i]->calcVolume();
        }
        cout << endl;
    }

    sort(shapes, shapes + 4, compareArea);

    cout << "\n--- Sorted Areas (Ascending) ---" << endl;
    for (int i = 0; i < 4; i++) {
        cout << "Shape " << i + 1 << " Area: " << shapes[i]->calcArea() << endl;
    }

    cout << "\n--- Comparison Test ---" << endl;
    compareShapes(shapes[0], shapes[3]);

    cout << "\n--- Operator Overloading Test ---" << endl;
    if (*shapes[0] == *shapes[1]) {
        cout << "Shapes are equal" << endl;
    } else {
        cout << "Shapes are not equal" << endl;
    }

    for (int i = 0; i < 4; i++) {
        delete shapes[i];
    }

    return 0;
}