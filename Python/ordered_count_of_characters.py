""" 
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
 """


def ordered_count(inp):
    counts_dict = {}

    for char in inp:
        if char not in counts_dict:
            counts_dict[char] = 1
        else:
            old_count = counts_dict[char]
            old_count += 1
            counts_dict[char] = old_count

    return [(key, value) for key, value in counts_dict.items()]


print(ordered_count("abracadabra"))
