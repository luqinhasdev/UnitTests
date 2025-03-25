export function sum(a, b)
{
    return a+b
}

export function subtraction(a, b)
{
    return a-b
}

export function multiplication(a, b)
{
    return a*b
}

export function division(a, b)
{
    if (b==0) throw new Error(">:C")
    return a/b
}

export function factorial(a)
{
    if (a === 0 || a === 1) {
        return 1;
        } else {
            return a * factorial(a - 1);
        }
    }

export function isPrime(a)
{
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false
        }
    }
    return true;
}

export function vogalCount(a)
{
    let counter = 0;
    const vogals = "aeiouAEIOU";
    for (let i = 0; i < a.length; i++){
        if (vogals.indexOf(a[i]) !== -1) {
            counter++;
        }
    }
    return counter;
}

export function stringInversion(a)
{
    return a.split('').reverse().join('');
}

export function calculateAverage(a)
{
    const sum = a.reduce((acc, num) => acc + num, 0);
    return a.length > 0 ? sum / a.length : 0;
}