""" 
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 
"""


def longest(s1, s2):
    str_combined = s1 + s2
    unique_letters = dict()

    for index in range(len(str_combined)):
        current_letter = str_combined[index]
        unique_letters[current_letter] = True

    unique_letters_list = []

    for key in unique_letters:
        unique_letters_list.append(key)

    unique_letters_list.sort()

    sorted_str = ""

    for index in range(len(unique_letters_list)):
        sorted_str = sorted_str + unique_letters_list[index]

    return sorted_str


print(longest("aretheyhere", "yestheyarehere"), "aehrsty")
print(longest("loopingisfunbutdangerous",
              "lessdangerousthancoding"), "abcdefghilnoprstu")
print(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
