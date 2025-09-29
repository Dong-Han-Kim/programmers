function solution(s) {
    return s.split(" ").map((word) => [...word].map((str, i) => i % 2 === 0 ? str.toUpperCase() : str.toLowerCase()).join("")).join(" ");;
}