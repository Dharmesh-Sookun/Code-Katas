"""
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1) your referral bonus, and

2) the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
"""

import math


def beeramid(bonus, price):
    if price > bonus:
        return 0
    num_of_cans = math.floor(bonus / price)
    level = 1

    while num_of_cans > 0:
        if (level * level) > num_of_cans:
            break
        num_of_cans = num_of_cans - (level * level)
        level += 1

    return level - 1


print(beeramid(1500, 2), 12)
print(beeramid(5000, 3), 16)
print(beeramid(9, 2),  1)
print(beeramid(21, 1.5),  3)
print(beeramid(-1, 4), 0)

# def beeramid(bonus, price):
#     beers  = bonus // price
#     levels = 0

#     while beers >= (levels + 1) ** 2:
#         levels += 1
#         beers  -= levels ** 2

#     return levels
