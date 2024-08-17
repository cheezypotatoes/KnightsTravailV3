/* eslint-disable no-restricted-syntax */
class Graph {
  constructor() {
    this.adjacencyList = {};
    this.test = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
  }

  getShortestPath(starting, target) {
    const queue = [[starting]];
    const visited = new Set();
    visited.add(starting);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === target) {
        return path;
      }

      for (const neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = path.slice();
          newPath.push(neighbor);
          queue.push(newPath);
        }
      }
    }
    return [];
  }
}

export default Graph;
