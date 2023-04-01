/* You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.

Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases. */

function pathFinder(string) {
  const maze = generateMazeFromString(string);
  const queue = [];
  const startNode = new Node(0, 0, maze);
  startNode.visited = true;
  queue.push(startNode);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.isGoal) {
      return numOfSteps(current);
    }
    current.getNeighbours();
    for (let i = 0; i < current.neighbours.length; i++) {
      const neighbour = current.neighbours[i];
      if (!neighbour.visited) {
        neighbour.parent = current;
        neighbour.visited = true;
        queue.push(neighbour);
      }
    }
  }
  return false;
}

function generateMazeFromString(string) {
  const maze = [];
  const rows = string.split("\n");
  for (let i = 0; i < rows.length; i++) {
    const currentRow = rows[i];
    const newRow = [];
    for (let j = 0; j < currentRow.length; j++) {
      const currentCol = currentRow[j];
      newRow.push(currentCol);
    }
    maze.push(newRow);
  }

  return maze;
}

function numOfSteps(node) {
  let currentParent = node.parent;
  let count = 0;
  while (currentParent != null) {
    currentParent = currentParent.parent;
    count++;
  }
  return count;
}

class Node {
  constructor(row, col, maze) {
    this.row = row;
    this.col = col;
    this.maze = maze;
    this.parent = null;
    this.isGoal = this.row == maze.length - 1 && this.col == maze.length - 1;
    this.visited = false;
    this.neighbours = [];
  }

  getNeighbours() {
    if (this.row - 1 > -1 && this.maze[this.row - 1][this.col] === ".")
      this.neighbours.push(new Node(this.row - 1, this.col, this.maze));
    if (
      this.col + 1 < this.maze.length &&
      this.maze[this.row][this.col + 1] === "."
    )
      this.neighbours.push(new Node(this.row, this.col + 1, this.maze));
    if (
      this.row + 1 < this.maze.length &&
      this.maze[this.row + 1][this.col] === "."
    )
      this.neighbours.push(new Node(this.row + 1, this.col, this.maze));
    if (this.col - 1 > -1 && this.maze[this.row][this.col - 1] === ".")
      this.neighbours.push(new Node(this.row, this.col - 1, this.maze));
  }
}

// console.log(
//   generateMazeFromString(`.W.
// .W.
// ...`)
// );

// console.log(
//   pathFinder(
//     `.W.
// .W.
// ...`
//   ),
//   4
// );

// console.log(
//   pathFinder(
//     `.W.
// .W.
// W..`
//   ),
//   false
// );

// console.log(
//   pathFinder(
//     `......
// ......
// ......
// ......
// ......
// ......`
//   ),
//   10
// );

// console.log(
//   pathFinder(
//     `......
// ......
// ......
// ......
// .....W
// ....W.`
//   ),
//   false
// );
