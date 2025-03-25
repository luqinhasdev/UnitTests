import {sum, subtraction, multiplication, division} from "./calculator.js"
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