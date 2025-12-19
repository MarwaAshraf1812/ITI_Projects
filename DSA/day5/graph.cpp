#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <string>

using namespace std;

template<class VertexType>
class Graph {
    int numVertices;
    VertexType vertices[50];
    int edegs[50][50];
    bool marks[50];

public:
    Graph() { 
        numVertices = 0; 
        for (int i = 0; i < 50; i++) {
            marks[i] = false;
            for (int j = 0; j < 50; j++) edegs[i][j] = 0;
        }
    }

    int GetIndex(const VertexType& vertex) {
        for (int i = 0; i < numVertices; i++) {
            if (vertices[i] == vertex) return i;
        }
        return -1;
    }

    void AddVertex(const VertexType& vertex) {
        if (numVertices >= 50) return;
        vertices[numVertices] = vertex;
        numVertices++;
    }

    void AddEdge(VertexType fromVertex, VertexType toVertex, int Weight) {
        int from = GetIndex(fromVertex);
        int to = GetIndex(toVertex);
        if (from != -1 && to != -1) {
            edegs[from][to] = Weight;
        }
    }

    void GetAdjVertices(VertexType vertex, queue<VertexType>& VertexQ) {
        int from = GetIndex(vertex);
        if (from == -1) return;
        for (int i = 0; i < numVertices; i++) {
            if (edegs[from][i] != 0) VertexQ.push(vertices[i]);
        }
    }

    void ClearMarks() {
        for (int i = 0; i < numVertices; i++) marks[i] = false;
    }

    void MarkVertex(VertexType vertex) {
        int idx = GetIndex(vertex);
        if (idx != -1) marks[idx] = true;
    }

    bool IsMarked(VertexType vertex) {
        int idx = GetIndex(vertex);
        return (idx != -1) ? marks[idx] : false;
    }

    // --- 1. Depth First Search ---
    void DepthFirstSearch(const VertexType& startVertex, const VertexType& endVertex) {
        stack<VertexType> s;
        queue<VertexType> adjQ;
        bool found = false;

        ClearMarks();
        s.push(startVertex);

        cout << "DFS Path: ";
        while (!s.empty() && !found) {
            VertexType current = s.top();
            s.pop();

            if (current == endVertex) {
                cout << current << " [TARGET FOUND!]";
                found = true;
            } else if (!IsMarked(current)) {
                MarkVertex(current);
                cout << current << " -> ";
                GetAdjVertices(current, adjQ);
                while (!adjQ.empty()) {
                    VertexType neigh = adjQ.front();
                    adjQ.pop();
                    if (!IsMarked(neigh)) s.push(neigh);
                }
            }
        }
        if (!found) cout << "No path exists.";
        cout << endl;
    }

    // --- 2. Dijkstra Algorithm ---
    void Dijkstra(const VertexType& startVertex) {
        int n = numVertices;
        int dist[50];
        bool visited[50];

        for (int i = 0; i < n; i++) {
            dist[i] = 1000000;
            visited[i] = false;
        }

        int sIdx = GetIndex(startVertex);
        if (sIdx == -1) return;
        dist[sIdx] = 0;

        for (int count = 0; count < n; count++) {
            int u = -1;
            for (int i = 0; i < n; i++) {
                if (!visited[i] && (u == -1 || dist[i] < dist[u])) u = i;
            }

            if (u == -1 || dist[u] == 1000000) break;
            visited[u] = true;

            for (int v = 0; v < n; v++) {
                if (edegs[u][v] != 0) {
                    if (dist[u] + edegs[u][v] < dist[v]) {
                        dist[v] = dist[u] + edegs[u][v];
                    }
                }
            }
        }

        cout << "Shortest Distances from " << startVertex << ":" << endl;
        for (int i = 0; i < n; i++) {
            cout << "  To " << vertices[i] << ": " << (dist[i] == 1000000 ? -1 : dist[i]) << endl;
        }
    }
};

int main() {
    Graph<string> map;

    map.AddVertex("A");
    map.AddVertex("B");
    map.AddVertex("C");
    map.AddVertex("D");
    map.AddVertex("E");

    map.AddEdge("A", "B", 10);
    map.AddEdge("A", "C", 5);
    map.AddEdge("B", "D", 1);
    map.AddEdge("C", "B", 2);
    map.AddEdge("C", "D", 9);
    map.AddEdge("D", "E", 4);
    map.AddEdge("C", "E", 20);

    cout << "--- Testing Graph Algorithms ---" << endl;

    map.DepthFirstSearch("A", "E");

    cout << endl;

    map.Dijkstra("A");

    return 0;
}