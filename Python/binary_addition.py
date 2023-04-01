""" 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string. 
"""


def add_binary(a, b):
    sum = a + b
    return bin(sum)[2:]


print(add_binary(1, 1), "10")
print(add_binary(0, 1), "1")
print(add_binary(1, 0), "1")
print(add_binary(2, 2), "100")
print(add_binary(51, 12), "111111")
