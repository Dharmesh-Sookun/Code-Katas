""" 
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64. 
"""


def skiponacci(n):
    if n == 1:
        return "1"

    fib_seq = [1, 1]

    for i in range(2, n):
        next_fib = fib_seq[i - 1] + fib_seq[i - 2]
        fib_seq.append(next_fib)

    str_res = ""

    for i in range(len(fib_seq)):
        if i % 2 != 0:
            str_res += "skip"
        else:
            str_res += str(fib_seq[i])
        if i != len(fib_seq) - 1:
            str_res += " "

    return str_res


print(skiponacci(1), "1")
print(skiponacci(5), "1 skip 2 skip 5")
print(skiponacci(7), "1 skip 2 skip 5 skip 13")
