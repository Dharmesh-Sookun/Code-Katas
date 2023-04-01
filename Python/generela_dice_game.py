""" 
Generala is a dice game popular in South America. It's very similar to Yahtzee but with a different scoring approach. It is played with 5 dice, and the possible results are:

Result	Points	Rules	Samples
GENERALA	50	When all rolled dice are of the same value.	66666, 55555, 44444, 11111, 22222, 33333.
POKER	40	Four rolled dice are of the same value.	44441, 33233, 22262.
FULLHOUSE	30	Three rolled dice are of the same value, the remaining two are of a different value, but equal among themselves.	12121, 44455, 66116.
STRAIGHT	20	Rolled dice are in sequential order. Dice with value 1 is a wildcard that can be used at the beginning of the straight, or at the end of it.	12345, 23456, 34561, 13654, 62534.
Anything else	0	Anything else will return 0 points.	44421, 61623, 12346.
Please note that dice are not in order; for example 12543 qualifies as a STRAIGHT. Also, No matter what string value you get for the dice, you can always reorder them any order you need to make them qualify as a STRAIGHT. I.E. 12453, 16543, 15364, 62345 all qualify as valid STRAIGHTs.

Complete the function that is given the rolled dice as a string of length 5 and return the points scored in that roll. You can safely assume that provided parameters will be valid:

String of length 5,
Each character will be a number between 1 and 6 
"""


def checkForGenerala(dice):
    for i in range(len(dice) - 1):
        if dice[i] != dice[i + 1]:
            return False
    return True


def addToDict(dice):
    my_dict = {}
    for i in range(len(dice)):
        if dice[i] not in my_dict:
            my_dict[dice[i]] = 1
        else:
            my_dict[dice[i]] += 1
    return my_dict


def checkForPoker(dice):
    my_dict = addToDict(dice)
    return 4 in my_dict.values()


def checkForFullHouse(dice):
    my_dict = addToDict(dice)
    return len(my_dict) == 2 and 3 in my_dict.values()


def checkForStraight(dice):

    my_list = []
    for i in range(len(dice)):
        my_list.append(int(dice[i]))

    my_list.sort()

    if my_list[0] == 1:
        if my_list[1] == 1:
            return False
        my_list[0] = my_list[1] - 1

    if my_list[len(my_list) - 1] == 1:
        my_list[len(my_list) - 1] = my_list[len(my_list) - 1] + 1

    for i in range(len(my_list) - 1):
        if (my_list[i + 1] - my_list[i]) != 1:
            return False

    return True


def points(dice):

    if checkForGenerala(dice):
        return 50
    elif checkForPoker(dice):
        return 40
    elif checkForFullHouse(dice):
        return 30
    elif checkForStraight(dice):
        return 20
    else:
        return 0


print(points("55555"), 50)
print(points("66666"), 50)
print(points("11111"), 50)
print(points("22222"), 50)
print(points("33333"), 50)
print(points("44444"), 50)
print(points("44441"), 40)
print(points("33233"), 40)
print(points("22262"), 40)
print(points("12121"), 30)
print(points("44455"), 30)
print(points("66116"), 30)
print(points("12345"), 20)
print(points("23456"), 20)
print(points("34561"), 20)
print(points("13564"), 20)
print(points("62534"), 20)
print(points("44421"), 0)
print(points("61623"), 0)
print(points("12346"), 0)

print(points("34112"), 0)

print(points("51346"), 20)
