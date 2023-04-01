""" 
You are given an array(which will have a length of at least 3, but could be very large) containing integers. 

The array is either entirely comprised of odd integers or entirely comprised of even integers except for 
a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) 
"""


def find_outlier(integers):

    if len(integers) < 3:
        return None

    numberParity = dict()

    for num in integers:
        if num % 2 == 0:
            numberParity[num] = 'even'
        else:
            numberParity[num] = 'odd'

    evenCount = 0
    oddCount = 0

    for value in numberParity.values():
        if value == 'even':
            evenCount += 1
        else:
            oddCount += 1

    if evenCount < oddCount:
        for key, value in numberParity.items():
            if value == 'even':
                return key
    elif oddCount < evenCount:
        for key, value in numberParity.items():
            if value == 'odd':
                return key
    else:
        return 1


print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))
