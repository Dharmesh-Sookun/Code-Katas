""" 
Complete the solution so that it splits the string into pairs of two characters. 

If the string contains an odd number of characters then it should replace the missing second character of 
the final pair with an underscore ('_').

Examples:

solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef'] 
"""


def solution(s):

    if len(s) == 0:
        return []

    split_str = []
    str_pair = ''

    for i in range(len(s)):
        if i == 0:
            str_pair = s[i]

        elif i % 2 != 0:
            str_pair += s[i]

        else:
            split_str.append(str_pair)
            str_pair = ''
            str_pair = s[i]

    if len(str_pair) == 2:
        split_str.append(str_pair)
    else:
        str_pair += '_'
        split_str.append(str_pair)

    return split_str


print(solution(''))
