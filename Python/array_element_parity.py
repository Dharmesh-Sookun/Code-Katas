""" 
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck! 
"""


def solve(arr):

    for i in range(len(arr)):
        current_num = arr[i]
        count = 0
        for j in range(len(arr)):
            if i != j:
                next_number = arr[j]
                if next_number + current_num == 0:
                    count += 1

        if count == 0:
            return current_num


print(solve([1, -1, 2, -2, 3]), 3)
print(solve([-3, 1, 2, 3, -1, -4, -2]), -4)
print(solve([1, -1, 2, -2, 3, 3]), 3)
print(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
print(solve([-9, -105, -9, -9, -9, -9, 105]), -9)
