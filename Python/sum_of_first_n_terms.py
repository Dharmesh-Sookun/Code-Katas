""" 
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum(). 
"""


def series_sum(n):
    if n == 0:
        return "0.00"
    denominator = 1
    sum = 0
    for _ in range(n):
        sum += (1/denominator)
        denominator += 3

    sum_str = str(round(sum, 2))
    sum_str_arr = sum_str.split(".")

    if len(sum_str_arr[1]) != 2:
        sum_str += "0"

    return sum_str


print(series_sum(1), "1.00")
print(series_sum(2), "1.25")
print(series_sum(3), "1.39")
