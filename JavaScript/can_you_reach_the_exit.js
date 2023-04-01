/* 
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases. 
*/

/* 
    [[0, 1 , 2],
     [0, 1 , 2],
     [0, 1 , 2],
     [0, 1 , 2],
     [0, 1 , 2]
    ]

    i - 1, j
    i + 1, j
    i, j - 1
    i, j + 1

*/

// NOT WORKING.......
//TODO: FIX IT.....

// function pathFinder(maze) {
//   const grid_arr = createGridArr(maze);
//   return doDFS(grid_arr);
// }

// function createGridArr(string) {
//   const string_arr = string.split("\n");
//   const grid = [];
//   for (let i = 0; i < string_arr.length; i++) {
//     const cells_arr = string_arr[i].trim();
//     const cell = [];
//     for (let j = 0; j < cells_arr.length; j++) {
//       cell.push(cells_arr[j]);
//     }
//     grid.push(cell);
//   }
//   return grid;
// }

// class Node {
//   constructor(row, col, grid) {
//     this.row = row;
//     this.col = col;
//     this.grid = grid;
//     this.value = grid[this.row][this.col];
//     this.getNeighbours = function () {
//       const neighbours = [];
//       if (this.col - 1 > -1) {
//         neighbours.push(new Node(this.row, this.col - 1, grid));
//       }

//       if (this.col + 1 < this.grid.length) {
//         neighbours.push(new Node(this.row, this.col + 1, grid));
//       }

//       if (this.row - 1 > -1) {
//         neighbours.push(new Node(this.row - 1, this.col, grid));
//       }

//       if (this.row + 1 < this.grid.length) {
//         neighbours.push(new Node(this.row + 1, this.col, grid));
//       }

//       return neighbours;
//     };
//   }
// }

// function doDFS(grid) {
//   const start = new Node(0, 0, grid);
//   const stack = [];
//   stack.push(start);
//   const visited = {};

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.row == grid.length - 1 && current.col == grid.length - 1) {
//       return true;
//     }
//     if (visited[current] == undefined) {
//       visited[current] = true;
//       const current_neighbours = current.getNeighbours();
//       for (let i = 0; i < current_neighbours.length; i++) {
//         const current_neighbour = current_neighbours[i];
//         if (current_neighbour.value != "W") {
//           stack.push(current_neighbour);
//         }
//       }
//     }
//   }
//   return false;
// }

// function pathFinder(maze) {
//   const grid = generateMazeGrid(maze);
//   const startNode = new Node(0, 0, grid);
//   const queue = [];
//   startNode.visited = true;
//   queue.push(startNode);

//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.row == grid.length - 1 && current.col == grid.length - 1) {
//       return true;
//     }
//     const neighbours = current.generateNeighbours();
//     for (let i = 0; i < neighbours.length; i++) {
//       const neighbour = neighbours[i];
//       if (!neighbour.visited) {
//         neighbour.visited = true;
//         if (neighbour.val != "W") {
//           queue.push(neighbour);
//         }
//       }
//     }
//   }
//   return false;
// }

// function generateMazeGrid(maze) {
//   const grid = [];
//   const subgrid = maze.split("\n");

//   for (let i = 0; i < subgrid.length; i++) {
//     const cells = subgrid[i].trim();
//     const subgridArr = [];
//     for (let j = 0; j < cells.length; j++) {
//       subgridArr.push(cells[j]);
//     }
//     grid.push(subgridArr);
//   }

//   return grid;
// }

// class Node {
//   constructor(row, col, grid) {
//     this.row = row;
//     this.col = col;
//     this.grid = grid;
//     this.val = grid[row][col];
//     this.visited = false;
//     this.generateNeighbours = function () {
//       const neighbours = [];
//       if (this.row + 1 < grid.length) {
//         neighbours.push(new Node(this.row + 1, this.col, this.grid));
//       }

//       if (this.row - 1 > -1) {
//         neighbours.push(new Node(this.row - 1, this.col, this.grid));
//       }

//       if (this.col + 1 < grid.length) {
//         neighbours.push(new Node(this.row, this.col + 1, this.grid));
//       }

//       if (this.col - 1 > -1) {
//         neighbours.push(new Node(this.row, this.col - 1, this.grid));
//       }
//       return neighbours;
//     };
//   }
// }

function pathFinder(maze) {
  const grid = createGrid(maze);
  const graph = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const node = new Node(i, j, grid.length);
      node.setSymbol(grid[i][j]);
      graph.push(node);
    }
  }

  graph.forEach((node) => {
    node.getNeighbours();
  });

  const start = graph[0];
  const queue = [];
  start.visited = true;
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.row == grid.length - 1 && current.col == grid.length - 1) {
      return true;
    }
    for (let i = 0; i < current.neighbours.length; i++) {
      const neighbour = current.neighbours[i];
      if (!neighbour.visited && neighbour.symbol != "W") {
        neighbour.visited = true;
        queue.push(neighbour);
      }
    }
  }
  return false;
}

class Node {
  constructor(row, col, size) {
    this.row = row;
    this.col = col;
    this.size = size;
    this.visited = false;
    this.neighbours = [];
  }

  getNeighbours() {
    if (this.col + 1 < this.size)
      this.neighbours.push(new Node(this.row, this.col + 1, this.size));

    if (this.row + 1 < this.size)
      this.neighbours.push(new Node(this.row + 1, this.col, this.size));

    if (this.col - 1 > -1)
      this.neighbours.push(new Node(this.row, this.col - 1, this.size));

    if (this.row - 1 > -1)
      this.neighbours.push(new Node(this.row - 1, this.col, this.size));
  }

  setSymbol(symbol) {
    this.symbol = symbol;
  }
}

function createGrid(maze) {
  const grid = [];
  const rows = maze.split("\n");
  const size = rows.length;

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    row = row.trim();
    const gridRow = [];
    for (let j = 0; j < row.length; j++) {
      gridRow.push(row[j]);
    }
    grid.push(gridRow);
  }
  return grid;
}

// console.log(
//   pathFinder(`.W.
//     .W.
//     ...`),
//   true
// );

// console.log(
//   pathFinder(`......
//        ......
//        ......
//        ......
//        ......
//        ......`),
//   true
// );

// console.log(pathFinder(".W.\n.W.\nW.."));

// console.log(
//   pathFinder(
//     `.W.
//     .W.
//     ...`
//   ),
//   true
// );

console.log(
  pathFinder(
    `.W.
    .W.
    W..`
  ),
  false
);

// console.log(
//   pathFinder(
//     `......
//     ......
//     ......
//     ......
//     ......
//     ......`
//   ),
//   true
// );

console.log(
  pathFinder(
    `......
    ......
    ......
    ......
    .....W
    ....W.`
  ),
  false
);
