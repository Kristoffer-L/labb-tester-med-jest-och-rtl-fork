import { describe, test, expect } from "@jest/globals";
import { sum, subtract, multiply, divide } from "../math";

describe("math operations", () => {

    test("sum", () => {
        expect(sum(1, 2)).toBe(3);
    });
    test("subtract", () => {
        expect(subtract(1, 2)).toBe(-1);
    });
    test("multiply", () => {
        expect(multiply(1, 2)).toBe(2);
    });
    test("divide", () => {
        expect(divide(1, 2)).toBe(0.5);
    });
    test("divide by zero", () => {
        expect(divide(1, 0)).toBe(Infinity);
    });
 
});