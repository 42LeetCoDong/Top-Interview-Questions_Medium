// @@@@@@@@@ FAIL @@@@@@@@@@@@@

// function letterCombinations(digits: string): string[] {
//   if (!digits.length) return [];

//   const arr: string[][] = [
//     [],
//     [],
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
//     ['m', 'n', 'o'],
//     ['p', 'q', 'r', 's'],
//     ['t', 'u', 'v'],
//     ['w', 'x', 'y', 'z'],
//   ];
//   const result: string[] = [];

//   function premute(str, idx) {
//     if (idx === digits.length) {
//       result.push(str);
//       return;
//     }

//     for (let alpha of arr[digits[idx]]) {
//       premute(str + alpha, idx + 1);
//     }
//   }

//   premute('', 0);

//   return result;
// }

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];

  function permute(str, idx) {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let alpha of map[digits[idx]]) {
      permute(str + alpha, idx + 1);
    }
  }
  permute('', 0);
  return result;
};

// test code
console.log(letterCombinations('23'));
