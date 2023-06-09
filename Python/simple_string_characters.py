""" 
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
 """


def solve(s):
    count = [0, 0, 0, 0]

    for char in s:
        if char.isupper():
            count[0] += 1
        elif char.islower():
            count[1] += 1
        elif char.isnumeric():
            count[2] += 1
        else:
            count[3] += 1

    return count


print(solve("Codewars@codewars123.com"), [1, 18, 3, 2])
print(solve("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2])
print(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9])
print(
    solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9])
print(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10, 7, 3, 6])
print(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7, 13, 4, 10])
