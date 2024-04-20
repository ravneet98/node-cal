// tests/app.test.js

const request = require("supertest");
const app = require("../app");
const { add, subtract, multiply, divide } = require("../calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplies 4 * 6 to equal 24", () => {
  expect(multiply(4, 6)).toBe(24);
});

test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => {
    divide(10, 0);
  }).toThrow("Division by zero is not allowed");
});
