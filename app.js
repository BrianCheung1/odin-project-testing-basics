function capitalize(word) {
  if (word.length === 0) return "" // Handle empty string
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function reverseString(str) {
  return str.split("").reverse().join("")
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero")
    return a / b
  },
}

function caesarCipher(str, shift) {
  const shiftChar = (char, shift, baseCode) => {
    const charCode = char.charCodeAt(0)
    return String.fromCharCode(
      ((charCode - baseCode + shift + 26) % 26) + baseCode
    )
  }

  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return shiftChar(char, shift, 97) // 97 is ASCII code for 'a'
      } else if (char >= "A" && char <= "Z") {
        return shiftChar(char, shift, 65) // 65 is ASCII code for 'A'
      }
      return char // Non-alphabet characters remain unchanged
    })
    .join("")
}

function analyzeArray(arr) {
  const length = arr.length
  if (length === 0)
    return { average: NaN, min: Infinity, max: -Infinity, length } // Handle empty array
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const average = arr.reduce((sum, value) => sum + value, 0) / length

  return {
    average,
    min,
    max,
    length,
  }
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
}
