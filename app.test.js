// app.test.js
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./app")

describe("capitalize", () => {
  test("capitalizes the first character of a string", () => {
    expect(capitalize("hello")).toBe("Hello")
    expect(capitalize("world")).toBe("World")
    expect(capitalize("javaScript")).toBe("JavaScript")
    expect(capitalize("")).toBe("")
  })
})

describe("reverseString", () => {
  test("reverses a given string", () => {
    expect(reverseString("hello")).toBe("olleh")
    expect(reverseString("world")).toBe("dlrow")
    expect(reverseString("12345")).toBe("54321")
    expect(reverseString("")).toBe("")
  })
})

describe("calculator", () => {
  test("performs basic arithmetic operations", () => {
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.subtract(5, 2)).toBe(3)
    expect(calculator.multiply(2, 3)).toBe(6)
    expect(calculator.divide(6, 2)).toBe(3)
    expect(()=>calculator.divide(6, 0)).toThrow("Cannot divide by zero")
  })
})

describe("caesarCipher", () => {
  test("shifts characters according to Caesar cipher rules", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    expect(caesarCipher("abc", -3)).toBe("xyz")
    expect(caesarCipher("Zebra!", 3)).toBe("Cheud!")
    expect(caesarCipher("Test123!", 5)).toBe("Yjxy123!")
  })
})

describe("analyzeArray", () => {
  test("analyzes an array of numbers", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6])
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  })
})
