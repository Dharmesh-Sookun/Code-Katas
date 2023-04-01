""" 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 
"""


# def stray(arr):
#     seen = {}

#     for number in arr:
#         if number not in seen:
#             seen[number] = 1
#         else:
#             seen[number] += 1

#     for key in seen:
#         if seen[key] == 1:
#             return key


def stray(arr):
    first_num = arr[0]
    second_num = arr[1]
    third_num = arr[2]

    if first_num == second_num and third_num != first_num:
        return third_num
    elif first_num == third_num and second_num != first_num:
        return second_num
    elif second_num == third_num and first_num != second_num:
        return first_num
    else:
        for index in range(3, len(arr)):
            current_num = arr[index]
            if current_num != third_num:
                return current_num


print(stray([1, 1, 1, 1, 1, 1, 2]), 2)
print(stray([2, 3, 2, 2, 2]), 3)
print(stray([3, 2, 2, 2, 2]), 3)
