const removeFromArray = function(arr, ...elim) {
    let answer = [];
    for (const element of arr) {
        if (!elim.includes(element)) {
            answer.push(element);
        }
    }
    return answer;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4, 5));

// Do not edit below this line
module.exports = removeFromArray;
