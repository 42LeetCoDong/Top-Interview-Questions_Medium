/**
 * @param {string} digits
 * @return {string[]}
 */
var ft_recur_putchar = function(ret, str, digits, i) {
    if (i >= digits.length) {
        ret.push(str);
        return ret;
    }

    let     button;

    if (digits[i] === "2") button = "abc";
    else if (digits[i] === "3") button = "def";
    else if (digits[i] === "4") button = "ghi";
    else if (digits[i] === "5") button = "jkl";
    else if (digits[i] === "6") button = "mno";
    else if (digits[i] === "7") button = "pqrs";
    else if (digits[i] === "8") button = "tuv";
    else if (digits[i] === "9") button = "wxyz";
    for (let j = 0; j < button.length; j++) ret = ft_recur_putchar(ret, str + button[j], digits, i + 1);
    return ret;
}

var letterCombinations = function(digits) {
    if (digits === "" || digits === null) return [];
    return (ft_recur_putchar([], "", digits, 0));
};