""" Write a function that takes in a string of one or more words, and returns the same string, 

but with all five or more letter words reversed (Just like the name of this Kata). 

Strings passed in will consist of only letters and spaces. 

Spaces will be included only when more than one word is present.

Examples: 
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    spinWords( "This is a test") => returns "This is a test" 
    spinWords( "This is another test" )=> returns "This is rehtona test" """


def spin_words(sentence):

    reversedStr = ''
    reversedSentence = ''

    splitStr = sentence.split()
    if len(splitStr) == 1:
        if(len(splitStr[0]) >= 5):
            for i in range(len(splitStr[0]) - 1, -1, -1):
                reversedStr += splitStr[0][i]
            return reversedStr
        else:
            return splitStr[0]

    elif len(splitStr) == 0:
        return ''
    else:
        for i in range(len(splitStr)):
            reversedStr = ''
            word = splitStr[i]
            if(len(word) >= 5):
                for j in range(len(word) - 1, -1, -1):
                    reversedStr += word[j]
                reversedSentence += reversedStr
                reversedSentence += ' '
            else:
                reversedSentence += word
                reversedSentence += ' '
        return reversedSentence.strip()


print(spin_words('This is another test'))
