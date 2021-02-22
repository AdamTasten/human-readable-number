module.exports = function toReadable(numberToRead) {
  if (numberToRead === 0) return "zero";
  if (numberToRead === 10) return "ten";
  let numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    200: "two hundred",
    300: "three hundred",
    400: "four hundred",
    500: "five hundred",
    600: "six hundred",
    700: "seven hundred",
    800: "eight hundred",
    900: "nine hundred",
  };
  let string = [];
  console.log((numberToRead = numberToRead.toString().split("")));
  for (let i = 0; i < numberToRead.length; i++) {
    if (numberToRead.length - i === 3) string[i] = numbers[numberToRead[i] * 100];
    else if (numberToRead.length - i === 2 && numberToRead[i] !== "0" && numberToRead[i] !== "1")
      string[i] = numbers[numberToRead[i] * 10];
    else if (numberToRead.length - i === 2 && numberToRead[i] === "1") {
      string[i] = numbers[numberToRead[i] * 1 + numberToRead[i + 1]];
      break;
    } else if (numberToRead.length - i === 1 && numberToRead[i] !== "0")
      string[i] = numbers[numberToRead[i]];
    console.log(string);
  }
  //remove empty elements
  string = string.filter(function (el) {
    return el != null;
  });
  return string.join(" ");
}
