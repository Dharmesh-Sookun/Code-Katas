""" 
Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant, when discriminant = 0, x1 = x2 = root = > return sum of both roots. There will always be valid arguments.

Quadratic equation - https: // en.wikipedia.org/wiki/Quadratic_equation 
"""

import math


def roots(a, b, c):
    d = (b ** 2) - (4 * a * c)

    if d < 0:
        return None
    elif d == 0:
        x = (-b + (math.sqrt(d))) / (2 * a)
        return round((2 * x), 2)
    else:
        x1 = (-b + (math.sqrt(d))) / (2 * a)
        x2 = (-b - (math.sqrt(d))) / (2 * a)
        return round((x1 + x2), 2)


print(roots(6, 3, 8), None)
print(roots(2, 11, -6), -5.5)
print(roots(5, -8, 3), 1.6)
print(roots(6, 4, 9), None)
print(roots(1, -2, -5.25), 2)
print(roots(3, -10, 5), 3.33)
print(roots(5, 2, 4), None)
print(roots(1, 4, 3), -4)
print(roots(2, 3, 1), -1.5)
print(roots(1, -4, 4), 4)
print(roots(1, 3, 9), None)
print(roots(1, -1, -20), 1)
print(roots(2, -4, -2), 2)
print(roots(6, 11, -35), -1.83)
print(roots(3, 4, 9), None)
print(roots(-4, -7, 12), -1.75)
print(roots(1, -1, -3), 1)
print(roots(5, -2, -9), 0.4)
print(roots(2, 8, 0), -4)
print(roots(3, 5, 10), None)
