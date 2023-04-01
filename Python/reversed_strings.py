""" 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow' 
"""


def solution(string):
    reversed_str = ""

    for index in range(len(string) - 1, -1, -1):
        reversed_str += string[index]

    return reversed_str


print(solution('world'), 'dlrow')
print(solution('hello'), 'olleh')
print(solution(''), '')
print(solution('h'), 'h')
