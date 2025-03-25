import {sum, subtraction, multiplication, division, factorial, isPrime, vogalCount, stringInversion, calculateAverage} from "./calculator.js"
import {test, expect} from "vitest";

test("sum", () => {
    expect(sum(2, 2)).toBe(4);
});

test("subtraction", () => {
    expect(subtraction(2, 2)).toBe(0);
});

test("multiplication", () => {
    expect(multiplication(2, 2)).toBe(4);
});

test("division", () => {
    expect(division(2, 2)).toBe(1)})
    expect(()=> division(2, 0)).toThrow(">:C");

test("factorial", () => {
    expect(factorial(2)).toBe(2);
})

test("isPrime", () => {
    expect(isPrime(2)).toBe(true);
})

test("vogalCount", () => {
    expect(vogalCount("SOL")).toBe(1);
})

test("stringInversion", () => {
    expect(stringInversion("SOL")).toBe("LOS")
})

test("calculateAverage", () => {
    expect(calculateAverage([10, 10, 10])).toBe(10)
})