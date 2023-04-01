""" 
Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 """


def repeat_str(repeat, string):
    result_str = ""

    for count in range(1, repeat + 1):
        result_str += string

    return result_str


print(repeat_str(4, 'a'), 'aaaa')
print(repeat_str(3, 'hello '), 'hello hello hello ')
print(repeat_str(2, 'abc'), 'abcabc')
