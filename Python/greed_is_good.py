"""
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it,
is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll.
For example, a "5" can only count as part of a triplet (contributing to the 500 points)
or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5, 1, 3, 4, 1   50 + 2 * 100 = 250
 1, 1, 1, 3, 1   1000 + 100 = 1100
 2, 4, 4, 5, 4   400 + 50 = 450
In some languages, it is possible to mutate the input to the function.
This is something that you should never do.
If you mutate the input, you will not be able to pass all the tests.

6, 6, 6, 5, 2 -> 650

5, 5, 5, 1, 5 -> 650

"""

import math


def score(dice):

    numCounter = dict()

    for num in dice:
        if num not in numCounter:
            numCounter[num] = 1
        else:
            oldCount = numCounter[num]
            oldCount += 1
            numCounter[num] = oldCount

    total_score = 0

    for key, value in numCounter.items():
        if key == 1:
            if value == 3:
                total_score += 1000
            elif value > 3:
                num = math.floor(value/3)
                total_score += (num * 1000)
                left = value - (3 * num)
                if left == 1:
                    total_score += 100
                else:
                    total_score += 0
            elif value == 1:
                total_score += 100
            elif value > 1 and value < 3:
                total_score += (value * 100)

        if key == 2:
            if value == 3:
                total_score += 200
            elif value > 3:
                num = math.floor(num/3)
                total_score += (num * 200)

        if key == 3:
            if value == 3:
                total_score += 300
            elif value > 3:
                num = math.floor(num/3)
                total_score += (num * 300)

        if key == 4:
            if value == 3:
                total_score += 400
            elif value > 3:
                num = math.floor(num/3)
                total_score += (num * 400)

        if key == 5:
            if value == 3:
                total_score += 500
            elif value > 3:
                num = math.floor(value / 3)
                total_score += (num * 500)
                left = value - (3 * num)
                if left == 1:
                    total_score += 50
            elif value == 1:
                total_score += 50
            elif value > 1 and value < 3:
                total_score += (value * 50)

        if key == 6:
            if value == 3:
                total_score += 600
            elif value > 3:
                num = math.floor(num/3)
                total_score += (num * 600)

    return total_score


print(score([5, 5, 5, 1, 5]))
