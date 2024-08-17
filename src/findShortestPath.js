import Tile from './tile';
import Graph from './adjacencyList';

// Holds all nodes
const chessPiece = new Map();
const graph = new Graph();

// return node
function retrieveNode(nodeName) {
  const node = chessPiece.get(nodeName);
  return node;
}

// Record all connected edges to adjacency list
function RecordToAdjacencyList(queue, parentVertex) {
  // eslint-disable-next-line no-restricted-syntax
  for (const element of queue) {
    if (element !== undefined) {
      const elementName = `[${element.start[0]}, ${element.start[1]}]`;
      graph.addEdge(parentVertex, elementName);
    }
  }
}

function checkIfPassingLimit(titleLocation) {
  if (titleLocation[0] > 7 || titleLocation[0] < 0) {
    return null;
  } if (titleLocation[1] > 7 || titleLocation[1] < 0) {
    return null;
  }
  return titleLocation;
}

function setupVertex() {
  // Add vertexes in adjacency list for each key in hash map
  // eslint-disable-next-line no-restricted-syntax
  for (const key of chessPiece.keys()) {
    graph.addVertex(key);
  }
}

// Create node that collects all 8 possible moves
function setUpTileNodes() {
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const start = [i, j]; // If passing the limit then null
      const rightUpOne = checkIfPassingLimit([start[0] + 2, start[1] + 1]);
      const rightUpTwo = checkIfPassingLimit([start[0] + 1, start[1] + 2]);
      const leftUpOne = checkIfPassingLimit([start[0] + 2, start[1] - 1]);
      const leftUpTwo = checkIfPassingLimit([start[0] + 1, start[1] - 2]);
      const rightDownOne = checkIfPassingLimit([start[0] - 2, start[1] + 1]);
      const rightDownTwo = checkIfPassingLimit([start[0] - 1, start[1] + 2]);
      const leftDownOne = checkIfPassingLimit([start[0] - 2, start[1] - 1]);
      const leftDownTwo = checkIfPassingLimit([start[0] - 1, start[1] - 2]);

      // Create Node
      const tile = new Tile(
        start,
        leftUpOne,
        leftUpTwo,
        rightUpOne,
        rightUpTwo,
        rightDownOne,
        rightDownTwo,
        leftDownOne,
        leftDownTwo,
      );

      // Add to hash maps
      chessPiece.set(`[${i}, ${j}]`, tile);
    }
  }
  setupVertex();
}

// Get all 8 edges in the tile node and return as a list
function getAllConnectedNode(startingNode) {
  const queue = [];
  queue.push(retrieveNode(`[${startingNode.leftUpOne ? startingNode.leftUpOne.join(', ') : 'null'}]`));
  queue.push(retrieveNode(`[${startingNode.leftUpTwo ? startingNode.leftUpTwo.join(', ') : 'null'}]`));

  queue.push(retrieveNode(`[${startingNode.rightUpOne ? startingNode.rightUpOne.join(', ') : 'null'}]`));
  queue.push(retrieveNode(`[${startingNode.rightUpTwo ? startingNode.rightUpTwo.join(', ') : 'null'}]`));

  queue.push(retrieveNode(`[${startingNode.leftDownOne ? startingNode.leftDownOne.join(', ') : 'null'}]`));
  queue.push(retrieveNode(`[${startingNode.leftDownTwo ? startingNode.leftDownTwo.join(', ') : 'null'}]`));

  queue.push(retrieveNode(`[${startingNode.rightDownOne ? startingNode.rightDownOne.join(', ') : 'null'}]`));
  queue.push(retrieveNode(`[${startingNode.rightDownTwo ? startingNode.rightDownTwo.join(', ') : 'null'}]`));

  return queue;
}

function RecordAllEdgesToAdjacentList() {
  // Uses my own bfs to traverse in every tiles
  const visited = new Set();
  let queue = [];
  queue.push(retrieveNode('[0, 0]'));

  while (queue.length > 0) {
    const element = queue.shift();

    if (element !== undefined && element !== null) {
      const elementName = `[${element.start[0]}, ${element.start[1]}]`;
      if (!visited.has(elementName)) {
        // Get all 8 edges in the tile node and return as a list
        const connectedToCurrentElement = getAllConnectedNode(retrieveNode(elementName));
        RecordToAdjacencyList(connectedToCurrentElement, elementName, graph);
        queue = queue.concat(connectedToCurrentElement);
        queue = queue.filter((value) => value !== undefined);
        visited.add(elementName);
      }
    }
  }
}

function KnightsTravail(start, end) {
  setUpTileNodes(); // Setup node and create vertex key
  RecordAllEdgesToAdjacentList(); // Record All edges in each vertex
  const path = graph.getShortestPath(start, end); // Get shortest path via bfs
  return path;
}

export default KnightsTravail;
