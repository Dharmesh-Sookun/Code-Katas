""" 
Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
 """


def combineNumbers(array):
    if len(array) == 0:
        return 0
    result = ""
    for i in range(len(array)):
        result += str(array[i])

    return int(result)


def sum_arrays(array1, array2):
    if len(array1) == 0 and len(array2) == 0:
        return []
    total = combineNumbers(array1) + combineNumbers(array2)
    total_str = str(total)
    result = []
    for i in range(len(total_str)):
        result.append(int(total_str[i]))

    return result


print(sum_arrays([3, 2, 9], [1, 2]), [3, 4, 1])
print(sum_arrays([4, 7, 3], [1, 2, 3]), [5, 9, 6])
print(sum_arrays([1], [5, 7, 6]), [5, 7, 7])
print(sum_arrays([-3, 4, 2], [3, 4, 4]), [2])
print(sum_arrays([], []), [])
print(sum_arrays([0], []), [0])
print(sum_arrays([], [1, 2]), [1, 2])
