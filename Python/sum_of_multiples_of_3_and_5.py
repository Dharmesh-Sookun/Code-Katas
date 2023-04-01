""" 
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) 
"""


def find(n):

    total = 0

    for number in range(1, (n + 1)):
        if number % 3 == 0 or number % 5 == 0:
            total += number

    return total


print(find(5), 8)
print(find(10), 33)
