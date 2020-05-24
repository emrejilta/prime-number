class PrimeNumber {

  constructor() {
    //Prime Numbers (a, b, c)
    this.primes = [3,5,7];

    //Other numbers (d, e, f)
    this.normal = [this.randomInt(1,10),this.randomInt(1,10),this.randomInt(1,10)];
  }

  //A
  primeFactor(){
    return ((this.primes[0]**this.normal[0]) * (this.primes[1]**this.normal[1]) * (this.primes[2]**this.normal[2]));
  }

  //Positive full divisor
  fullDivisor(){
    return ((this.normal[0]+1) * (this.normal[1]+1) * (this.normal[2]+1));
  }

  //Sum of positive full divisor
  fullDivisorSum(){
    return ( (((this.primes[0]**(this.normal[0]+1))-1)/(this.primes[0]-1)) * (((this.primes[1]**(this.normal[1]+1))-1)/(this.primes[1]-1)) * (((this.primes[2]**(this.normal[2]+1))-1)/(this.primes[2]-1)) );
  }

  //Sum of non-prime integer divisors
  nonPrimeDivisor(){
    return -(this.primes.reduce((a, b) => a + b, 0));
  }

  //Coprime integers with A
  coprime(){
    return this.primeFactor() * ((this.primes[0]-1)/this.primes[0]) * ((this.primes[1]-1)/this.primes[1]) * ((this.primes[2]-1)/this.primes[2]);
  }

  //Product of positive full divisors of number A
  product(){
    return Math.sqrt((this.primeFactor() ** ( (this.normal[0]+1) * (this.normal[1]+1) * (this.normal[2]+1) )));
  }

  //Random integer between 1-10
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  isPrime(n){
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
  }

}

const pm = new PrimeNumber();
console.log("Prime factor: " + pm.primeFactor());
console.log("Full divisor: " + pm.fullDivisor());
console.log("Sum of full divisor: " + pm.fullDivisorSum());
console.log("Non-prime divisor: " + pm.nonPrimeDivisor());
console.log("Coprime: " + pm.coprime());
//console.log(pm.product());  //it's too long to print
