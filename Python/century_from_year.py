""" 
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!! 
"""


def century(year):
    year_as_str = str(year)
    year_norm = year_as_str.rjust(4, '0')

    last_2_digits = int(year_norm[-2:])

    first_n_digits = int(year_norm[:-2])

    if last_2_digits > 0:
        return first_n_digits + 1
    else:
        return first_n_digits


print(century(1705), 18)
print(century(1900), 19)
print(century(1601), 17)
print(century(2000), 20)
print(century(356), 4)
print(century(89), 1)
print(century(1236989), 12370)
