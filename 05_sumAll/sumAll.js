const sumAll = function(num1, num2) {
    if ((typeof num1 != "number" || typeof num2 != "number") || (num1 < 0 || num2 < 0)) {
        return "ERROR";
    }

    let answer = 0;
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            answer += i;
        }
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            answer += i;
        }
    } else {
        return num1 + num2;
    }
    return answer;
};

console.log(sumAll(1, 4));
console.log(sumAll(4, 4));

// Do not edit below this line
module.exports = sumAll;
