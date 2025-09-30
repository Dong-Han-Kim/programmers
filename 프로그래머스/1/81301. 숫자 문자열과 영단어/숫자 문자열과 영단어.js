function solution(s) {
    let result = "";
    let word = "";
    const numMap = {
        zero: "0", one: "1", two: "2",
        three: "3", four: "4", five: "5",
        six: "6", seven: "7", eight: "8",
        nine: "9"
    }
    
    for (let ch of s) {
        if (!isNaN(ch)) {
            result += ch;
        } else {
            word += ch;
            if (numMap[word]) {
                result += numMap[word];
                word = "";
            } 
        }
        
        
    };
    return Number(result);
}