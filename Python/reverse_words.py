""" 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" == > "sihT si na !elpmaxe"
"double  spaces" == > "elbuod  secaps"
 """


def reverse_words(text):
    reversed_str = ""
    reverse_word = ""

    for index in range(len(text)):
        current_char = text[index]
        if current_char == " ":
            reversed_str += reverse_word
            if index < len(text) - 1:
                reversed_str += " "
            reverse_word = ""
        else:
            reverse_word = current_char + reverse_word

    return reversed_str + reverse_word


print(reverse_words('The quick brown fox jumps over the lazy dog.') ==
      'ehT kciuq nworb xof spmuj revo eht yzal .god')
print(reverse_words('apple') == 'elppa')
print(reverse_words('a b c d') == 'a b c d')
print(reverse_words('double  spaced  words') == 'elbuod  decaps  sdrow')
