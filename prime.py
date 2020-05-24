#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import random
import math

class PrimeNumber:

    def __init__(self):
        self.primes = [3, 5, 7]
        self.normal = [self.getRand(), self.getRand(), self.getRand()]

    #Random integer between 1-10
    def getRand(self) -> int:
        return random.randrange(1,11)

    #A
    def primeFactor(self) -> int:
        return ((self.primes[0]**self.normal[0]) * (self.primes[1]**self.normal[1]) * (self.primes[2]**self.normal[2]))

    #Positive full divisor
    def fullDivisor(self) -> int:
        return ((self.normal[0]+1) * (self.normal[1]+1) * (self.normal[2]+1))

    #Sum of positive full divisor
    def fullDivisorSum(self) -> int:
        return ( (((self.primes[0]**(self.normal[0]+1))-1)/(self.primes[0]-1)) * (((self.primes[1]**(self.normal[1]+1))-1)/(self.primes[1]-1)) * (((self.primes[2]**(self.normal[2]+1))-1)/(self.primes[2]-1)) )

    #Sum of non-prime integer divisors
    def nonPrimeDivisor(self) -> int:
        return -(sum(self.primes))

    #Coprime integers with A
    def coprime(self) -> int:
        return self.primeFactor() * ((self.primes[0]-1)/self.primes[0]) * ((self.primes[1]-1)/self.primes[1]) * ((self.primes[2]-1)/self.primes[2])

    #Product of positive full divisors of number A
    def product(self) -> float:
        return math.sqrt((self.primeFactor() ** ( (self.normal[0]+1) * (self.normal[1]+1) * (self.normal[2]+1) )))

    #Check if a number is prime
    def isPrime(self, n) -> bool:
        #Corner case
        if (n <= 1):
            return false;

        #Check from 2 to n-1
        for i in range(2,n):
            if (n % i == 0):
                return false

        return true



if __name__ == '__main__':
    obj = PrimeNumber()
    print('Prime factor:', obj.primeFactor())
    print('Full divisor:', obj.fullDivisor())
    print('Sum of full divisor:', obj.fullDivisorSum())
    print('Non-Prime divisor:', obj.nonPrimeDivisor())
    print('Coprime: ', obj.coprime())
    #print(obj.product()) #it's too long to print
