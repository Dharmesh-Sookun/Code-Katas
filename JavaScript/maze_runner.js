/* Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe! */

function mazeRunner(maze, directions) {
  const start = 2;
  const end = 3;
  let currentPos = {};
  const endPos = {};

  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      const currentElement = maze[row][col];
      if (currentElement == start) {
        currentPos["x"] = col;
        currentPos["y"] = row;
      } else if (currentElement == end) {
        endPos["x"] = col;
        endPos["y"] = row;
      }
    }
  }

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    switch (direction) {
      case "N":
        currentPos["y"] -= 1;
        break;

      case "S":
        currentPos["y"] += 1;
        break;

      case "E":
        currentPos["x"] += 1;
        break;

      case "W":
        currentPos["x"] -= 1;
        break;
    }

    if (currentPos["x"] == endPos["x"] && currentPos["y"] == endPos["y"])
      return "Finish";
    if (currentPos["x"] >= maze.length || currentPos["y"] >= maze.length)
      return "Dead";
    if (currentPos["x"] < 0 || currentPos["y"] < 0) return "Dead";
    if (maze[currentPos["y"]][currentPos["x"]] == 1) return "Dead";
  }
  return "Lost";
}

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]),
  "Finish"
);
console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "E",
    "E",
    "N",
    "N",
    "E",
  ]),
  "Finish"
);
console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "E",
    "E",
    "E",
    "W",
    "W",
  ]),
  "Finish"
);

console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead");
console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ]),
  "Dead"
);

console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Lost");
