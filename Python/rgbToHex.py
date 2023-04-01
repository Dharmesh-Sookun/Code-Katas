# '#{:02x}{:02x}{:02x}'.format( 120, 0 , 255 )

""" 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 

Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) # returns FFFFFF
rgb(255, 255, 300) # returns FFFFFF
rgb(0,0,0) # returns 000000
rgb(148, 0, 211) # returns 9400D3 
"""

import math


def rgb(r, g, b):

    if r > 255:
        r = 255
    elif r < 0:
        r = 0

    if g > 255:
        g = 255
    elif g < 0:
        g = 0

    if b > 255:
        b = 255
    elif b < 0:
        b = 0

    chart = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F',
    }

    hexValue = ''

    firstValueQuot = math.floor(r/16)
    firstValueRemainder = r % 16

    if firstValueQuot > 15:
        firstValueQuot = 15

    hexValue += chart[firstValueQuot]
    hexValue += chart[firstValueRemainder]

    secondValueQuot = math.floor(g/16)
    secondValueRemainder = g % 16

    if secondValueQuot > 15:
        secondValueQuot = 15

    hexValue += chart[secondValueQuot]
    hexValue += chart[secondValueRemainder]

    thirdValueQuot = math.floor(b/16)
    thirdValueRemainder = b % 16

    if thirdValueQuot > 15:
        thirdValueQuot = 15

    hexValue += chart[thirdValueQuot]
    hexValue += chart[thirdValueRemainder]

    return hexValue


print(rgb(148, 0, 211))
