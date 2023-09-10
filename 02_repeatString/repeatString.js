const repeatString = (str, num) => {
    let ans = ""
    if (num > 0) {
      for (let i = 0; i < num; i++)
        {
          ans += str;
        }
    } else if (num == 0) {
        return ans;
    } else {
        return "ERROR";
    }
    return ans;
  };

// Do not edit below this line
module.exports = repeatString;

