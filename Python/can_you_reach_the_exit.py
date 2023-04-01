def path_finder(maze):
    maze_arr = generate_maze(maze)
    print(doDFS(maze_arr))


def generate_maze(maze_str):
    grid = []
    maze_str_split = maze_str.split("\n")

    for small_grid in maze_str_split:
        sub_grid = []
        for cell in small_grid:
            sub_grid.append(cell)
        grid.append(sub_grid)

    return grid


class Node:
    def __init__(self, row, col, val, graph):
        self.row = row
        self.col = col
        self.val = val
        self.graph = graph
        self.neighbours = []

    def generate_neighbours(self):
        if self.col + 1 < len(self.graph):
            self.neighbours.append(
                Node(self.row, self.col + 1, self.graph[self.row][self.col + 1], self.graph))

        if self.col - 1 > -1:
            self.neighbours.append(
                Node(self.row, self.col - 1, self.graph[self.row][self.col], self.graph))

        if self.row + 1 < len(self.graph):
            self.neighbours.append(
                Node(self.row + 1, self.col, self.graph[self.row + 1][self.col], self.graph))

        if self.row - 1 > -1:
            self.neighbours.append(
                Node(self.row - 1, self.col, self.graph[self.row - 1][self.col], self.graph))


def toString(node: Node):
    print("Row: ", node.row)
    print("Col: ", node.col)
    print("Val: ", node.val)
    print("Neighbours:", end='')
    for neighbour in node.neighbours:
        print("\t[", end='')
        print("Row: ", neighbour.row, end='')
        print(" Col: ", neighbour.col, end='')
        print(" Val: ", neighbour.val, end='')
        print("]")


def doDFS(grid):
    start_node = Node(0, 0, grid[0][0], grid)
    stack = []
    stack.append(start_node)
    found_path = False
    visited = {}

    while len(stack) > 0:
        current = stack.pop()

        if current.row == len(grid) - 1 and current.col == len(grid) - 1:
            found_path = True
            break

        if not visited[str(Node.id)]:
            visited[Node.id] = True
            Node.id += 1
            current.generate_neighbours()
            toString(current)
            for neighbour in current.neighbours:
                if neighbour.val == '.':
                    stack.append(neighbour)

    return found_path


a = "\n".join([
    ".W.",
    ".W.",
    "..."
])

# print(generate_maze(a))

b = "\n".join([
    ".W.",
    ".W.",
    "W.."
])

c = "\n".join([
    "......",
    "......",
    "......",
    "......",
    "......",
    "......"
])

d = "\n".join([
    "......",
    "......",
    "......",
    "......",
    ".....W",
    "....W."
])

print(path_finder(a), True)
# print(path_finder(b), False)
# print(path_finder(c), True)
# print(path_finder(d), False)
