#include <iostream>
#include "SimpleGraphics.h"
#include <cmath>
using namespace std;


/*
composition:
كل shape owns النقاط الخاصة بيه (Circle owns center, Rectangle owns corners)*/
class Point
{
    int x, y;

public:
    Point() : x(0), y(0) {};
    Point(int xCoord, int yCoord) : x(xCoord), y(yCoord) {};

    int getX() { return x; }
    int getY() { return y; }
    void setX(int xCoord) { x = xCoord; }
    void setY(int yCoord) { y = yCoord; }
};


class Circle
{
    int radius;
    Point *center; // composition

public:
    Circle(int x, int y, int r) : radius(r)
    {
        center = new Point(x, y);
    }

    void draw()
    {
        int cx = center->getX();
        int cy = center->getY();

        cout << "Drawing Circle at (" << cx << ", " << cy << ") with radius " << radius << endl;
        drawCircle(cx, cy, radius);
    }

    ~Circle()
    {
        delete center;
        cout << "Circle deleted." << endl;
    }
};

class Rectangle
{
    int width, height;
    Point *uperLeft; // composition
    Point *lowerRight;

public:
    Rectangle(int x1, int y1, int x2, int y2) : width(x2 - x1), height(y2 - y1)
    {
        uperLeft = new Point(x1, y1);
        lowerRight = new Point(x2, y2);
    }

    void draw()
    {

        int x1 = uperLeft->getX();
        int y1 = uperLeft->getY();
        int x2 = lowerRight->getX();
        int y2 = lowerRight->getY();
        cout << "Drawing Rectangle from (" << x1 << ", " << y1 << ") to (" << x2 << ", " << y2 << ")" << endl;
        drawRect(x1, y1, x2, y2);
    }

    ~Rectangle()
    {
        delete uperLeft;
        delete lowerRight;
        cout << "Rectangle deleted." << endl;
    }
};

class Triangle
{
    Point *p1;
    Point *p2;
    Point *p3;

public:
    Triangle(int x1, int y1, int x2, int y2, int x3, int y3)
    {
        p1 = new Point(x1, y1);
        p2 = new Point(x2, y2);
        p3 = new Point(x3, y3);
    }

    void draw()
    {
        int x1 = p1->getX();
        int y1 = p1->getY();
        int x2 = p2->getX();
        int y2 = p2->getY();
        int x3 = p3->getX();
        int y3 = p3->getY();

        drawTriangle(x1, y1, x2, y2, x3, y3);
    }
    ~Triangle()
    {
        delete p1;
        delete p2;
        delete p3;
        cout << "Triangle deleted." << endl;
    }
};

class Line
{
    Point *start;
    Point *end;

public:
    Line(int x1, int y1, int x2, int y2)
    {
        start = new Point(x1, y1);
        end = new Point(x2, y2);
    }

    void draw()
    {
        int x1 = start->getX();
        int y1 = start->getY();
        int x2 = end->getX();
        int y2 = end->getY();

        drawLine(x1, y1, x2, y2);
    }

    ~Line()
    {
        delete start;
        delete end;
        cout << "Line deleted." << endl;
    }
};
class Elipse
{
    Point *f1;
    Point *f2;
    int r;

public:
    Elipse(int x1, int y1, int x2, int y2, int sum) : r(sum)
    {
        f1 = new Point(x1, y1);
        f2 = new Point(x2, y2);
    }

    void draw()
    {
        int x1 = f1->getX();
        int y1 = f1->getY();
        int x2 = f2->getX();
        int y2 = f2->getY();

        int min_x = min(x1, x2) - r;
        int max_x = max(x1, x2) + r;
        int min_y = min(y1, y2) - r;
        int max_y = max(y1, y2) + r;

        for (int i = min_y; i <= max_y; i++)
        {
            for (int j = min_x; j <= max_x; j++)
            {
                float d1 = sqrt(pow(j - x1, 2) + pow(i - y1, 2));
                float d2 = sqrt(pow(j - x2, 2) + pow(i - y2, 2));
                if (abs((d1 + d2) - r) < 0.8)
                {
                    cout << "# ";
                }
                else
                {
                    cout << "  ";
                }
            }
            cout << endl;
        }
    }

    ~Elipse()
    {
        delete f1;
        delete f2;
        cout << "Elipse deleted." << endl;
    }
};

/*
aggregation:
Picture عنده arrays من الأشكال (Circle*, Rectangle*, …)
but it is not resbonsible about their life cycles*/
class Picture
{
    Circle   **circles;
    Rectangle **rectangles;
    Triangle **triangles;
    Line     **lines;
    Elipse   **elipses;

    int circleCount,  circleCap;
    int rectCount,    rectCap;
    int triangleCount, triangleCap;
    int lineCount,     lineCap;
    int elipseCount,   elipseCap;

public:

    Picture(int cCap, int rCap, int tCap, int lCap, int eCap)
        : circleCap(cCap), rectCap(rCap), triangleCap(tCap), 
        lineCap(lCap), elipseCap(eCap)
    {
        circles   = new Circle*[circleCap];
        rectangles = new Rectangle*[rectCap];
        triangles  = new Triangle*[triangleCap];
        lines      = new Line*[lineCap];
        elipses    = new Elipse*[elipseCap];

        circleCount = rectCount = triangleCount = lineCount = elipseCount = 0;
    }
    void add(Circle *c)
    {
        if (circleCount < circleCap)
            circles[circleCount++] = c;
        else 
            cout << "Circle capacity reached!" << endl;
        }


    void add(Rectangle *r)
    {
        if (rectCount < rectCap)
            rectangles[rectCount++] = r;
        else
            cout << "Rectangle capacity reached!" << endl;
    }

    void add(Triangle *t)
    {
        if (triangleCount < triangleCap)
            triangles[triangleCount++] = t;
        else
            cout << "Triangle capacity reached!" << endl;
    }

    void add(Line *l)
    {
        if (lineCount < lineCap)
            lines[lineCount++] = l;
        else
            cout << "Line capacity reached!" << endl;
    }

    void add(Elipse *e)
    {
        if (elipseCount < elipseCap)
            elipses[elipseCount++] = e;
        else
            cout << "Elipse capacity reached!" << endl;
    }

    void print()
    {
        cout << "Picture contains:" << endl;
        for (int i = 0; i < circleCount; i++)
            circles[i]->draw();
        for (int i = 0; i < rectCount; i++)
            rectangles[i]->draw();
        for (int i = 0; i < triangleCount; i++)
            triangles[i]->draw();
        for (int i = 0; i < lineCount; i++)
            lines[i]->draw();
        for (int i = 0; i < elipseCount; i++)
            elipses[i]->draw();
    }

    ~Picture()
    {
        delete[] circles;
        delete[] rectangles;
        delete[] triangles;
        delete[] lines;
        delete[] elipses;

        cout << "Picture deleted." << endl;
    }
};
int main()
{
    int cn, rn, tn, ln, en;
    initScreen();

    cout << "Enter capacity for Circles: ";
    cin >> cn;
    cout << "Enter capacity for Rectangles: ";
    cin >> rn;
    cout << "Enter capacity for Triangles: ";
    cin >> tn;
    cout << "Enter capacity for Lines: ";
    cin >> ln;
    cout << "Enter capacity for Ellipses: ";
    cin >> en;
    

    Picture *myPic = new Picture(cn, rn, tn, ln, en);

    // dynamic objs
    // myPic->add(new Rectangle(2, 2, 30, 10));
    // myPic->add(new Circle(40, 20, 5));
    // myPic->add(new Triangle(80, 25, 90, 8, 100, 25));
    // myPic->add(new Line(110, 5, 110, 35));
    // myPic->add(new Elipse(10, 5, 15, 5, 10));



myPic->add(new Rectangle(2, 2, 30, 10));    // r1
myPic->add(new Rectangle(40, 2, 70, 10));   // r2

myPic->add(new Circle(20, 25, 5));           // c1
myPic->add(new Circle(60, 25, 8));           // c2

myPic->add(new Triangle(80, 25, 90, 8, 100, 25)); // t1
myPic->add(new Triangle(10, 35, 20, 20, 30, 35)); // t2

myPic->add(new Line(110, 5, 110, 35));       // l1
myPic->add(new Line(0, 0, 50, 15));          // l2

myPic->add(new Elipse(10, 5, 15, 5, 10));    // e1
myPic->add(new Elipse(50, 10, 60, 10, 20));  // e2


    // static obj
    // Rectangle r2(2, 2, 30, 10);
    // r2.draw();
    // Circle c2(40, 20, 5);
    // c2.draw();



    myPic->print();

    renderScreen();
    return 0;
}