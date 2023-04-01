""" F
riday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
Note: In Ruby years will start from 1593. 
"""

import datetime
import calendar


def unlucky_days(year):
    month = 1
    day = 1
    first_day = datetime.datetime(year, month, day).strftime("%A")

    while first_day != "Friday":
        day += 1
        first_day = datetime.datetime(year, month, day).strftime("%A")

    num_of_fri_13 = 0

    while month <= 12:
        max_num_days = calendar.monthrange(year, month)[1]
        if day == 13:
            num_of_fri_13 += 1

        if day > max_num_days:
            month += 1
            day -= max_num_days

        day += 7

    return num_of_fri_13


print(unlucky_days(2015), 3)
print(unlucky_days(1986), 1)
