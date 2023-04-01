""" The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck! """


def solve(s):
    vowels = {
        "a": True,
        "e": True,
        "i": True,
        "o": True,
        "u": True
    }

    longest_len = 0
    current_count = 0

    for i in range(len(s)):
        current_char = s[i]
        if current_char in vowels:
            current_count += 1
        else:
            current_count = 0
        if current_count > longest_len:
            longest_len = current_count

    return longest_len


print(solve("codewarriors"), 2)
print(solve("suoidea"), 3)
print(solve("ultrarevolutionariees"), 3)
print(solve("strengthlessnesses"), 1)
print(solve("cuboideonavicuare"), 2)
print(solve("chrononhotonthuooaos"), 5)
print(solve("iiihoovaeaaaoougjyaw"), 8)
