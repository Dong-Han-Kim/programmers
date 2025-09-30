// a = 빈병, b = 받는 콜라, n = 총 콜라
function solution(a, b, n) {
    let coke = 0;
    
    while (n >= a) {
        const exchanged = Math.floor(n / a) * b;
        coke += exchanged;
        n = n - Math.floor(n / a) * a + exchanged;
    }
    return coke;
}