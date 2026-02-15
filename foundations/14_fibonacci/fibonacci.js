const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else if (num === 0 || num === "0") {
        return 0
    } else if (typeof num === "string") {
        let numnum = parseInt(num);
        return numnum <= 1 ? numnum : fibonacci(numnum - 1) + fibonacci(numnum - 2);
    } else if (typeof num === "number" && num > 0) {
        return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
