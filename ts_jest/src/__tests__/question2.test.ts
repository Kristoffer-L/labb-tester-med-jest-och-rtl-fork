import { describe, test, expect } from "@jest/globals";
import { howFast } from "../question1";
import { removeDuplicates } from "../question2";

describe("question1", () => {
  test("slow", () => {
    expect(howFast(20)).toBe("Slow");
  });
  test("Medium", () => {
    expect(howFast(50)).toBe("Medium");
  });
  test("Fast", () => {
    expect(howFast(100)).toBe("Fast");
  });
  test("Unknown", () => {
    expect(howFast(25)).toBe("Unknown");
  });
});

describe("question2", () => {
  test("removeDuplicates", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const removedDupsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(removeDuplicates(numbers)).toEqual(removedDupsNumbers);
  });
});
