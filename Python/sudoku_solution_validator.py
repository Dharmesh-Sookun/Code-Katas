""" 
Sudoku Background
Sudoku is a game played on a 9x9 grid. 
The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, 
and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing 
a Sudoku board, and returns true if it is a valid solution, or false otherwise. 
The cells of the sudoku board may also contain 0's, which will represent empty cells. 
Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false 
"""


def valid_solution(board):
    assert type(board) == list

    # First, we need to make sure that the grid is 9x9.
    if len(board) != 9:
        return None
    row_len = map(lambda x: len(x) == 9, board)
    if False in row_len:
        return None

    # next we need to make sure that the numbers are between 0 and 9
    max_len = map(max, board)
    min_len = map(min, board)
    more_than_ten = list(filter(lambda x: x > 9, max_len))
    less_than_zero = list(filter(lambda x: x < 0, min_len))

    if len(more_than_ten) or len(less_than_zero):
        return False

    # now we need to make sure that each number is present only one time in a row
    one_per_row = map(lambda x: len(set(x)) == 9, board)
    if False in one_per_row:
        return False

    # and next up is making sure that each number is present only one time in a column
    # to do that, we want to follow the previous procedure, but for it to be valid, we
    # shall first need to turn each column into a line
    columns_to_lines = []
    for i in range(0, 9):
        column = []
        for z in range(0, 9):
            column.append(board[i][z])
        columns_to_lines.append(column)
    one_per_column = map(lambda x: len(set(x)) == 9, columns_to_lines)
    if False in one_per_column:
        return False

    # for the last check, we need to ensure that each number is unique in the 3x3 grids
    # we can do this by creating a single 9 list element out of the 3x3 grid, and perform
    # the same procedure as above.
    three_times_three = []
    first_one = []
    second_one = []
    third_one = []
    times_break = 0
    for i in range(0, 9):
        first_one.append(board[i][0:3])
        second_one.append(board[i][3:6])
        third_one.append(board[i][6:9])
        times_break += 1
        if times_break > 2:
            three_times_three.append(first_one)
            three_times_three.append(second_one)
            three_times_three.append(third_one)
            first_one = []
            second_one = []
            third_one = []
            times_break = 0

    # collapse the lists because they now contain sublists, making it
    # slightly icky for the rest of the pipeline
    three_times_three = map(lambda l: sum(l, []), three_times_three)
    one_per_three_box = map(lambda x: len(set(x)) == 9, three_times_three)
    if False in one_per_three_box:
        return False

    return True


print(valid_solution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]))
