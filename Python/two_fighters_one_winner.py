""" 
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack(damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects. 
"""


class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack

    def __str__(self): return "Fighter({}, {}, {})".format(
        self.name, self.health, self.damage_per_attack)

    def attack(self, fighter):
        fighter.health -= self.damage_per_attack
    __repr__ = __str__


def declare_winner(fighter1, fighter2, first_attacker):
    second_attacker = None
    if fighter1.name == first_attacker:
        first_attacker = fighter1
        second_attacker = fighter2
    else:
        first_attacker = fighter2
        second_attacker = fighter1

    while first_attacker.health > 0 or second_attacker.health > 0:
        first_attacker.attack(second_attacker)
        if second_attacker.health <= 0:
            return first_attacker.name
        second_attacker.attack(first_attacker)
        if first_attacker.health <= 0:
            return second_attacker.name


print(declare_winner(Fighter("Lew", 10, 2),
                     Fighter("Harry", 5, 4), "Lew"), "Lew")

print(declare_winner(Fighter("Lew", 10, 2),
                     Fighter("Harry", 5, 4), "Harry"), "Harry")

print(declare_winner(Fighter("Harald", 20, 5),
                     Fighter("Harry", 5, 4), "Harry"), "Harald")

print(declare_winner(Fighter("Harald", 20, 5),
                     Fighter("Harry", 5, 4), "Harald"), "Harald")

print(declare_winner(Fighter("Jerry", 30, 3),
                     Fighter("Harald", 20, 5), "Jerry"), "Harald")

print(declare_winner(Fighter("Jerry", 30, 3),
                     Fighter("Harald", 20, 5), "Harald"), "Harald")
