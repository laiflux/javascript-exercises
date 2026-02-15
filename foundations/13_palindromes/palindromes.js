const palindromes = function (string) {
    let regEx = /[\W_]/g;
    let lowStr = string.toLowerCase().replace(regEx, "");
    let revStr = lowStr.split("").reverse().join("");

    if (lowStr === revStr) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
