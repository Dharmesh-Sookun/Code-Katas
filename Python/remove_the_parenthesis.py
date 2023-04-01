""" 
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear. 
"""

import re


def remove_parentheses(s):
    result = re.sub(r"\(.*\)", "", s)
    # print(result)
    return " " if result == "" else result


print(remove_parentheses(
    "example(unwanted thing)example"), "exampleexample")
print(remove_parentheses(
    "example (unwanted thing) example"), "example  example")
print(remove_parentheses("a (bc d)e"), "a e")
print(remove_parentheses("a(b(c))"), "a")
print(remove_parentheses(
    "hello example (words(more words) here) something"), "hello example  something")
print(remove_parentheses(
    "(first group) (second group) (third group)"), "  ")
