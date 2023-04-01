""" It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. """


def remove_char(s):
    result_str = ""
    for i in range(len(s)):
        if i != 0 and i != len(s) - 1:
            result_str += s[i]
    
    return result_str


print(remove_char('eloquent'), 'loquen')
print(remove_char('country'), 'ountr')
print(remove_char('person'), 'erso')
print(remove_char('place'), 'lac')
print(remove_char('ok'), '')
